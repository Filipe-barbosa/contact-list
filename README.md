# Desafio Contact List

Olá seja bem vindo ao desafio _Contact List_!!

Este é um projeto desenvolvido como parte do processo seletivo para o cargo de desenvolvedor frontEnd da empresa Take.

[Acesse a aplicação clicando aqui](https://filipe-barbosa.github.io/contact-list/)

## O Que é o Contact List

O _Contact List_ consiste em uma aplicação que faz requisições à alguns _endpoints_ e retorna os seus contatos. Esses contatos podem ser filtrados por nome e ordenamos por nome e data de criação. A sua visualização pode ser feita no modo de cards ou lista. Além disso, os contatos podem ser favoritados e exibidos em uma outra lista, clicando no icone presente no card. Ao clicar no nome do contato, é feita uma requisição e os dados de detalhamento deste contato são exibidos em uma nova tela.

## Executando o projeto

Antes de executar este projeto é necessário primeiramente instalar as dependências, é recomendado utilizar o gerenciador de pacotes _pnpm_ ou _npm_.
Após instalar as dependências basta executa-la com o comando `pnpm dev` ou `npm start`, a depender do gerenciador de pacotes escolhido para instalar as dependências.
Para o desenvolvimento deste projeto foi utilizado o gerenciador de pacotes pnpm, por isso é recomendado a utilização deste. Para a instalação do _pnpm_ siga as instruções neste [link](https://pnpm.io/installation).

## Estruturação do projeto

O projeto está estruturado nas seguintes pastas com os respectivos conteúdos:

- _components_: contém os componentes do projeto,
- _pages_: contém as páginas do projeto,
- _icons_: guarda os componentes de ícones.
- _context_: pasta na qual estão alocados os contextos usados.

#### Ferramentas.

O projeto foi desenvolvido com a linguagem `TypeScript` e a biblioteca React. Como bundler foi usada a ferramenta Vite. E como pré-processador de `CSS` foi utilizado o TailWind, dada a sua compatibilidade e facilidade de manuseio. Como ferramentas de teste foram utilizados o Jest e Testing Library.

## Estratégia de desenvolvimento.

Com o intuito de ter um código legível e menos verboso o projeto está dividido em componentes de estilos e componentes de lógica. Os contexts `BotApiContext` e `BotDetailContext` implementam todo o gerenciamento de estados e chamadas externas. Esta estratégia foi adotada para se evitar cair em uma dependência cíclica ao separar um context para o comportamento da listagem dos cards e outro para o detalhamento destes.

### BotApiContext

O _BotApiContext_ é o provedor de estados da aplicação e foi dividido em tarefas que provê todos os comportamentos. A primeira tarefa é lidar com os comportamentos da api, fazendo as requisições dinâmicas para o arquivo `api` que são alteradas sempre que o filtro ordenação por nome e criação são aplicados. Dada a documentação da api, foi concluído que a mesma só daria suporte para chamadas de ordenação.

O segundo problema que o BotApiContext procura resolver é prover os resultados do filtro, ele executa esta tarefa processando em algumas funções que limitam-se a pequenas tarefas e provendo os resultados após o preenchimento do campo de filtro por nome.

Um último problema que o BotApiContext resolve é o gerenciamento dos cards favoritos e não favoritos. Separando em 2 listas de acordo com o preenchimento e salvando no local-storage a lista de favoritos para que a mesma não se perca sempre que a aplicação for recarregada.

### BotDetailContext

Por sua vez o `BotDetailContext` é o responsável pelo gerenciamento dos detalhes do card selecionado, também fazendo requisições ao `api` com os dados do card que será detalhado, processando e expondo esses dados para a página de detalhamento do card.

### Api.

Arquivo criado para encapsular todas as funções de chamadas a api dentro da aplicação com o objetivo de que todas as chamadas partissem de um só lugar separando a lógica de processamento do dado da lógica de requisição.

### Rotas.

Utilizado o react router para o gerenciamento das rotas, a aplicação inicia-se em uma rota estática que renderiza os cards e ao clicar no detalhamento a pessoa usuária é direcionada para uma rota que é criada dinamicamente com o detalhamento do card selecionado.

### Componentes de exibição.

Para agilizar o desenvolvimento foi aplicado o uso do pré-processador de Css, o TailWind. Sua escolha foi dada pela experiência da pessoa desenvolvedora com a ferramenta e suas dependências serem baseadas todas em `js`. Todo o desenvolvimento de ui foi baseado no layout disponibilizado.

A aplicação inicia sem nenhum filtro de ordenação aplicado e a visualização no modo card. Podendo a pessoa usuária mudar o modo de visualização ao clicar nos botões icons de menu para visualizar o modo lista.

Como estratégia foi criado um aquivo principal de layout que contém todos os componentes que são de visualização global na aplicação como o Navbar e o body-container.

A primeira página chamada de `contact` é dividida em 3 sessões que renderizam um _Header_ com os filtros uma lista de favoritos e uma lista de cards.
A segunda página proveniente de uma rota dinâmica é dividida em vários cards que exibem o detalhamento do card selecionado.

### Formatação de código

Foi aplicada a formatação de código com o es-lint seguindo os padrões standard.

### Deploy

A aplicação faz deploy de forma autônoma sempre que existir commit na branch _main_ do repositório. E o deploy acontece no git-hub-pages.

## Melhorias.

Dada a condição de tempo o produto até então desenvolvido trata-se da versão 0. Como versão 1 foram pensadas algumas melhorias tais como:

<ul>

#### Mobile First

 <ul>
    Aplicar responsividade aos componentes de ui.
 </ul>

#### Aplicar filtro de Nome pela Api

 <ul>
    O filtro de nome não ser mais feito pela aplicação, mas retornado de um end-point.Com isso surge a necessidade de aplicar debounce na hora da chamada.
 </ul>

#### Paginação ou Scroll Infinito.

<ul>
Adotar uma estratégia de paginar as chamadas ou ate mesmo a implementação de um scroll infinito. No momento não implementada pela aplicação ainda lidar com um baixo volume de dados.
</ul>

#### Teste de integração.

<ul>
Estratégia que faz muito sentido para a evolução do produto, o que seria de muito valor para uma versão um com o aumento de elementos e equipe, o teste embora custoso se faz indispensável.

</ul>

#### Tratamento de resultados

<ul>
Tratar os resultados  retornados pela api, como unknown.
</ul>

</ul>

## Considerações finais

As práticas desenvolvidas levaram em consideração uma boa qualidade de código e visando entregar em tempo hábil.
