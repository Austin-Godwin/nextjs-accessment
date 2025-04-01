'use client'

import { TextField } from "@mui/material";



export default function MaterialTextField({ labelName, id, type, name, placeholder }: { labelName: string, id: string, type: string, name: string, placeholder: string }) {
    return (
        <div>
            <p className="mb-3 mt-3 block text-xs font-large text-gray-900">{labelName}</p>
            <TextField
                fullWidth
                hiddenLabel
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
                required
            />
        </div>
    );
}