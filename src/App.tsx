import { useContext } from "react"
import { Container } from './components/Container'
import { Header } from './components/Header'
import { OrdensCompraMonitoradasContext } from "./context/OrdensCompraMonitoradasContext"
import { Orders } from "./components/Orders"
import { Order } from "./components/Order"
import { Content } from "./components/Content"

function App() {
  const { ordensCompraMonitoradas } = useContext(OrdensCompraMonitoradasContext)

  return (
    <div>
      <Container>
        <Header />
        <Content>
          <Orders >
            {ordensCompraMonitoradas.map((order, i) => {
              return (
                <Order key={i} order={order} id={i} />
              )
            })}
          </Orders>
        </Content>
      </Container>
    </div>
  )
}

export default App
