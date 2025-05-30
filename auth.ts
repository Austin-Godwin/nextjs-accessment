import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import * as Yup from 'yup';
import type { User } from "@/app/lib/definitions";
import bcryptjs from 'bcryptjs';
import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const credentialsSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
});

async function getUser(email: string): Promise<User | undefined> {
    try {
        const user = await sql<User[]> `SELECT * FROM users WHERE email = ${email}`;
        return user[0];
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                // validate credentials using Yup
                const validateCredentials = await credentialsSchema.validate(credentials);

                // if validation passes, you can authenticate the user here.
                if (validateCredentials) {
                    const { email, password } = validateCredentials;
                    const user = await getUser(email);
                    if (!user) return null;
                    const passwordsMatch = await bcryptjs.compare(password, user.password);

                    if (passwordsMatch) return user;
                }

                console.log('Invalid credentials');
                return null;
            },
        })
    ],
});

export async function registerUser(email: string, username: string, password: string): Promise<string | undefined> {
  if (!email || !username || !password) {
    return 'All fields are required.';
  }

  if (!email.includes('@')) {
    return 'Invalid email address.';
  }

  if (password.length < 6) {
    return 'Password must be at least 6 characters.';
  }

  const existing = await sql`SELECT id FROM users WHERE email = ${email}`;
  if (existing.length > 0) {
    return 'Email is already registered.';
  }

  const hashedPassword = await bcryptjs.hash(password, 10);

  try {
  const existing = await sql`SELECT id FROM users WHERE email = ${email}`;
  if (existing.length > 0) {
    return 'Email is already registered.';
  }
} catch (err) {
  console.error('Database error:', err);
  throw new Error('Database query failed');
}

}