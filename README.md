# Projeto-Canil da Talita 🐶
&nbsp;

- Este é um projeto que utiliza Node.js e npm para gerenciar dependências.
&nbsp;

![Banner do Projeto](imgREADME/banner_readme.png)

&nbsp;
&nbsp;

## Instruções de Configuração
&nbsp;
&nbsp;

Para iniciar este projeto, primeiro execute o seguinte comando para inicializar um novo projeto Node.js:
&nbsp;
&nbsp;

```bash
npm init
```

&nbsp;
&nbsp;

## Para instalar o TypeScript globalmente no seu sistema, execute o seguinte comando:


```bash
npm install -g typescript
```
- Isso permitirá que você use o comando tsc em qualquer lugar do seu sistema.    
&nbsp;

- Para verificar se o TypeScript foi instalado corretamente, você pode executar:   
```bash
tsc -v
``` 
- Instalação Local (Opcional)
<p>Se você preferir não instalar o TypeScript globalmente, você pode instalá-lo como uma dependência do projeto. Para isso, execute um dos seguintes comandos: </p>

```bash
npm install typescript
```
&nbsp;

### Inicializando o Projeto TypeScript
<p>Depois de instalar o TypeScript, você pode inicializar um novo projeto TypeScript executando o seguinte comando: </p>

```bash
npx tsc --init
```
### A seguir deve ser criada este arquivo depois instalar o TypeScript
<img src="imgREADME/tsconfigpng.png" alt="imagem de arquivo tsconfig.json">
&nbsp;

### A seguir comando  é utilizado para instalar três pacotes diferentes no seu projeto Node.js.
- Express para criar seu servidor web.
- Mustache-express para renderizar templates HTML.
- Dotenv para gerenciar variáveis de ambiente de forma segura.    

```bash
npm install express mustache-express dotenv 
```
&nbsp;

### A seguir O comando
```bash
npm install --save-dev @types/express @types/mustache-express @types/node
```
- npm install: Este é o comando básico do npm para instalar pacotes. 

<p>@types/express: Pacote com definições de tipos TypeScript para o framework Express, permitindo uso com verificação de tipos e autocompletar.  </p>

<p>@types/mustache-express: Pacote com definições de tipos TypeScript para o adaptador Mustache-Express, oferecendo suporte a tipos em projetos TypeScript.</p>

<p>@types/node: Pacote com definições de tipos TypeScript para o ambiente Node.js, permitindo interação segura com as APIs nativas do Node.js.    </p>

&nbsp;

### Depois de fazer essas instalções e crie uma pasta " SRC " e dentro dela crie um arquivo chamado "server.ts" para começar a RODAR
<img src="imgREADME/SRC.PNG" alt="">

- Agora para terminar com as configurações gerais do projeto vamos criar um atalho usando o nodemon
- 3 dependencias que devem estar globais são as seguintes prestar atenção!!
- NODEMON
- typescript
- ts-node
<p><strong>Essas dependencias devem estar globais</strong></p>

<p style="color: red;">Caso você não tenha essas dependências instaladas, não seja por isso, instale agora mesmo!</p>

```bash
npm install -g nodemon typescript ts-node
```

#

### Depois de feito tudo isso !!
- Vá ate seu 
<p style="color: green;"><a href="package.json">package.json</a></p>

- Adicionar essa seguinte informação !

<img src="imgREADME/json_mustache.png" alt="">

```bash
nodemon -e ts,json,mustache src/server.ts
```

#

### Pré-requisitos globais:

`npm install -g nodemon typescript ts-node`

#

### Instalação

`npm install`

#

### Para Rodar o Projeto

`npm run start-dev`

#

## Criando Rotas ✅🛤️🏳️

<p>Dentro da pasta routes que criei tenho um arquivo chamado <strong>index.ts</strong></p>

<img src="imgREADME/routes.png" alt="imagem da estrutura da pasta routes">
<a href="src/routes/index.ts">index.ts</a>

#
<p>COMUNICADO!!, essa pasta `_html`  não e obrigatoria no projeto, o arquivo HTML|pode ficar na raiz do projeto.</p>

<img src="imgREADME/Rotas.png">

#

## ⚙️Estrutura do projeto daqui pra frente!😉
 
- Depois de eu ter configurado o servidor e ele já esta rodando eu criei 2 pastas dentro do `src`

<p>vou mostrar abaixo a estrutura dele</p>
<img src="imgREADME/estrura src_models_controllers.png" alt="imagem das pastas do projeto">

#

## configurando as rotas para navegação controllers!!⛵

<img src="imgREADME/rotas_nav.png" alt="imagem da navegação da pagina">

- filtram e mostram uma lista de imagem 
- vou fazer um controller para essas navegações!

&nbsp;
<p>Entre na pasta controllers para ver a estrutura e como configurei😉</p>
<a href="src/controllers/pageController.ts">controllers</a>

#

## separdo as views 
- dentro de `src` crie uma pasta views
- dentro dela crie as pasta `pages` e `partials`
<a href="src/views/">Link arquivo / Pasta views</a>

---
## Manipulando dados da navegação entre páginas

## Ativando menu ⚙️🗃️⬇️
<p>Aqui vou explicar como foi estruturado essa parte do código passo a passo!</p>
<p>Essa parte e básicamente, página inicial de um site que mostra animais (tipo cachorros, gatos e peixes).</p>

## Agora Vamos por Partes !!🍕 📦 1. Importações

``` ts
import { Request, Response } from 'express';
```
- `Request` é o pedido do cliente (tipo: "Oi, quero ver todos os animais!")

- `Response` é o que você vai entregar de volta (a página bonitinha com os animais).

## 🏠 2. Criando a função da rota home

``` ts
export const home = (req: Request, res: Response) => {
```
<p>🍳 Aqui estamos criando uma função chamada <strong>home</strong>.</p>

<p>Pensa que ela é o chefe da cozinha que vai preparar a página quando alguém quiser ver a página principal.</p>

## 🖼️ 3. Renderizando a página

``` ts
res.render('pages/page', {
```
<p>👩‍🍳 Esse é o momento em que o chefe fala:</p>

- "Vamos montar uma página usando o molde chamado `'pages/page'`."

## 🍔 4. Passando os dados (variáveis) para a view

``` ts
    menu: {
        all: true,
        dog: false,
        cat: false,
        fish: false
    },
```
<p>📋 Aqui ele está dizendo:</p>

- "No menu, vamos deixar 'Todos os animais' ligado `(true)` e os outros desligados `(false)`."
- É como se o site tivesse botões de filtro, e só o botão "Todos os animais" estivesse acesso `(tipo uma luzinha)`

## Banner 
``` ts
    banner: {
        title: 'Todos os animais',
        background: 'allanimals.jpg',
    }
```
<p>Outro objeto chamado banner está sendo enviado com:</p>

- `title:` o título do banner que vai aparecer na parte de cima da página.
- `background:` o nome da imagem de fundo que será mostrada.
- E fiz assim para os demais titulos e imagens !!.

<a href="src/controllers/pageController.ts">link da página / pageController</a>

<img src="imgREADME/pageController.png" alt="img do arquivo pageControllers.ts">

#

## Criando funções Auxiliares ⛱️💡

<p>Criei dentro da pasta src, outra pasta chamada helpers, e dentro dela criei o arquivo createMenuObjects.js</p>
<a href="src/helpers/createMenuObjects.ts">link pasta / helpers</a>


## Criando o Model pet: 1

<a href="src/models/pets.ts">link para / pasta models</a>