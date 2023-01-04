import { Container, Content } from './style';
// add a imagem do logo
import logo from '../../../src/assets/images/logo.svg';

export function Header() {
  return (
    <Container>
      <Content>
        <div className="page-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>
        <img src={logo} alt="logo do site" />
      </Content>
    </Container>
  );
}
