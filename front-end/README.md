# Front End do projeto

Com React e vite

instando o vite:

```jsx
yarn create vite
```

O vite vai perguntar o nome do arquivo no meu caso vai ser fe de front-end

usando o ts e o react

entre na pasta que foi criada

```jsx
cd fe
```

Agora só instalar as dependencias

```jsx
yarn
```

blz, se tudo deu certo digite:

```jsx
yarn dev
```

deverá rodar no browser a pasta inicial do vite.

A partir daqui vai ser o front em react.

configurando

clica com o direito na area de pastas e pede para crair o .editorconfig

## eslint/config

agora digite no ternminal

```jsx
npm init @eslint/config
```

para instalar o eslint-config

Vai pedi uma serie de perguntas ver no back deste projeto que é a mesma coisa.

Depois de tudo isso vamos continuar instalando as coisas, agora vamos instalar o

## styled-components

```jsx
yarn add styled-components
```

```jsx
yarn add -D @types/styled-components
```

Serve para da estilo no nossos componentes. como o nome diz.

## vscode-styled-components

instale esta extensão no vscode, para que os estilo seja completado no ctrl + espaço.

ex: de código:

```jsx
  import styled from 'styled-components';
/* é tipo uma funcao para estilizar o componente X,
nota: tem todas as tags do html, usaremos o header */
const Container = styled.header`
  background: #D73035;
`;

```

Ai é só pegar este header e colocar no lugar da div, que faz a funcao do container do código react.

EX:

```jsx
import styled from 'styled-components';

const Container = styled.header`
  background: #D73035;
`;

export function Header() {
  return (
    <Container> <-- aqui
      <div className="page-details">
        <h1>Pedidos</h1>
        <h2>Acompanhe os pedidos dos clientes</h2>
      </div>
    </Container>
  );
}
```


continua em 1:38:00



Se der tempo volto e coloco o passo a passo, mais como estou devendo o passo a passo do backend, sei la se vai da tempo para detalhar tudo oque estou fazendo.


<!-- rever button do Order se da pra fazer um componentes pra eles -->



