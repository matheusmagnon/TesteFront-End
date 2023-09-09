// import { Trash } from "phosphor-react";
import { OrdenCompraMonitorada } from "../../context/OrdensCompraMonitoradasContext";
import { Button } from "./Button";
import { Field } from "./Field";
import { Register } from "./Register";

// import { SeeMoreButton } from "./SeeMoreButton";

interface OrderProps {
    order: OrdenCompraMonitorada;
}

export function Order({ order }: OrderProps) {

    return (
        <div className='flex w-full rounded-lg p-3 bg-gray-100 border border-gray-300 hover:opacity-90 hover:bg-gray-200'>
            <div className="flex flex-col overflow-x-auto gap-y-2 w-full">
                <div className="flex justify-between">
                    <h2 className="font-bold pb-2">
                        <span>N° Cadastro Rural: </span>
                        <Field>
                            {`${order.propriedade?.numeroCadastroRural}`}
                        </Field>
                        {order.EstaBloqueado && <span className="text-red-700"> Está Ordem já foi comercializada</span>}
                    </h2>
                    <Button orden={order} >Ver detalhes</Button>
                </div>
                <Register>
                    <span>Nome da propriedade: </span>
                    <Field>
                        {`${order.propriedade?.nomePropriedade}`}
                    </Field>
                </Register>
                <Register>
                    <span>Nome produtor:</span>
                    <Field>
                        {`${order.produtor?.nomeProdutor}`}
                    </Field>
                    <span>CPF:</span>
                    <Field>
                        {`${order.produtor?.cpfProdutor}`}
                    </Field>
                </Register>
                <Register>
                    <span>
                        Data do Monitoramento:
                    </span>
                    <Field>
                        {`${order.monitoramento.dataMonitoramento}`}
                    </Field>
                    <span>Analista: </span>
                    <Field>
                        {`${order.monitoramento.analista}`}
                    </Field>
                    <span>Resultado:</span>
                    <Field>
                        {`${order.monitoramento.resultado}`}
                    </Field>
                </Register >
            </div>
        </div>
    )
}