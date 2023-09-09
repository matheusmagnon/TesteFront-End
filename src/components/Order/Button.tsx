import * as Dialog from '@radix-ui/react-dialog';
import { DetailsOrderModal } from './Modals/DetailsOrderModal';
import { Plus } from 'phosphor-react';
import { OrdenCompraMonitorada } from '../../context/OrdensCompraMonitoradasContext';
import { ReactNode } from 'react';

interface ButtonProps {
    orden?: OrdenCompraMonitorada;
    children: ReactNode
}
export function Button({ orden, children }: ButtonProps) {

    return (
        <Dialog.Root>
            <Dialog.Trigger type='button' className=" text-gray-50 
        flex gap-1 items-center text-base border-2 border-blue-900 rounded-lg p-1 bg-blue-600 hover:text-gray-50 hover:bg-blue-700" >
                <Plus size={20} weight="bold" />
                {children}
            </Dialog.Trigger>
            <DetailsOrderModal order={orden} />
        </Dialog.Root >
    )
}