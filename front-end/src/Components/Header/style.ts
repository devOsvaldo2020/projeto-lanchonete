// add o header
import styled from 'styled-components';

// é tipo uma funcao para estilizar o componente X.
// nota: tem todas as tags do html, usaremos o header.
export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #D73035;
  height: 168px;
  padding: 0 20px;
  `;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .page-details{
    h1{
      color: #fff;
      font-size: 32px;
    }
    h2{
      color: #fff;
      font-weight: 400;
      font-size: 16px;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;

