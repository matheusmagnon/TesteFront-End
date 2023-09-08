import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

export interface OrdenCompraMonitorada {
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
    }
}

interface OrdensCompraMonitoradasContextType {
    ordensCompraMonitoradas: OrdenCompraMonitorada[];
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

    return (
        <OrdensCompraMonitoradasContext.Provider value={{ ordensCompraMonitoradas }}>
            {children}
        </OrdensCompraMonitoradasContext.Provider>
    )
}