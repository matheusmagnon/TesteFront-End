import { ReactNode } from "react";

interface OrdersProps {
    children: ReactNode;
}

export function Orders({ children }: OrdersProps) {
    return (
        <div className='mt-4 flex flex-col gap-y-2'>
            <h1 className="text-3xl font-bold">Ordens de Compra</h1>
            {children}
        </div>

    )
}