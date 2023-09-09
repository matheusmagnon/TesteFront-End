import * as Dialog from '@radix-ui/react-dialog';
import { XCircle } from 'phosphor-react';
import { useContext } from 'react'
import { OrdenCompraMonitorada, OrdensCompraMonitoradasContext } from '../../../context/OrdensCompraMonitoradasContext';
import { Register } from '../Register';
import { Field } from '../Field';
import { Button } from '../Button'

interface DetailsOrderProps {
    order?: OrdenCompraMonitorada;
}
export function DetailsOrderModal({ order }: DetailsOrderProps) {
    const { signalBuy } = useContext(OrdensCompraMonitoradasContext)
    const handleOrder = () => signalBuy(order!);

    // order?.EstaDisponivelParaCompra = 
    const buttonStyle = "text-gray-50 flex gap-1 items-center text-base border-2 border-blue-900 rounded-lg p-1 bg-blue-600 hover:text-gray-50 hover:bg-blue-700"

    return (
        <Dialog.Portal className="align-middle">
            <Dialog.Overlay className="fixed inset-0 bg-black/40" />
            <Dialog.Content className="fixed w-96 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-md bg-white p-4 shadow border-solid border-2 border-green-700 rounded-xl">
                <div className='flex justify-between items-center pb-4'>
                    <Dialog.Title className="text-xl text-gray-900 font-bold">
                        Detalhes da Ordem </Dialog.Title>
                    <Dialog.Close>
                        <XCircle size={28} weight="fill" className='text-red-800 font-bold' />
                    </Dialog.Close>
                </div>
                <div className=' flex flex-col space-y-2 '>
                    <Register>
                        <span >Identificação da propriedade:</span>
                        <Field>
                            {`${order?.propriedade?.idPropriedade}`}
                        </Field>
                        <span className='pt-2'>Tipo de propriedade:</span>
                        <Field>
                            {`${order?.propriedade?.tipoPropriedade}`}
                        </Field>
                    </Register>
                    <Register>
                        <span >
                            Identificação do produtor:
                        </span>
                        <Field>
                            {`${order?.produtor?.idProdutor}`}
                        </Field>
                    </Register>
                    <Register>
                        <span>
                            Parecer da análise:
                        </span>
                        <Field>
                            {`${order?.monitoramento.parecerAnalise}`}
                        </Field>
                    </Register>
                    <Register>
                        <span>
                            Tipo de vínculo do produtor:
                        </span>
                        <Field>
                            {`${order?.vinculo?.tipoVinculoProdutor}`}
                        </Field>
                    </Register>
                    <div className='flex justify-between'>
                        <button onClick={() => handleOrder()} className={
                            !order?.EstaBloqueado ? buttonStyle : 'cursor-not-allowed bg-opacity-70 font-bold ' + buttonStyle}>
                            {!order?.EstaBloqueado ? "Sinalizar compra" : "* Ordem comercializada"}
                        </button>
                        <Dialog.Close>
                            <button className='text-gray-50 flex gap-1 items-center text-base border-2 border-yellow-900 rounded-lg p-1 bg-yellow-600 hover:text-gray-50 hover:bg-yellow-700'>
                                Voltar
                            </button>
                        </Dialog.Close>
                    </div>
                </div>
            </Dialog.Content>
        </Dialog.Portal>
    )
}