import * as Dialog from '@radix-ui/react-dialog';
import { DetailsOrderModal } from './Modal/DetailsOrderModal';
import { Plus } from 'phosphor-react';
import { OrdenCompraMonitorada } from '../../../context/OrdensCompraMonitoradasContext';

interface ButtonProps {
    orden?: OrdenCompraMonitorada;
}
export function Button({ orden }: ButtonProps) {

    return (
        <Dialog.Root>
            <Dialog.Trigger type='button' className=" text-gray-50 
        flex lg:gap-1 items-center text-base border-2 border-blue-900 rounded-lg p-1  h-8 bg-blue-600 hover:text-gray-50 hover:bg-blue-700" >
                <Plus size={20} weight="bold" />
                Ver detalhes
            </Dialog.Trigger>
            <DetailsOrderModal order={orden} />
        </Dialog.Root >
    )
}