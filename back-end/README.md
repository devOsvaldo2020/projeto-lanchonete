# projeto em typescript

fonte: curso de js do prof:

link no explore url('C:\Users\junio\OneDrive\Área de Trabalho\___curso-baixado-para-avaliar\O-poder-do-Javascript-JStack')

## Para comecar

Crie uma pasta onde vai ficar o projeto.
Abre o terminal crie a pasta: mkdir api.
Abre o vscode, digitando no próprio terminal: code api.

## Com o vscode aberto

Abre o terminal e digite:

```jsx
npm i -g yarn
```

para instalar o yarn.

Agora vamos iniciar nosso projeto, Digite:

```jsx
yarn init -y
```

caso nao funcione att o npm para no minimo esssa versão.

```jsx
npm install -g npm@9.2.0
```

Tenta denovo, se nao der certo da pra usar o npm no lugar do yarn sem problema. Pode ser usado o npm mesmo.

Instalando o typescript como dependencia:

```jsx
yarn add -D typescript
```

criando o comando de configuração do typescript

```jsx
yarn tsc --init
```

Vamos usar o padrão mesmo, não altere nada no arquivo gerado tsconfig.json

## Criando a pasta com o nome src

Onde vai ficar nosso projeto.

Dentro crie um arquivo index.ts

Dentro deste arquivo digite:

```jsx
let texto: string;
texto = 1235;

console.log(texto);
```

Vai da um erro pq node não roda TS. Bora arrumar isso.

No terminal digite:

```jsx
yarn tsc
```

Este comando cria o arquivo js.

Antes de rodar vai no arquivo tsconfig, na linha 52 ou próximo ache o "outDir" que é a configuração de onde criar a saída do js criado, e coloca como ./dist ou ./build, tanto faz, este arquivo vai ser o arquivo de distribuição para deploy.

## Pronto: vamos continuar criando nosso projeto

Vamos no package.json e cria o script para ao invés de ficar rodando yarn tsc vamos roda como yarn build
Altere o script para esse.

```jsx
"scripts": {
    "build": "tsc"
  },
```

testa.

Agora crie o arquivo .gitignore e dentro dele digite:

```jsx
node_modules
dist
```

por enquanto é só isso.

até aqui as configurações do typescript tudo ok - salvo como template na v0.0.1

## fase 3

Instalar extension no vscode

👉 EditorConfig for VS Code - EditorConfig (do ratinho)
👉 ESLint for VS Code - Microsoft

Editando o editorConfig, clica com o direito na raiz do projeto e vai no generation .editorconfig e clica nele, pronto foi criado um novo arquino na raiz com o nome .editorconfig.
clica neste arquivo e estude ele.

Este arquivo serve para definir as configuração padrão do seu projeto em questão de identação. ex. espaco de linha, pulos de linhas, etc.

Instalando o eslink, digite

```jsx
npm init @eslint/config
```

Aqui temos bastante perguntas para configurar
escolha entre elas, vai aparecer uma de cada vez, use a setas para andar entre elas.
👉 To check syntax, find problems, and enforce code style
👉 JavaScript modules (import/export)
👉 None of these
👉 Yes
👉 Node
👉 Answer questions about your style
👉 JSON
👉 Spaces
👉 Single
👉 windows
👉 Yes
👉 Yes
👉 yarn

## fase 4 - criação do express e instalação do servidor

```jsx
 yarn add express
```

Instalar sua dependencia

```jsx
  yarn add -D @types/express
```

Beleza, bora para o código do servidor.

## edita o index.ts

Digite nele:

```jsx
import express from "express";
const app = express();
const port = 3001
app.listen(port, () => {
    console.log('servidor rodando no http://localhost:${port}');
});
```

Boa rode o yarn build e depois o node no dist/index. testa se o navegador rodou.

```jsx
yarn build
```

```jsx
node dist
```

## instalando o ts-node e nodemon

```jsx
yarn add -D ts-node
```

Nota: com este arquivo eu posso rodar o serve e ir testando sem ter a pasta dist, ou seja, posso fazer todo o meu código e só criar a pasta dist no final.

Como rodar:

```jsx
yarn ts-node src/index.ts
```

## instalando o nodemon

Digite:

```jsx
yarn add -D nodemon
```

Cria um novo script no package.json para usar esses dois
Nota: qnd chamar o nodemon ele vai chamar o ts-node
Add essa linha no script.

```jsx
,"dev": "nodemon src/index.ts"
```

Rode o codigo:

```jsx
yarn dev
```

Se tudo deu certo vai esta com o servidor rodando.

ok, salvarei aqui, como a version v0.0.2 template

Oque fizemos nesta fase? instalação do express, do ts-node e do nodemon.

## fase 5 desenvolvimento + banco de dados mongodb

Abre o docker faz ele rodar, abre um novo terminal no vscode e instala o mongodb no docker:

```jsx
    docker run --name mongo -p 27017:27017 -d mongo
```

Depois instala o mongoose:

```jsx
    yarn add mongoose
```

blz, vamos que vamos ....

### Nota: se fechar tudo ao abrir tem que startar o mongo no docker

Se estiver dando erro de conexão seque o passo acima.

Agora vamos escrever a linha de código para se conectar no mongodb, vai no index.ts e escreva as linhas a seguir.

```jsx
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017")
    .then(() =>  console.log("conectado ao mongodb"))
    .catch((e) =>  console.log(e, "algo deu errado"));
```

Para o servidor e rode denovo: relembando no terminal: aperte o ctrl + C depois digite:

```jsx
yarn dev
```

Se tudo certo tem que aparecer servidor rodando no ...
e
conectado no mongodb
senao

### Nota: se fechar tudo ao abrir tem que startar o mongo no docker, fica a dica novamente

@ Se estiver dando erro de coneccao seque o passo acima.

blz... bora.

## fase 6 - criação do models

Abre o editor de banco de dados de sua preferencia.

Faca sua estrutura, conforme image-01.png

URL("./img/image-01.png");

Agora precisamos fazer a estrutura do models
Cria uma pasta app/models/Category.ts -- aqui é como se fosse nosso tabela la da foto

Dentro deste arquivo digite:

```jsx
// Category
import {model, Schema} from "mongoose";

export const Category = model("Category", new Schema({
    name: {type: String, required: true},
    icon: {type: String, required: true},
}));
```

Faz a mesma coisa para Product e Order - ficando assim:

```jsx
// Product
import { model, Schema } from "mongoose";

export const Product = model("Product", new Schema({
    name: { type: String, required: true, },
    description: { type: String, required: true, },
    imagePath: { type: String, required: true, },
    prince: { type: Number, required: true, },
    ingredients: {
        type: [{
            name: { type: String, required: true, },
            icon: { type: String, required: true, },
        }], required: true,
    },
    category: { type: Schema.Types.ObjectId, required: true, ref: "Category", },
}));
```

```jsx
// Order
import { model, Schema } from "mongoose";

export const Order = model("Order", new Schema({
    table: { type: String, required: true },
    status: { type: String, enum: ["WAITING", "IN_PRODUCTION", "DONE"], default: "WAITING", },
    createdAt: { type: Date, default: Date.now, },
    products: {
        type: [{
            product: { type: Schema.Types.ObjectId, required: true, ref: "Product", },
            quantity: { type: Number, default: 1 },
        }], required: true,
    },
}));

```

Boa Conseguimos chegar até aqui. outra fase concluida. Parabéns...

## fase 7 - continua 1:25:00

### rotas

### definindo o caso de uso para as rotas

👉 listar categoria
👉 create categoria
👉 listar produtos
👉 create produtos
👉 get products by category
👉 listar order
👉 create order
👉 change order status
👉 delete / cancel order

crie um arquivo com o nome router.ts la no seu src

Digite as seguintes linha nele:

```jsx
import { Router } from "express";

export const router = Router();

// 👉 listar categoria
router.get("/catedories", (req, res) => {
    res.send("ok");
});
// 👉 create categoria
router.post("/categoreis", (req, res) => {
    res.send("ok");
});
// 👉 listar produtos
router.get("/products", (req, res) => {
    res.send("ok");
});
// 👉 create produtos
router.post("/products", (req, res) => {
    res.send("ok");
});
// 👉 get products by category
router.get("/categories/:categoriesId/products", (req, res) => {
    res.send("ok");
});
// 👉 listar order
router.get("/orders", (req, res) => {
    res.send("ok");
});
// 👉 create order
router.post("/orders", (req, res) => {
    res.send("ok");
});
// 👉 change order status
router.patch("/orders/:orderId", (req, res) => {
    // patch - alteracao parcial de elemento(s)
    // put - alteracao completa nos elementos.
    res.send("ok");
});
// 👉 delete / cancel order
router.delete("/orders/:orderId", (req, res) => {
    res.send("ok");
});

```

### casos de uso

Crie uma pasta no src/app com o nome useCases

Dentro desta pasta [useCases], crie pastas para cada entidade.

crie as pastas para:
👉 categories
👉 products
👉 order

<!-- categorias listar categorias-->
Dentro de categories crie o arquivo:

```jsx
    listCategories.ts
```

e digite nele:

```jsx
    import { Request, Response } from "express";

    import { Category } from "../../models/Category";

    export async function listCategories(req: Request, res: Response) {
        try{
            const categories = await Category.find();
            res.json(categories);
        }catch{
            console.log(error);
            res.sendStatus(500);
        }
    }

```

muda no arquivo router na linha...

```jsx
    // 👉 listar categoria
    router.get("/categories", (req, res) => {
        res.send("ok");
    });
```

para...

```jsx
    // 👉 listar categoria
    router.get("/categories", listCategories);
```

Pronto finalizado ate aqui, segue nos outros códigos.

<!-- categorias create categorias-->
Dentro de categories crie o arquivo:

```jsx
    createCategories.ts
```

e digite nele:

```jsx
    import { Request, Response } from "express";

    import { Category } from "../../models/Category";

    export async function createCategories(req: Request, res: Response) {
        try {
        const {icon, name} = req.body;
        const category = await Category.create({icon, name});
        res.json(category);
        } catch {
            res.sendStatus(500);
        }
    }

```

muda no arquivo router na linha...

```jsx
    // 👉 create categoria
    router.post("/categories", (req, res) => {
        res.send("ok");
    });
```

para...

```jsx
    // 👉 create categoria
    router.post("/categories", createCategories);
```

Pronto finalizado ate aqui, segue nos outros códigos.

#### fase 7.1 - concluida a parte de products

contiue em 2:00:00
<!-- categorias listar categorias-->
Dentro de products crie o arquivo:

```jsx
    listProducts.ts
```

e digite nele:

```jsx
    import { Request, Response } from "express";

    import { Products } from "../../models/Products";

    export async function listCategories(req: Request, res: Response) {
        try{
            const product = await Products.find();
            res.json(product);
        }catch{
            console.log(error);
            res.sendStatus(500);
        }
    }

```

muda no arquivo router na linha...

```jsx
    // 👉 listar categoria
    router.get("/products", (req, res) => {
        res.send("ok");
    });
```

para...

```jsx
    // 👉 listar categoria
    router.get("/products", listProducts);
```

Pronto finalizado ate aqui, segue nos outros códigos.

<!-- categorias create categorias-->
Dentro de products crie o arquivo:

```jsx
    createProducts.ts
```

e digite nele:

```jsx
    import { Request, Response } from "express";

    import { Product } from "./../../models/Product";

    export async function createProduct(req: Request, res: Response) {
        try {
            const imagePath = req.file?.filename;
            const { name, description, price, category, ingredients } = req.body;

            const product = await Product.create({
                name,
                description,
                imagePath: imagePath ? imagePath : "image.png",
                price: Number(price),
                category,
                ingredients: ingredients ? JSON.parse(ingredients) : [],
            });

            res.json(product);

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
    }
}

```

muda no arquivo router na linha...

```jsx
    // 👉 create categoria
    router.post("/products", (req, res) => {
        res.send("ok");
    });
```

para...

```jsx
    // 👉 create categoria
    router.post("/products", createProduct);
```

Pronto finalizado ate aqui, segue nos outros códigos.
### fim da fase 7.1 products


#### fase 7.2 - concluida a parte de order

contiue em 2:00:00
<!-- categorias listar categorias-->
Dentro de order crie o arquivo:

```jsx
    listOrders.ts
```

e digite nele:

```jsx
    import { Request, Response } from "express";

    import { Order } from "../../models/Order";

    export async function listOrders(req: Request, res: Response) {
        try {
            const orders = await Order.find()
                .sort({ createdAt: 1 }) // -1 o ultimo que saiu --> 1 o primeiro que saiu
                .populate("products.product");

         res.json(orders);
        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

```

muda no arquivo router na linha...

```jsx
    // 👉 listar categoria
    router.get("/orders", (req, res) => {
        res.send("ok");
    });
```

para...

```jsx
    // 👉 listar categoria
    router.get("/Orders", listOrders);
```

Pronto finalizado ate aqui, segue nos outros códigos.

<!-- categorias create categorias-->
Dentro de order crie o arquivo:

```jsx
    createOrders.ts
```

e digite nele:

```jsx
    import { Request, Response } from "express";

    import { Order } from "../../models/Order";

    export async function createOrder(req: Request, res: Response) {
        try {
            const {table, products} = req.body;

            const order = await Order.create({table, products});

            res.status(201).json(order);

        } catch (error) {
            console.log(error);
            res.sendStatus(500);
        }
    }

```

muda no arquivo router na linha...

```jsx
    // 👉 create categoria
    router.post("/orders", (req, res) => {
        res.send("ok");
    });
```

para...

```jsx
    // 👉 create categoria
    router.post("/orders", createOrder);
```

Pronto finalizado ate aqui, segue nos outros códigos.



#### fase 7.2 - concluida a parte de orders


continua ...
<!-- fim no 3:08:00 -->



```jsx

```

```jsx

```

```jsx

```

```jsx

```

👉
🍕
🍔
🥤
🥂
🏪
📌

"[{"name": "Brie", "icon": "🧀"},{ "name": "Gouda", "icon": "🧀"},{ "name": "Parmesao", "icon": "🧀"},{ "name": "Mussarela", "icon": "🧀"}]"

[{ "name": "Mussarela", "icon": "🧀"},{ "name": "Parmesao", "icon": "🧀"},{ "name": "Gouda", "icon": "🧀"},{ "name": "Brie", "icon": "🧀"}]
