import { ReactNode } from "react";

interface OrdersProps {
    children: ReactNode;
}

export function Orders({ children }: OrdersProps) {
    return (
        <div className='flex self-center flex-col gap-y-4'>
            <h1 className="text-2xl font-bold text-teal-950">Ordens de Compra Monitoradas</h1>
            {children}
        </div>

    )
}