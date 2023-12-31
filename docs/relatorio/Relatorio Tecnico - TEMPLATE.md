# Informações do Projeto
`Gestão de Treinos`  

......  Gestão de Treinos ......

`Análise e desenvolmento de sistemas` 

......  Análise e desenvolmento de sistemas......

## Participantes

 Os membros do grupo são: 
- Allan Richard Nogueira Alves
- Arthur Henrique Ribeiro Beiral
- Guilherme Henrique Brandão Bonifácio
- Leandro Henrique dos Santos
- Matheus Henrique dos Santos Alvim
- Matheus Henrique Resende Magalhaes


# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

A relação entre as pessoas e a academia nem sempre é direta e descomplicada. Muitos indivíduos enfrentam uma série de desafios ao tentar manter essa conexão. Infelizmente, diante dessas dificuldades, muitos acabam desistindo de investir na sua saúde e bem-estar através do exercício físico.

> Nesse momento você deve apresentar o problema que a sua aplicação deve
> resolver. No entanto, não é a hora de comentar sobre a aplicação.
> Descreva também o contexto em que essa aplicação será usada, se
> houver: empresa, tecnologias, etc. Novamente, descreva apenas o que de
> fato existir, pois ainda não é a hora de apresentar requisitos
> detalhados ou projetos.
>
> Nesse momento, o grupo pode optar por fazer uso
> de ferramentas como Design Thinking, que permite um olhar de ponta a
> ponta para o problema.
>
> **Links Úteis**:
> - [Objetivos, Problema de pesquisa e Justificativa](https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3)
> - [Matriz Certezas, Suposições e Dúvidas](https://medium.com/educa%C3%A7%C3%A3o-fora-da-caixa/matriz-certezas-suposi%C3%A7%C3%B5es-e-d%C3%BAvidas-fa2263633655)
> - [Brainstorming](https://www.euax.com.br/2018/09/brainstorming/)

## Objetivos
Desenvolver um site de gestão de treinos para oferecer uma solução que torne a jornada fitness mais fácil, motivadora e personalizada para cada usuário.
Com nossa aplicação, pretendemos transformar a maneira como as pessoas abordam o exercício físico, tornando-o mais conveniente, adaptado às suas necessidades individuais e, acima de tudo, sustentável. 
> Aqui você deve descrever os objetivos do trabalho indicando que o
> objetivo geral é desenvolver um software para solucionar o problema
> apresentado acima. Apresente também alguns (pelo menos 2) objetivos
> específicos dependendo de onde você vai querer concentrar a sua
> prática investigativa, ou como você vai aprofundar no seu trabalho.
> 
> **Links Úteis**:
> - [Objetivo geral e objetivo específico: como fazer e quais verbos utilizar](https://blog.mettzer.com/diferenca-entre-objetivo-geral-e-objetivo-especifico/)

## Justificativa

Apoiar as pessoas em sua busca por um estilo de vida mais saudável e ativo, facilitando a manutenção dessa importante relação com a academia.

> Descreva a importância ou a motivação para trabalhar com esta aplicação
> que você escolheu. Indique as razões pelas quais você escolheu seus
> objetivos específicos ou as razões para aprofundar em certos aspectos
> do software.
> 
> O grupo de trabalho pode fazer uso de questionários, entrevistas e
> dados estatísticos, que podem ser apresentados, com o objetivo de
> esclarecer detalhes do problema que será abordado pelo grupo.
>
> **Links Úteis**:
> - [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

## Público-Alvo

Nosso público-alvo abrange tanto homens quanto mulheres, com idades variando entre 14 a 40 anos, que são frequentadores assíduos de academias.

> Descreva quem serão as pessoas que usarão a sua aplicação indicando os
> diferentes perfis. O objetivo aqui não é definir quem serão os
> clientes ou quais serão os papéis dos usuários na aplicação. A ideia
> é, dentro do possível, conhecer um pouco mais sobre o perfil dos
> usuários: conhecimentos prévios, relação com a tecnologia, relações
> hierárquicas, etc.
>
> Adicione informações sobre o público-alvo por meio de uma descrição
> textual, ou diagramas de personas, mapa de stakeholders, ou como o
> grupo achar mais conveniente.
> 
> **Links Úteis**:
> - [Público-alvo: o que é, tipos, como definir seu público e exemplos](https://klickpages.com.br/blog/publico-alvo-o-que-e/)
> - [Qual a diferença entre público-alvo e persona?](https://rockcontent.com/blog/diferenca-publico-alvo-e-persona/)
 
# Especificações do Projeto
O projeto consistirá em uma interface agradável, intuitiva e responsiva que será construída com HTML, CSS, Bootstrap e JavaScript.
O usuário poderá escolher qual agrupamento muscular deseja treinar e selecionará no site para ver como irá realizar exercícios para o músculo escolhido.
Também haverá uma calculadora que ajudará o usuário a entender quantas calorias ele consumirá por dia de acordo com seu objetivo.

> Apresente uma visão geral do que será abordado nesta parte do
> documento, enumerando as técnicas e/ou ferramentas utilizadas para
> realizar a especificações do projeto

## Personas e Mapas de Empatia

José da Silva tem 23 anos e deseja ter uma vida mais saudável praticando musculação 

 **Persona 1 - José**
 ![Exemplo de Persona](images/persona1.png)
 
   **Mapa de Empatia - José**
![Mapa de Empatia](images/mapa-empatia.png)

   **Persona 2 - Maria**
![Mapa de Empatia](images/persona2.png)

   **Mapa de Empatia - Maria**
   
![Mapa de Empatia](images/mapa-empatia2.jpg)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO...  `FUNCIONALIDADE`          |PARA...  `MOTIVO/VALOR`                       |
|--------------------|---------------------------------------------|----------------------------------------------|
| Usuário do sistema | Ver como eu realizo o exercios              | Para que eu nao me lesione realizando        |
|                    | Ver qual a utilidade do exercicio           | Saber qual musculo é trabalhado              |
|                    | Descobri quantas calorias eu tenho comer    | Para montar minha propria dieta              |
|                    | Calcular os macros alimentares              | Saber a dieta a seguir e me alimentar melhor |
|                    | Vejo o exercicio para certo musculo         | Saber como treino aquele musculo             |
> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-------------------------|------------------------------------------|
|RF-001| Permitir que o usuário escolha o músculo que deseja treinar e como | ALTA |
|RF-002| Permitir que o usuário descubra quantas calorias comer por dia     | MÉDIA |
|RF-003| Permitir que o usuário tenha uma calculadora de macros alimentares | BAIXA |
|RF-004| Permitir que o usuário tenha uma aba para que monte seus treinos   | BAIXA |
|RF-005| Possuir uma tela de login.                                         | BAIXA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Deve ser desenvolvido com Css, HTML, BootStrap e JavaScript       | ALTA | 
|RNF-002| O sistema deve ser responsivo para rodar em um dispositivos móvel | ALTA | 
|RNF-003| Deve ser intuitivo e de fácil acesso                              | MÉDIA|
|RNF-004| Suporte a dispositivos IOS e Android                              | ALTA |
|RNF-005| Deve ser entregue ate o fim do semestre                           | ALTA |
|RNF-006| Não deve ter gastos para sua produção                             | ALTA |

> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
> - [Requisitos Funcionais (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na
>   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.
> 
> **Links Úteis**:
> 
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não poderá ser desenvolvido back-end                  |
|03| Será desenvolvido por no maximo 5 pessoas             |
|04| Não tera custo para os usuários                       |

> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


# Projeto de Interface

A interface do projeto foi desenvolvida de forma funcional e que seja de simples visualização para o usuário, onde o mesmo ja consegue entender do que se trata o nosso site 
a partir do momento que entra nele. Sendo uma interface auto-intuitiva e simples de mecher, podendo ser usada por qualquer pessoa sem necessidade de conhecimentos avançados
na area da tecnologia.

> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

![Exemplo de UserFlow](images/User_Flow.jpeg)


## Wireframes

Paginal Inicial wireframe
![Exemplo de Wireframe](images/paginaInic.png)

Musculos para escolher 
![Exemplo de Wireframe](images/parteMusc.png)

Quando a pessoa clicar em uma dessa opções sera direcionada para uma pagina parecida com essa
![Exemplo de Wireframe](images/wireframe1.png)
![Exemplo de Wireframe](images/biceps1.png)


Parte que conta um pouco sobre o site 
![Exemplo de Wireframe](images/paginaQS.png)


# Metodologia

O processo de trabalho adotado pelo grupo foi fundamentado em metodologias ágeis, Framework Scrum. A divisão de papéis e tarefas promoveu a autonomia dos membros, que se auto-organizam para atingir os objetivos da sprint. Cada integrante do grupo ficou responsável por um requisito do sistema. O controle sobre o trabalho foi realizado ao final de cada sprint o grupo se reunia e cada um passava a parte que ficou responsável, em um primeiro momento o protótipo de cada aplicação e depois o código em si de cada requisito.  

> Nesta parte do documento, você deve apresentar a metodologia 
> adotada pelo grupo, descrevendo o processo de trabalho baseado nas metodologias ágeis, 
> a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a
> gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido
> pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar
> o andamento do projeto, a execução das tarefas e o status de desenvolvimento
> da solução.
> 
> **Links Úteis**:
> - [Tutorial Trello](https://trello.com/b/8AygzjUA/tutorial-trello)
> - [Gestão ágil de projetos com o Trello](https://www.youtube.com/watch?v=1o9BOMAKBRE)
> - [Gerência de projetos - Trello com Scrum](https://www.youtube.com/watch?v=DHLA8X_ujwo)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

## Divisão de Papéis

|                  Descrição do Requisito                            | Responsável|
|-------------------------|------------------------------------------|
| Permitir que o usuário escolha o músculo que deseja treinar e como | Leandro Henrique|
| Permitir que o usuário descubra quantas calorias comer por dia     | Guilherme Brandão|
| Permitir que o usuário tenha uma calculadora de macros alimentares | Allan Nogueira|
| Permitir que o usuário tenha uma aba para que monte seus treinos   | Matheus Rezende|
| Possuir uma tela de login.                                         | Matheus Alvim|
| Footer                                                             | Arthur|

> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas

Para desenvolver o projeto usamos o Replit tanto como banco de dados como para hospedar o site. Optamos por usa-lo pois foi ele que foi passado nas aulas de DIW, então tinhamos uma facilidade maior em ta desenvolvendo as tarefas nele.

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Hospedagem Dando de Dados|  Replit |https://replit.com/@matheusalvimori/JSON-Login| 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PBE-SI/pbe-si-ads-2023-2-tiaw-t2-gestao-de-treinos/tree/master/codigo | 
|Hospedagem do site | Replit | [https://replit.com/@LeandroHenriq42/aaaa |

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

Controle de Versão no Desenvolvimento do Site de Gestão de Treinos para Academia
O desenvolvimento do nosso site de gestão de treinos para academia foi guiado por uma abordagem robusta de controle de versão, utilizando principalmente o sistema Git. Aqui está um resumo conciso do processo:
Inicialização do Repositório:
O projeto começou com a inicialização de um repositório Replit para armazenar o código-fonte e os recursos do site.

Colaboração Eficiente:
A equipe dividiu o trabalho em ramos (branches) para que os membros pudessem trabalhar simultaneamente em diferentes funcionalidades sem interferências.

Commits Regulares:
Realizamos commits regulares à medida que desenvolvíamos novos recursos ou corrigíamos problemas. Cada commit foi acompanhado por uma mensagem significativa que descrevia as alterações realizadas..

Ferramentas Utilizadas:

Replit foi a principal ferramenta de controle de versão.

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

Nome do Projeto: Gestão de Treinos
É um site dedicado à gestão abrangente de treinos e nutrição para academias. Ele oferece uma interface intuitiva e funcionalidades específicas para que os usuários possam criar, visualizar e monitorar seus treinos, calcular macronutrientes e sua calorias.

Funcionalidades Principais:
Aba de Treinos:

Criar, editar e excluir treinos personalizados.
Adicionar exercícios com detalhes como séries, repetições, carga.
Visualização gráfica do progresso ao longo do tempo.
Calendário.

Calculadora de Macronutrientes:
Cálculo automático de proteínas, carboidratos e gorduras com base nos objetivos do usuário.

Calculadora de Calorias:
Informa quanto de calorias o usuário tem que consumir por dia.

Benefícios Esperados:

Facilitação na organização e acompanhamento dos treinos.
Auxílio na manutenção de uma dieta balanceada.
Motivação através do acompanhamento de resultados e progressos.
Melhoria na experiência do usuário através de uma interface amigável e intuitiva.

## Tecnologias Utilizadas

Linguagem: JavaScript
Linguagem de marcação de texto: HTML
Estilização da página: CSS
IDE: Visual Studio Code
Frameworks: Bootstrap
Biblioteca: jQuery
Serviços WEB: Replit

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

A pagina web foi construida com HTML, CSS E Js. Usamos nela como back-end o local storage e um banco de dados no Replit. E também hospedamos o código no Replit.



![Gestaso de treinos drawio](https://github.com/ICEI-PUC-Minas-PBE-SI/pbe-si-ads-2023-2-tiaw-t2-gestao-de-treinos/assets/132620854/249755c3-ff74-4cd0-ad57-fbdfa086f774)

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

Testamos vários cenários para cada requisito e, ao encontrar erros, os corrigimos, registrando alguns cenários mais curiosos e importantes. Eles estão apresentados nos tópicos abaixo.
> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

1

![CT01](https://github.com/ICEI-PUC-Minas-PBE-SI/pbe-si-ads-2023-2-tiaw-t2-gestao-de-treinos/assets/142936348/9f7b8f46-54ce-492e-8642-42bfd84c44a3)

2

![CT02](https://github.com/ICEI-PUC-Minas-PBE-SI/pbe-si-ads-2023-2-tiaw-t2-gestao-de-treinos/assets/142936348/c0db655a-65f3-469f-860d-f3cfe666d02b)

3

![CT03](https://github.com/ICEI-PUC-Minas-PBE-SI/pbe-si-ads-2023-2-tiaw-t2-gestao-de-treinos/assets/142936348/7ff6383d-41db-4a44-b278-a70279451f51)

4

![CT04](https://github.com/ICEI-PUC-Minas-PBE-SI/pbe-si-ads-2023-2-tiaw-t2-gestao-de-treinos/assets/142936348/deb4f236-ee51-4fae-8399-ce394f2daab4)

5

![CT05](https://github.com/ICEI-PUC-Minas-PBE-SI/pbe-si-ads-2023-2-tiaw-t2-gestao-de-treinos/assets/142936348/af787d8a-e17d-497c-8742-a566b4c091c8)


> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

1.1
![imgct01](https://github.com/ICEI-PUC-Minas-PBE-SI/pbe-si-ads-2023-2-tiaw-t2-gestao-de-treinos/assets/142936348/0c7978cf-cefc-4480-ae4e-54be0ab569ae)



2.1

![imgct02](https://github.com/ICEI-PUC-Minas-PBE-SI/pbe-si-ads-2023-2-tiaw-t2-gestao-de-treinos/assets/142936348/8936f99c-5374-4814-a0be-ec971e8f9c28)

3.1

![imgct03](https://github.com/ICEI-PUC-Minas-PBE-SI/pbe-si-ads-2023-2-tiaw-t2-gestao-de-treinos/assets/142936348/a67f8dc0-e54a-4cfa-9167-ed8529838409)



4.1

![imgct04](https://github.com/ICEI-PUC-Minas-PBE-SI/pbe-si-ads-2023-2-tiaw-t2-gestao-de-treinos/assets/142936348/63b2581d-6155-45bc-9de6-349b4b6cf414)



5.1

![imgct05](https://github.com/ICEI-PUC-Minas-PBE-SI/pbe-si-ads-2023-2-tiaw-t2-gestao-de-treinos/assets/142936348/a933fd64-f1a3-42d3-9b34-e7acb4ac0948)



> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

https://www.w3schools.com

https://getbootstrap.com/docs/5.3/getting-started/introduction/


https://chat.openai.com/


https://pt.stackoverflow.com/

https://musclewiki.com/


> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
