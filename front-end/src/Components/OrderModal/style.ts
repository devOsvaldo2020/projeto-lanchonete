import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background-color: rgba(0,0,0,0.6);
  backdrop-filter: blur(4.5px);
`;

export const ModalBody = styled.div`
background-color: #fff;
width: 480px;
border-radius: 8px;
padding: 32px;


header {
  display: flex ;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 24px;
  }

  button {
    line-height: 0%;
    border: 0;
    background-color: transparent;
  }
}

.status-container{
  margin-top: 32px;

   small {
    font-size: 14px;
    opacity: 0.8;
   }

   div {
    display: flex;
    align-items: center;
    margin-top: 8px;
    gap: 8px;
   }
}
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    .item{
      display: flex;

      & + .item{
        margin-top: 16px;
      }

      img {
        border-radius: 6px;
        width: 84px;
        height:42.76px
      }

      .quantity {
        font-size: 22px;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 12px;
      }

      .product-details {
        margin-left: 4px;
        width: 100%;

        strong{
          display: block;
          margin-bottom: 4px;
        }
        div{
          display: flex;
          justify-content: space-between;

          > p {
            max-width: 100px;
            font-size: 14px;
            color: #666;
          }
        }

      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;

    span {
      font-weight: 500;
      font-size: 14px;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
display: flex;
flex-direction: column;
margin-top: 32px;

.primary{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #333;
  border-radius: 48px;
  border: 0;
  color: #fff;
  padding: 12px 24px ;
}
.secondary {
  padding: 12px 24px ;
  color: #d73035;
  font-weight: bold;
  border: 0;
  background-color: transparent;
  margin-top: 12px;
}

`;





