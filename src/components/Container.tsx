import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

export function Container({ children }: ContainerProps) {
    return (
        <div className="w-full flex flex-col items-center bg-gray-900 min-h-screen font-satoshiRegular text-gray-50">
            {children}
        </div>
    )
}