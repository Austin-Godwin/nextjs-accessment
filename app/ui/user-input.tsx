'use client'

export default function UserInput({ htmlFor, label, id, type, name, placeholder }: { htmlFor: string, label: string, id: string, type: string, name: string, placeholder: string }) {
    return (
        <div>
            <label
                className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                htmlFor={htmlFor}
            >
                {label}
            </label>

            <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-5 text-sm outline-2 outline-gray-200 placeholder:text-gray-500 text-black"
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                required
            />
        </div>
    );
}