---
view: Post
lang: pt-BR

title: O guia completo sobre cabeçalhos HTML incluindo semântica, SEO e acessibilidade
description: D...
excerpt: Saber estruturar cabeçalhos HTML é uma boa prática e traz muitos benefícios em acessibilidade e em SEO, esse artigo tenta cobrir ao máximo o que tem de mais atual sobre esse assunto.
cover: 
  - extension: png
    path: /images/posts/2018/09/
    alternativeText: Texto alternativo
    caption: Nossa máscara de carnaval favorita
categories: [html5, seo, semantica, acessibilidade]
tags: [HTML5, heading, SEO, W3C]
author: ktquez
date: 2018-09-19
---

## Introdução

Todo desenvolvedor web que estudou <abbr title="Hypertext Markup Language">HTML</abbr> sabe que existem seis níveis de títulos que vai do `H1 até o H6`, a ideia é usá-las para fornecer hierarquia e sentido ao seu site. As tags funcionam da seguinte forma: `H1` representa o cabeçalho mais importante e o `H6` o menos importante.

> Muitos devs (por desconhecimento) usam cabeçalhos H1…H6 para estilizar fontes, determinando a espessura e o tamanho da fonte através dos níveis de cabeçalho, mas isso é extremamente o oposto do que os cabeçalhos propõem.

As tags de cabeçalho devem seguir uma lógica estruturada dentro da sua página e usadas de forma crescente. Por exemplo, se o seu site tiver uma tag H1 e ela for seguida de uma tag H3, teremos uma quebra de hierarquia e possíveis problemas de SEO.

Exemplo de todos os níveis do cabeçalho:

```html block-main
<h1>Cabeçalho nível 1</h1>
<h2>Cabeçalho nível 2</h2>
<h3>Cabeçalho nível 3</h3>
<h4>Cabeçalho nível 4</h4>
<h5>Cabeçalho nível 5</h5>
<h6>Cabeçalho nível 6</h6>
```

<code-output
  class="my-10"
  title="Saída de uma estrutura com todos os níveis de cabeçalho HTML do h1 até o h6"
  selector=".block-main"
  height="300px"
/>

Uma coisa interessante é que a hierarquia acontece de maneira obrigatória de cima para baixo, porém, é possível usar a estrutura de baixo para cima sem problemas, como, por exemplo um `H2` vindo logo após de um `H3`:

```html
<h1>Título do meu post</h1>
<h2>Subtítulo do post</h2>
<p>...</p>

<h3>Subitem seção</h3>
<p>...</p>

<h2>Item seção</h2>
<p>...</p>
```

## Porque devemos usar cabeçalhos HTML
Como já mencionado os títulos de cabeçalhos não são sobre a aparência, a estilização é algo gerado pelos navegadores, o fator principal é seu nível de relevância. Uma boa estrutura de títulos é importante tanto para acessibilidade, quanto para mecanismos de busca.

## Posso usar mais de uma tag H1?
Uma dúvida comum entre os devs é sobre a possibilidade de utilizar mais de uma tag H1 no mesmo documento. 

### É possível?
A resposta é **SIM**, as especificações do HTML5 para as tags de cabeçalho inclui suporte a vários H1, porém, desde que sejam inseridos em elementos que forneçam contextos distintos nas regiões ou seções da página. 

Por exemplo:

```html
<body>
  ...
  <main>
    <article>
      <header>
        <h1>Título do meu post</h1> 
      </header>
      <section>
        <h1>Título da seção 1 (simulando nível 2)</h1>
        <section>
          <h2>Item da seção 1 (simulando nível 3)</h2>
        </section>
      </section>
      <section>
        <h1>Título da seção 2 (simulando nível 2)</h1>
      </section>
    </article>
  </main>
  ...
</body>
```

Quando se trata de SEO também não tem problemas utilizar mais de um H1 na página, é um mito achar que um H1 é fator decisivo para melhorar o ranqueamento, mito maior ainda é achar que vários H1 melhoraria ainda mais sua posição.

[John Mueller](https://twitter.com/JohnMu) Webmaster Trends Analyst na Google, muito conhecido dentre os que trabalham com SEO, respondeu a um tweet sobre esse assunto:

<lazy-hydrate :when-visible="{ rootMargin: '100px' }">
  <iframe src="https://twitframe.com/show?url=https://twitter.com/JohnMu/status/852131231928135680?ref_src=twsrc%5Etfw" width="100%" height="280" allowfullscreen="true" frameborder="0"></iframe>
</lazy-hydrate>

### É recomendado?
A resposta é **NÃO**, por quê?  
A recomendação HTML5 da W3C com o suporte a múltiplos H1 não foi adotada pelos navegadores de maneira consistente e gerou uma discussão sobre esse assunto (você pode verificar através desta [issue](https://github.com/w3c/html/issues/169) da w3c) que foi o suficiente para uma decisão de modificar os exemplos da documentação a partir do HTML5.1 e retornar a recomendação anterior de utilizar somente uma única tag H1 por documento até que seja realmente implementado pelos navegadores.

Recomendação da W3C desde 2014: (Saiba mais através [desse link](https://w3c.github.io/html/sections.html#headings-and-sections))  
> **ATENÇÃO**: Atualmente, não há implementações nativas conhecidas do algoritmo de estrutura de tópicos em navegadores gráficos ou agentes de usuário de tecnologia assistencial, embora o algoritmo seja implementado em outros softwares, como verificadores de conformidade e extensões de navegador. Além disso, há um problema HTML W3C pull #3499 e [W3C HTML issue #830](https://github.com/w3c/html/issues/830)). Qualquer implementação e uso dessas diferentes propostas serão rastreadas e podem resultar em alterações futuras significativas no algoritmo de estrutura de tópicos (Outline algorithm).

Exemplo retirado da documentação da W3C para o HTML:

```html block-two
<body>
  <h1>Apples</h1>
  <p>Apples are fruit.</p>
  <section>
    <h2>Taste</h2>
    <p>They taste lovely.</p>
    <section>
      <h3>Sweet</h3>
      <p>Red apples are sweeter than green ones.</p>
    </section>
    <section>
      <h3>Color</h3>
      <p>Apples come in various colors.</p>
    </section>
  </section>
</body>
```

<code-output
  class="my-10"
  title="oi"
  height="380px"
  selector=".block-two"
/>

## Quando usamos cabeçalhos H2-H6?
Os cabeçalhos H2-H6 são usados para continuar com a estrutura do documento, normalmente como pode ter múltiplos H2 usamos ele para títulos de seções do conteúdo (subtítulos) e H3 para algum subtítulo com um nível abaixo dele. 

Dificilmente você chegará nas tags H4-H6, existem casos de uso sim, não se limite, pode usar a vontade, mas são poucos conteúdos que chegam a esse nível de cabeçalho.

<section class="my-20">
  <newsletter :small="true" />
</section>

## A importância das tags de cabeçalhos para o SEO
As tags de cabeçalho tem alguma influência (embora pequena e não determinante) quando se trata de classificação. Para os mecanismos de busca fica mais fácil ler um conteúdo bem estruturado e organizado do que ter que analisar uma página com problemas de estrutura.

Para os usuários os cabeçalhos são como âncoras que ajuda a encontrar o conteúdo mais facilmente.

> Aqui no HTML Moderno usamos os títulos H2 para criar um índice que fica no topo do artigo.

Esses detalhes contribuem para passar uma boa imagem e consequentemente aumentando a probabilidade de uma melhoria no ranking.

Algumas dicas que podem ajudar na otimização:
- Use as tags H2-H6 de maneira legível, evite excessos de palavra-chave foco nesses cabeçalhos;
- Não pule de níveis (por exemplo, H1 para H3), mantenha a estrutura e a hierarquia consistente;
- Defina somente uma tag H1 por página (Mesmo alguns especialistas do Google indicando a possibilidade de inserir mais de um H1, evite);
- Na tag H1 combine um título relevante a página e a palavra-chave foco;

### Como o Google usa as tags de cabeçalho
Em um [hangout para webmasters](https://www.youtube.com/watch?v=6MNzdm0K-zE) no Youtube (John Mueller, do Google) disse que para o Google não importa a ordem hierárquica das tags `H` nas páginas web.

>  “A ordem não importa realmente. Usamos os títulos para entender o contexto do conteúdo da página um pouco melhor e, para isso, não precisamos de uma ordem rígida das tags de cabeçalho.”

> “Às vezes você tem várias [tags] h1, às vezes [...] a ordem é um pouco diferente por causa de seu modelo ou algo em sua página e isso é perfeitamente aceitável.”

Acho importante sempre estar antenado nas opiniões de especialistas do Google quando se trata de SEO, mas em alguns casos como falamos até aqui neste artigo, uma estrutura consistente e dentro das recomendações do HTML5 beneficiará tanto o SEO, quanto a experiência de usuários de tecnologia assistiva.

### Como criar um bom título H1 para SEO
As tags H1 são muito subestimadas quando se trata de marketing de conteúdo, algumas pessoas exageram nas palavras chaves em um título e ele fica um pouco confuso para o usuário, no final das contas o SEO nos últimos tempos é mais sobre otimização de conteúdo para o usuário, do quê para própria ferramenta.

Um exemplo que encontrei sobre o exagero de palavras chaves em um H1:  

<lazy-hydrate :when-visible="{ rootMargin: '100px' }">
  <img src="/images/posts/2018/09/titulo-com-muitas-palavras-chave-html-moderno.png" alt="Produto na amazon com imagem de um iphone na cor rose no lado esquerdo e um título no lado direito" style="width: 100%" />
</lazy-hydrate>

Normalmente as pessoas usam o H1 para a seção hero do site (landing pages), título de posts (blog), título de produtos (ecommerce) e além de estarem bem destacadas o conteúdo da tag H1 antecipa ao usuário leitor o tipo de conteúdo que ele terá no decorrer da página.

### Mais dicas de como otimizar sua tag H1
**Tamanho ideal para a tag H1**  
Você não tem limite definido para o conteúdo de dentro da H1, mas você precisa criar algo que não seja tão pequeno (desperdiçando a oportunidade) e nem tão grande onde o deixará incoerente. Uma dica de acordo com [Neil Patel](https://neilpatel.com/) especialista em SEO é ficar por ali entre 20 a 70 caracteres;

- **Lowcarb** = Muita concorrência (Head tail)
- **Lowcarb para diabéticos e hipertensos** = Pouquíssima concorrência (Long tail)

Exemplo de um bom título:  
**Guia com 5 receitas <u>Lowcarb para diabéticos e hipertensos</u>, a 3º receita é de dar água na boca.**

Se você não utilizar uma palavra-chave em sua H1, o Google ainda sim consegue encontrar e indexar, então não fique com crise de abstinência se não conseguir inseri-la na tag H1.

> Não quis entrar muito no mérito de explicar o que significa "Head tail" e "Long tail", pois não é o intuito desse post, mas se quiser complementar a leitura, esse link explica direitinho sobre essas técnicas: https://comunidade.rockcontent.com/long-tail-e-head-tail-palavras-chave/

## Dicas de como estruturar cabeçalhos HTML
Não existe fórmula mágica e nem estrutura que sirva para tudo, mas juntei algumas estruturas de cabeçalhos para determinadas partes de um site ou seguimento, aproveite para  entender o padrão e aplicar em seu site.

### Cabeçalhos HTML em uma landing page
Vamos simular uma landing page do segmento produtos medicinais.

```html
<h1>Cansado o dia inteiro? Com Vitaforte esses dias acabaram.</h1>

<h2> O que é a Vitaforte? </h2>
<p>...</p>

<h2>Principais benefícios das vitaminas </h2>
<h3>Disposição</h3>
<p>...</p>
  
<h3>Aumenta a imunidade</h3>
<p>...</p>

<h2>Perguntas frequentes</h2>
<h3>Quais vitaminas são mais importantes?</h3>
  <p>...</p>
<h3>A Vitaforte é indicada para gestantes?</h3>
<p>...</p>
```

### Cabeçalhos HTML em uma single post (blog)
Dentre os cabeçalhos mais importantes primeiramente usamos o H1 que é o título do post e representa o tópico mais relevante da página, logo em seguida os subtítulos aparecem organizando as seções do conteúdo da postagem.

Tiramos esse exemplo do blog [rico.com](rico.com):

```html
<h1>14 Dicas Para Você Dar um Jeito Na Sua Vida Financeira.</h1>

<h2>Por que Você Precisa Organizar Sua Vida Financeira</h2>
<p>...</p>

<h2>14 Dicas Para Você Dar um Jeito Na Sua Vida Financeira</h2>
<h3>Deixe as desculpas de lado</h3>
<p>...</p>
  
<h3>Pague as suas dívidas</h3>
<p>...</p>

<h2>Conclusão</h2>
<p>...</p>
```

### Cabeçalhos HTML em uma página de produto (e-commerce)
Como no exemplo do post de um blog, a ideia será a mesma. Vamos pegar um exemplo do site Magazine Luiza:

```html
<h1>IPhone 6s Apple 32GB Ouro Rosa 4G Tela 4.7.</h1>

<h2>Informações do produto</h2>
<p>...</p>

<h2>Mais detalhes</h2>
<h3>Especificações Técnicas</h3>
x<p>...</p>

<h3>Conteúdo da embalagem</h3>
<p>...</p>
  
<h3>Avaliação dos clientes</h3>
<p>...</p>
```

### Veja como os grandes players estão fazendo
Particularmente gosto de ver como os grandes players estruturam seus cabeçalhos, os melhores especialistas em HTML e SEO participam desses players e constantemente fazem diversos testes, levando-os a uma estrutura próximo da prática que melhor otimiza sua classificação nos mecanismos de busca.

Existe uma extensão para chrome chamada [HeadingsMap](https://chrome.google.com/webstore/detail/headingsmap/flbjommegcjonpdmenkdiocclhjacmbi?hl=en) que expõe os cabeçalhos de uma página de maneira organizada, tanto a estrutura de cabeçalho, quanto HTML5 outline.

<lazy-hydrate :when-visible="{ rootMargin: '100px' }">
  <img src="/images/posts/2018/09/plugin-headingmap-exemplo-html-moderno.jpg" alt="3 títulos com o mesmo nível H1 no lado direito e ao lado esquerdo o plugin HeadingsMap mostrando a estrutura do cabeçalho" />
</lazy-hydrate>

Também é possível ver o outline de uma página através do [validador HTML da w3c](https://validator.w3.org/), basta inserir o link e clicar no checkbox `outline` e o resultado é exibido, como na imagem abaixo:

<lazy-hydrate :when-visible="{ rootMargin: '100px' }">
  <img src="/images/posts/2018/09/html-validator-outline-html-moderno.png" alt="Input de pesquisa do validador da W3C e abaixo a estrutura de cabeçalhos de um dos posts do nosso blog" />
</lazy-hydrate>

## Cabeçalhos e acessibilidade
Os usuários de tecnologia assistiva, assim como os de visão, também conseguem navegar em páginas através de estrutura de cabeçalho. De acordo com uma [pesquisa da WebAIM de 2012](https://webaim.org/projects/screenreadersurvey4/#levels) mostra de cerca de 47,4% acham muito úteis os cabeçalhos e 34,7% afirmam ter alguma utilidade, mostrando que os cabeçalhos são úteis para cerca de 82% dos usuários de leitores de tela que participaram da pesquisa.

Sabendo disso se o documento tiver uma estrutura de cabeçalho com múltiplos H1, mesmo que dentro de seções podem atrapalhar no entendimento do conteúdo, por exemplo:
```html
<body>
  <h1>5 passos para a felicidade</h1> => (nível 1)
  <section>
     <h1>Meditação</h1> => (simulando nível 2)
     <p>...</p>
     <section> 
       <h1>Guiada</h2> => (simulando nível 3)
       <p>...</p>
     </section>
  </section>
</body>
```

Os navegadores e leitores de tela irão expor:

```
└→ 1 - 5 passos para a felicidade
└→ 1 - Meditação
└→ 1 - Guiada
```

Ao invés de:

```
└→ 1 - 5 passos para a felicidade
     └→ 1 - Meditação
          └→ 1 - Guiada
```

Usuários de tecnologia assistiva também passam de cabeçalho por cabeçalho para determinar o conteúdo da página, por isso é bom sempre manter a recomendação inicial desse post que é evitar a quebra da hierarquia (pular de H1 para H3, por exemplo), pois, pode criar uma confusão entre esses usuários.

A WCAG disponibiliza um [site](https://www.w3.org/WAI/tutorials/) onde tem diversas orientações e recomendações. Você pode conferir mais sobre como você deve [estruturar cabeçalhos](https://www.w3.org/WAI/tutorials/page-structure/headings/) para além de atender às boas práticas deixar seu site acessível para todos os usuários.

## O que não fazer com as tags de cabeçalho

O artigo explicita o que você deve fazer quando se trata de cabeçalhos HTML e por exclusão é possível deduzir o que não devemos fazer.

Uma recapitulada rápida no que é considerado má prática no uso de cabeçalhos HTML:
- Use cabeçalhos reais, não apenas texto em negrito;
- Não use tags H1-H6 para estilizar textos, lembre-se que deve usar para dar relevância e estrutura;
- Não repita seus cabeçalhos em diferentes páginas do seu site, principalmente na tag H1 elas devem ser únicas em todo o seu site;
- Não esconda tags de cabeçalho, você pode ser punido pelos mecanismos de busca;
- Evite mais de uma tag H1 na página;
- Não encha seus cabeçalhos com palavras-chave fazendo seu título ficar sem sentido;

<hr class="divider" />

<div class="mt-10 text-center">
  <b>O que você achou do post?</b>
  <span class="block">Deixa aquele comentário para gente. Até a próxima.</span>
</div>
