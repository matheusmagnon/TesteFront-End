// import { Trash } from "phosphor-react";
import { OrdenCompraMonitorada } from "../context/OrdensCompraMonitoradasContext";

// import { SeeMoreButton } from "./SeeMoreButton";

interface OrderProps {
    order: OrdenCompraMonitorada;
    id: number
}

export function Order({ order, id }: OrderProps) {
    const _id = id + 1

    return (
        <div className='flex items-center justify-between w-full rounded-lg p-3 bg-teal-800'>
            <div className="flex flex-col overflow-x-auto ">
                <h2>Ordem de compra N° {`${_id}`}</h2>
                <div className="flex gap-2">
                    N° Cadastro Rural: {`${order.propriedade?.numeroCadastroRural}`}
                    {/* <h3>Propriedade:</h3> */}
                    <h3>Nome da propriedade: </h3>
                    <span>{`${order.propriedade?.nomePropriedade}`}</span>
                </div>
                <div className="flex gap-2">
                    <h3>Nome produtor: {`${order.produtor?.nomeProdutor}`}</h3>
                    <p>CPF: {`${order.produtor?.cpfProdutor}`}</p>
                </div>
                <div className="flex gap-2">
                    <h3>Data do Monitoramento: {`${order.monitoramento.dataMonitoramento}`}</h3>
                    <p>Analista: {`${order.monitoramento.analista}`}</p>
                    <p>Resultado: Aprovado</p>
                </div>
            </div>
            {/* <SeeMoreButton task={task} /> */}

        </div>
    )
}