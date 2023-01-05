import { useEffect } from 'react';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';
import closeIcon from './../../assets/images/close-icon.svg';

import { Overlay, ModalBody, OrderDetails, Actions } from "./style";

interface OrderModalProps {
  visible: boolean;
  order: Order | null;
  onClose(): void;
}

export function OrderModal({ visible, order, onClose }: OrderModalProps) {

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent){
      if (event.key === `Escape`){
        onClose();
      }
    }

    document.addEventListener(`keydown`, handleKeyDown);

    return ()=> {
      document.removeEventListener(`keydown`, handleKeyDown);
    };
  }, [onClose]);

  if (!visible || !order) {
    return null;
  }
  /*  >>> Forma antiga sem o reduce. <<<
  let total = 0;
  order.products.forEach(({ product, quantity }) => {
    total += product.price * quantity;
  });

  */

  // metodo reduce do js6
  const total = order.products.reduce((total, { product, quantity }) => {
    return total + (product.price * quantity);
  }, 0);

  return (
    <Overlay>
      <ModalBody>

        <header>
          <strong>Mesa {order.table}</strong>

          <button type="button" onClick={onClose}>
            {/*  onClick={closeModal()} */}
            <img src={closeIcon} alt="Icone fechar [x]" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do Pedido</small>
          <div>
            <span>
              {/* "WAITING", "IN_PRODUCTION", "DONE" */}
              {order.status === `WAITING` && `⏱`}
              {order.status === `IN_PRODUCTION` && `🍲`}
              {order.status === `DONE` && `✔`}
            </span>

            <strong>
              {order.status === `WAITING` && `Fila de espera`}
              {order.status === `IN_PRODUCTION` && `Em preparação`}
              {order.status === `DONE` && `Pronto`}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">

            {order.products.map(({ _id, product, quantity }) => (

              <div className="item" key={_id}>
                <img src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                />

                <span className='quantity'>{quantity}</span>
                <div className="product-details">
                  <strong>{product.name}</strong>
                  <div>
                    <p>valor Unitário: {formatCurrency(product.price)}</p>
                    <p>SubTotal: {formatCurrency(product.price * quantity)}</p>
                  </div>
                </div>

              </div>
            ))}

            <div className="total">
              <span>Total</span>
              <strong>{formatCurrency(total)}</strong>
            </div>
          </div>

        </OrderDetails>

        <Actions>
          <button type='button' className='primary'>
            <span>🍲</span>
            <strong>Iniciar Produção</strong>
          </button>

          <button type='button' className='secondary'>
            <strong>Cancelar pedido</strong>
          </button>


        </Actions>

      </ModalBody>
    </Overlay>
  );
}



