# ControlLink-Dev
 
 ## Projeto foi desenvolvido com ReactJs, NodeJs, TypeScript e MySql, e fornece uma aplicação para gerenciar os links dos seus artigos.
 
 > Status do Projeto: Concluido :heavy_check_mark:
 
 ### Front-End
 
 Foi utilizado ReactJs para a criar as interfaces e o vite.js para o build da aplicação, na estilização foi utilizado o tailwindcss que me ajudou de maneira rapida a criar o estilo da pagina, para os modais da aplicação utilizados para criar e atualizar informações foi utilizado o Dialog do Radix ui.
 
 <br>
 De maneira geral o front foi desenvolvido de maneira simples e rapida, além de permitir um bom gerenciamento com os links.
 
 ### Back-End
 
 Foi utilizado Express para a criação da Api e uma estrutura baseada no Solid além do uso do TypeScript.
 <br>
 No incio foi desenvolvido uma api simples para testes, que pode ser encontrada no Readme na pasta server, mas apos a atualizar foi implementado o Solid e utilizado o TypeOrm para se conectar ao banco de dados e realizar operações com ele sendo hospedado na Hostgator e o TSyringe para o auxilo nas instanciações entra os arquivos controller, services e repositorys. Foi criado um arquivo .env.example na pasta server para as configurações utilizadas na conexão com o banco.
 
 <br>
 Para o webCrawler foi utilizado node-fetch e cheerio para se fazer o acesso as paginas, tentei realizar de maneira dinamica a importação porém encontrava dificuldades com a estruturação dos posts nas paginas, então foi deixado os arquivos de teste em server/src/webCrawler com a busca dos artigos da devGo e da alura, em produção foi implementado somente a importação dos links da [devGo](https://devgo.com.br/). Também encontrei dificuldade com o acesso aos outros links dentro da pagina com o crawler fazendo o acesso de varios links que não eram relacionados a artigos, então foi passado as tags definitivas de onde se estava os titulos e links , um print dos links acessadps pode ser visto também no Readme na pasta server.  
 
<br>
Para criar o build da Api foi utiliado o babel para gerar a compilação para javascript.  

<br>

## Rotas da aplicação
### Links
- > http://54.211.140.125/link/list : Listagem de todos os links
- > http://54.211.140.125/link/create : Criação de links
- > http://54.211.140.125/link/devGo/import : Importação de link, foi passado a url: "https://devgo.com.br/"
- > http://54.211.140.125/link/list : Listagem de todos os links


## Deploy da Aplicação com Netlify e Aws:

> https://control-links.netlify.app/ - Front-end

> http://54.211.140.125 - Back-end, acesso a Api


 
 
