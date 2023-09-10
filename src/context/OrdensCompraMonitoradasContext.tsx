import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface OrdenCompraMonitorada {
    id: number
    propriedade?: {
        idPropriedade: number
        nomePropriedade: string;
        numeroCadastroRural: number
        tipoPropriedade: string
    },
    produtor?: {
        idProdutor: number
        nomeProdutor: string
        cpfProdutor: string
    },
    monitoramento: {
        dataMonitoramento: string
        analista: string
        resultado: string
        parecerAnalise: string
    },
    vinculo?: {
        tipoVinculoProdutor: string
    },
    EstaBloqueado?: boolean
}

interface OrdensCompraMonitoradasContextType {
    ordensCompraMonitoradas: OrdenCompraMonitorada[];
    signalBuy: (order: OrdenCompraMonitorada) => void;
}

interface OrdensCompraMonitoradasProviderProps {
    children: ReactNode
}

export const OrdensCompraMonitoradasContext = createContext({} as OrdensCompraMonitoradasContextType)

export function OrdensCompraMonitoradasProvider({ children }: OrdensCompraMonitoradasProviderProps) {
    const [ordensCompraMonitoradas, setOrdensCompraMonitoradas] = useState<OrdenCompraMonitorada[]>([])

    const fetchOrders = async () => {
        const response = await api.get('/orders');
        setOrdensCompraMonitoradas(response.data);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const signalBuy = (order: OrdenCompraMonitorada) => {
        api.patch(`/orders/${order.id}`, {
            "EstaBloqueado": true
        }).then(fetchOrders)
    }

    return (
        <OrdensCompraMonitoradasContext.Provider value={{ ordensCompraMonitoradas, signalBuy }}>
            {children}
        </OrdensCompraMonitoradasContext.Provider>
    )
}