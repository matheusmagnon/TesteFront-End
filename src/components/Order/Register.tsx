import { ReactNode } from "react"

interface RegisterProps {
    children: ReactNode
}

export function Register({ children }: RegisterProps) {
    return (
        <div className="flex flex-wrap gap-x-1 items-end p-2  border-2 border-slate-400 rounded-lg">
            {children}
        </div>
    )
}