import { ReactNode } from "react"

interface FieldContainerProps {
    children: ReactNode
}
export function FieldContainer({ children }: FieldContainerProps) {

    return (
        <div className="space-x-2 mt-2">
            {children}
        </div>
    )
}