import { OrdersBoard } from '../OrdersBoard';
import { Container, } from './style';

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="⏱"
        title="Fila de espera"
      />
      <OrdersBoard
        icon="🍲"
        title="Em preparação"
      />
      <OrdersBoard
        icon="✔"
        title="Pronto"
      />
    </Container>
  );
}
