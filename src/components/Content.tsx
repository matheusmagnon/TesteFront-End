import { ReactNode } from "react";

interface ContentProps {
    children: ReactNode;
}

export function Content({ children }: ContentProps) {
    return (
        <main className="flex flex-col lg:w-7/12 lg:p-0 p-2 mb-20  ">
            {children}
        </main>

    )
}