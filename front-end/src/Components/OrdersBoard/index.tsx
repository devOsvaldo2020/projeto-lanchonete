import { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './style';

interface OrdersBoardProps {
  icon: string,
  title: string
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {

  const [isModalVisible, setIsModalViseble] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModal(order: Order) {
    setIsModalViseble(true);
    setSelectedOrder(order);
  }

  function handerCloseModal() {
    setIsModalViseble(false);
    setSelectedOrder(null);
  }

  return (
    < Board >

      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={handerCloseModal}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type='button' key={order._id} onClick={() => handleOpenModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </ Board >
  );
}

