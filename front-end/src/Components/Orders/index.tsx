import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container, } from './style';

const orders: Order[] = [
  {
    '_id': `63b450673199497e9752179f`,
    'table': `3`,
    'status': `WAITING`,
    'products': [
      {
        'product': {
          'name': `Coca-cola`,
          'imagePath': `1672760206682-coca-cola.png`,
          'price': 7,
        },
        'quantity': 4,
        '_id': `63b3470832ed124eaa171b24`
      },
      {
        'product': {
          'name': `Pizza de frango`,
          'imagePath': `1672761391787-frango-catupiry.png`,
          'price': 42,
        },
        'quantity': 2,
        '_id': `63b345141595eff32a301549`
      },
    ],
  },
  {
    '_id': `63b450673199497e9752179f`,
    'table': `12`,
    'status': `WAITING`,
    'products': [
      {
        'product': {
          'name': `Coca-cola`,
          'imagePath': `1672760206682-coca-cola.png`,
          'price': 7,
        },
        'quantity': 3,
        '_id': `63b3470832ed124eaa171b24`
      },
      {
        'product': {
          'name': `quatro queijos`,
          'imagePath': `1672749034412-quatro-queijos.png`,
          'price': 57,
        },
        'quantity': 2,
        '_id': `63b345141595eff32a301549`
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon="⏱"
        title="Fila de espera"
        orders={orders}
      />
      <OrdersBoard
        icon="🍲"
        title="Em preparação"
        orders={[]}
      />
      <OrdersBoard
        icon="✔"
        title="Pronto"
        orders={[]}
      />
    </Container>
  );
}
