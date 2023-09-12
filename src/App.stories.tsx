import { Meta, StoryObj } from '@storybook/react'
import { App } from './App'

// import { withContexts } from "@storybook/addon-contexts/react";
// import { OrdensCompraMonitoradasContext } from './context/OrdensCompraMonitoradasContext';



export default {
    title: 'Templates/App',
    component: App,
    // decorators: [withReactContext(OrdensCompraMonitoradasContext)],
    // decorators: [withContexts({
    //     Context: OrdensCompraMonitoradasContext,
    //     initialState: {
    //         orders: [
    //             {
    //                 id: 1,
    //                 propriedade: {
    //                     idPropriedade: 1,
    //                     nomePropriedade: "Fazenda Nacional",
    //                     numeroCadastroRural: 1867,
    //                     tipoPropriedade: "latifúndio"
    //                 },
    //                 produtor: {
    //                     cpfProdutor: "111.222.333-01",
    //                     idProdutor: 23,
    //                     nomeProdutor: "Fugêncio"
    //                 },
    //                 monitoramento: {
    //                     analista: "Maria Feitosa",
    //                     dataMonitoramento: "29/08/2023",
    //                     parecerAnalise: "A localização e composição da propriedade estão de acordo com a legislação vigente",
    //                     resultado: "Aprovada"
    //                 },
    //                 vinculo: {
    //                     tipoVinculoProdutor: "Proprietório"
    //                 },
    //                 EstaBloqueado: true
    //             },
    //             {
    //                 id: 2,
    //                 propriedade: {
    //                     idPropriedade: 17,
    //                     nomePropriedade: "Fazenda da Conciliação ",
    //                     numeroCadastroRural: 1313,
    //                     tipoPropriedade: "familar"
    //                 },
    //                 produtor: {
    //                     cpfProdutor: "134.191.719-45",
    //                     idProdutor: 25,
    //                     nomeProdutor: "Luiz Carlos"
    //                 },
    //                 monitoramento: {
    //                     analista: "João Carlos",
    //                     dataMonitoramento: "12/07/2023",
    //                     parecerAnalise: "A localização e composição da propriedade estão de acordo com a legislação vigente",
    //                     resultado: "Aprovada"
    //                 },
    //                 vinculo: {
    //                     "tipoVinculoProdutor": "Gestor"
    //                 },
    //                 EstaBloqueado: false
    //             }
    //         ]
    //     },
    // })],

} as Meta
// const meta: Meta<typeof App> = {
//     component: App,
// };

// export default meta;
export const Default: StoryObj = {}