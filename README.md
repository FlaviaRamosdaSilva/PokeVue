# Pokevue - Desafio Front-End com consumo de API
<br>
Caro Tech Lead,
<br>
Segue minhas considerações ao realizar o desafio.
<br>
Primeiramente gostaria de agradecer imensamente a oportunidade de poder participar da vaga de Desenvolvedor Jr. na sua equipe. Tive um grande aprendizado realizando a minha "Pokevue".
<br>

## Desafio resumido:
<br>
Realizar um site Front-end com consumo da API PokeAPI com Design futurista possuindo as seguintes informações em tela: 
* Visualização de gráficos com os dados dos pokemons;
* Uma página para pesquisar os pokemóns com uma barra de pesquisa no topo;
* Um card com os dados dos Pokemons;
<br>


## Composições técnicas do site:
<br>
O site foi desenvolvido com Vue3 adicionado a ferramenta Vite, o framework de CSS Bootstrap e a biblioteca ChartJS para realizar os gráficos. Para animação do Card utilizamos também a biblioteca Animate CSS.
<br>

## Como foi realizar o desafio (relato de uma iniciante):
<br>
Inicialmente aceitei o desafio porém confesso que não tinha a habilidade técnica para realizá-lo.
Ainda não trabalhei com o Typescript e também não conhecia o Vue. o framework que estou utilizando no curso de programação é React, porém havia iniciado React na semana anterior ao desafio e ainda não havia iniciado nenhum projeto com ele.
Escolhi realizar o site com o Vue, então além de desenvolver o site meu desafio foi conhecer o framework para trabalhar com ele. Não consegui realizar o typescript pois seriam duas tecnologias para aprender e depois utilizar em um projeto, sendo que eu teria pouco tempo para tudo isso.
Em um breve resumo, conheci os hooks e as diretivas nativas do Vue.
Quanto ao design futurista, não segui a risca pois precisaria de mais detalhes do Design para poder seguir e como o foco são os códigos, não foi uma prioridade.
Partindo para o projeto fui desenvolvendo conforme as informações e instruções que tirei da internet/YouTube.
Iniciei o projeto na sexta a noite e no início da madrugada me deparei com um código que funcionava no vídeo em que eu assistia porém no meu não. Essa parte foi bem complicada mas consegui resolver no início da tarde de sábado. Final do dia os itens de "Card do Pokemon" e "barra de pesquisa" haviam sido concluídos.
<br>
Parti para o segundo desafio: procurar uma biblioteca para realizar os gráficos, pois apesar de conhecer muitos gráficos por conta da experiência com KPIs no excel, não havia realizado nenhum site com gráficos;
<br>
Encontrei três bibliotecas em que pesquisei mais a fundo:
- AnyChart = iniciei as pesquisas com ela mas não consegui localizar o que eu imaginava fazer.
- ZyngChart = Esta foi a que mais investi tempo, praticamente meu domingo inteiro; Meu objetivo era realizar o gráfico com o tipo "gauge" (estilo velocímetro, como chamamos no excel). Fui ambiciosa, mas por falta de experiência técnica não consegui gerar o gráfico com as informações da PokeAPI. Tive muita dificuldade para achar explicações e vídeos sobre o tema. Enfim final da noite decide partir para a biblioteca mais simples para que eu pudesse ao menos entregar o projeto com o gráfico.
- ChartJS = Enfim no final da noite de domigo iniciei os estudos com esta biblioteca de gráficos o qual consegui realizar em uma página componente "BarChart", porém precisava colocar todas em uma única página para que o gráfico pudesse puxar as informações do pokemon selecionado.
<br>
Durante a seguda-feira fiz muitas tentativas das quais falhei. Inclusive fiz um commit sobre isso.
<br>
Enfim consegui fazer com que os gráficos de barra ficassem na página inicial porém ele acabou ficando com problema na sincronização e apesar do grande esforço, não consegui resolver.
<br>
Ele só lê os dados do pokemon que é selecionado (para a geração do gráfico) quando eu atualizo o VSCode com o Ctrl+S estando dentro do componente CardPokemonSelect.Vue. O código gera o gráfico com os dados do pokemon selecionado mas há um problema de sincronização que eu não consegui resolver.
<br>
Segue a image:
<img src="./src/assets/gráfico-na-tela.png">
<br>

## Considerações Finais:
<br>
Neste projeto tive a oportunidade de trabalhar com uma API bem grande, com uma variedade de dados, e conheci frameworks ainda não estudados.
Gostaria de salientar que conforme conversa com o Leonardo, tenho pouco conhecimento em programação mas tenho muita softskills que podem agregar ao time.
Como demonstrado nesse projeto e no meu relato acima, tenho muita força de vontade e determinação. Em nenhum momento eu tive ajuda externa pessoal (só o Google mesmo) embora se tivesse em uma equipe com certeza com alguns toques de alguém experiente poderia ter concluído o projeto com sucesso.
Eu me esforcei ao máximo para conseguir atender o que foi possível dentro do prazo estipulado. Gostaria de salientar que em nenhum momento eu desisti de buscar a solução. Me dediquei o quanto foi possível.
Saliento também que tenho muita vontade de aprender e ajudar a equipe a crescer focando nas tecnologias que a empresa precisar.

