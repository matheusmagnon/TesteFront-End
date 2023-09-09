import { ReactNode } from "react"

interface FieldProps {
    children: ReactNode
}

export function Field({ children }: FieldProps) {
    return (
        <span className="border border-slate-700 rounded-lg px-2 mr-1 bg-zinc-300 ">
            {children}
        </span>
    )
}