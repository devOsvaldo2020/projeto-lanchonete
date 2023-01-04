import { GlobalStyles } from './styles/GlobalStyles';

import { Header } from './Components/Header/index';
import { Orders } from './Components/Orders/index';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
    </>
  );
}
