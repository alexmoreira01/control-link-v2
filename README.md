# ControlLink-Dev
 
 ## Projeto foi desenvolvido com ReactJs, NodeJs, TypeScript e MySql, e fornece uma aplicação para gerenciar os links dos seus artigos.
 
 > Status do Projeto: Concluido :heavy_check_mark:
 
 ## Atualização sobre o domínio
 Não obtive sucesso com a propagação da dns até o momento, portanto a aplicação front end caso seja executada em ambiente de desenvolvimento pode ser utilizado o acesso http com ip público do servidor na aws sendo ele: http://54.211.140.125 com as rotas sendo detalhadas em "Rotas da aplicação", mas ela ainda esta hospedada em https://control-links.netlify.app/ , porém sem acesso a Api.
 
 <br>
 
O acesso ao banco de dados tanto em desenvolvimento como em produção(acessando pelo ip público), sempre ira utilizar uma conexão com o banco MySql na HostGator, optei por deixar minhas próprias credenciais de acesso no arquivo .env na pasta server, caso queiram utilizar a api em desenvolvimento, com isso não é necessário rodar as migrations para se criar a tabela no banco, mas caso a utilize o caminho da pasta deve ser alterado como esta detalhado abaixo em "Para se executar o projeto em desenvolvimento ou build".
 
 ## Principais linguagens e libs utilizadas

- [ReactJs](https://reactjs.org/)
- [ViteJs](https://vitejs.dev/)
- [Tailwindcss](https://tailwindcss.com/)
- [Radix](https://www.radix-ui.com/)
- [Axios](https://axios-http.com/)
- [NodeJs](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](http://expressjs.com/pt-br/)
- [TypeOrm](https://typeorm.io/)
- [TSyringe](https://github.com/Microsoft/tsyringe)
- [Babel](https://babeljs.io/)
- [Cheerio](https://cheerio.js.org/)
- [Node-Fetch](https://www.npmjs.com/package/node-fetch)


 
 ## Front-End - ReactJS
 
 Foi utilizado ReactJs e TypeScript para a criar as interfaces e o vite.js para o build da aplicação, na estilização foi utilizado o tailwindcss que me ajudou de maneira rapida a criar o estilo da pagina, para os modais da aplicação utilizados para criar e atualizar informações foi utilizado o Dialog do Radix ui.
 
 <br>
 De maneira geral o front-end foi desenvolvido de maneira simples e rápida, além de permitir um bom gerenciamento com os links.
 
 ## Back-End - NodeJs
 
 Foi utilizado Express para a criação da Api e uma estrutura baseada no Solid além do uso do TypeScript.
 <br>
 No incio foi desenvolvido uma api simples para testes, que pode ser encontrada no Readme na pasta server, mas após a atualizar foi implementado o Solid e utilizado o TypeOrm para se conectar ao banco de dados e realizar operações com ele sendo hospedado na Hostgator e o TSyringe para o auxilo nas instanciações entra os arquivos controller, services e repositorys. Foi criado um arquivo .env.example na pasta server para as configurações utilizadas na conexão com o banco.
 
 <br>
 Para o webCrawler foi utilizado node-fetch e cheerio para se fazer o acesso as paginas, tentei realizar de maneira dinâmica a importação porém encontrava dificuldades com a estruturação dos posts nas páginas, então foi deixado os arquivos de teste em server/src/webCrawler com a busca dos artigos da devGo e da alura, em produção foi implementado somente a importação dos links da [devGo](https://devgo.com.br/). Também encontrei dificuldade com o acesso aos outros links dentro da pagina com o crawler fazendo o acesso de varios links que não eram relacionados a artigos, então foi passado as tags definitivas de onde se estava os títulos e links, um print dos links acessados pode ser visto também no Readme na pasta server.  
 
<br>
Para criar o build da Api foi utiliado o babel para gerar a compilação para javascript.  

<br>

## Rotas da aplicação
### Links - rotas utilizando somente o http - https sem funcionamento ainda
- > http://54.211.140.125/link/list : Get - Listagem de todos os links
- > http://54.211.140.125/link/create : Post - Criação de links com informações passadas no body como Json, exemplo:
```sh
{
"label": "Título ",
"url": "Link artigo"
}
```
- > http://54.211.140.125/link/devGo/import : Post - Importação de link com informações passadas no body como Json, exemplo:
```sh
{
"url": "https://devgo.com.br/"
}
```
- > http://54.211.140.125/link/update/:id : Put - Atualização de um link pelo seu id passado por route param
- > http://54.211.140.125/link/delete/:id : Delete - Deleta um link pelo seu id passado por route param

## Deploy da Aplicação com Netlify e Aws:

> https://control-links.netlify.app/ - Front-end

> http://54.211.140.125 - Back-end, acesso a Api http - requisições pelo insomnia

> https://dev.freelancerdesucesso.fun/ - Back-end, acesso a Api com https - não propagado ainda

## Para se executar o projeto em desenvolvimento ou build

#### Atenção ao se rodar as migrations do typeorm deve se alterar a pasta em server/src/database/index.ts, que esta comentado, o caminho para acesso das migrations é alterado quando se gera o build da aplicação.
#### O link utilizado pelo axios em web/src/services/api.ts, também deve ser alterado e nele ja contém o link que é a rota padrão para acesso das outras, em desenvolvimento esta: http://54.211.140.125/link e em produção https://dev.freelancerdesucesso.fun/link

- Instalar dependências - Executar na pasta web e server - yarn ou npm
```sh
yarn ou npm
```
- Na pasta web e server - Inicia a duas aplicações como desenvolvimento
```sh
yarn dev
```
- Na pasta web e server - Cria o build das duas aplicações
```sh
yarn build
```
- Na pasta server - Roda a aplicação com o build gerado
```sh
yarn start
```
- Na pasta web - Roda a aplicação com o build gerado
```sh
yarn deploy
```
- Na pasta server - Busca links de artigos para testes na Alura
```sh
yarn crawlerTest
```
- Na pasta server - Busca links de artigos para testes na devGo
```sh
yarn crawlerDev
```
 
 <br>
 
 ## Print App
 ![image](https://user-images.githubusercontent.com/77466610/192182660-9ddf644d-81ea-41aa-89fe-b04402a4b658.png)
 ![image](https://user-images.githubusercontent.com/77466610/192182735-0ce41fde-4a5e-46aa-9b86-f5cf7c7096c4.png)
 ![image](https://user-images.githubusercontent.com/77466610/192395840-f1224d87-4b01-4db1-8615-57b69daf1494.png)

 
