import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { inter } from "@/app/ui/fonts";

export default function Layout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased`}>
                <AppRouterCacheProvider>
                    {children}
                </AppRouterCacheProvider>
            </body>
        </html>
    );
}