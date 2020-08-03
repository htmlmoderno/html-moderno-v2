---
view: Post
lang: pt-br

title: Você conhece o atributo HTML hidden? Saiba quando utilizá-lo
description: Um atributo desconhecido pelos desenvolvedores é o atributo global do HTML chamado &#96;hidden&#96;, nesse post vamos abordar quando utilizá-lo da melhor maneira.
excerpt: Um atributo desconhecido pelos desenvolvedores é o atributo global do HTML chamado `hidden`, nesse post vamos abordar quando utilizá-lo da melhor maneira.
announcer: Postagem %title% %complementRoute%

cover: 
  - extension: png
    path: /images/posts/2018/08/
    alternativeText: Imagem de capa background salmão e uma ilustração com 3 cards, com um simulando não estar visível
    caption: 

demo: https://thepaciellogroup.github.io/AT-browser-tests/test-files/hidden-att.html
audio: 492895791
categories: [html5, acessibilidade]
tags: [a11y, Atributos]
author: ktquez
date: 2018-08-28

meta:
  - name: og:url
    content: https://htmlmoderno.com.br/posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade
  - name: og:title
    content: Você conhece o atributo HTML hidden? Saiba quando utilizá-lo.
  - name: og:description
    content: Um atributo desconhecido pelos desenvolvedores é o atributo global do HTML chamado &#96;hidden&#96;, nesse post vamos abordar quando utilizá-lo da melhor maneira.
  - name: og:image
    content: https://htmlmoderno.com.br/images/posts/2018/08/facebook-voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo.png
  - name: twitter:url
    content: https://htmlmoderno.com.br/posts/o-guia-completo-sobre-cabecalhos-html-incluindo-semantica-seo-e-acessibilidade
  - name: twitter:title
    content: Você conhece o atributo HTML hidden? Saiba quando utilizá-lo.
  - name: twitter:description
    content: Um atributo desconhecido pelos desenvolvedores é o atributo global do HTML chamado &#96;hidden&#96;, nesse post vamos abordar quando utilizá-lo da melhor maneira.
  - name: twitter:image
    content: https://htmlmoderno.com.br/images/posts/2018/08/twitter-voce-conhece-o-atributo-html-hidden-saiba-o-porque-e-quando-utiliza-lo.png

---

## Introdução

Um atributo não muito usado e também não tão conhecido pelos developers é o atributo global `hidden`, por ser um atributo global ele pode ser inserido em qualquer elemento HTML semelhante ao que acontece com os atributos `class`, `id` e `style`.

::: figurecode Usando attributo hidden em um parágrafo
```html
<p hidden>
  Esse elemento está oculto visualmente e também para tecnologia assistiva
</p>
```
:::

Quando aplicado em algum elemento o atributo `hidden`, ele age de maneira semelhante ao `display: none` que a gente utiliza no CSS para ocultar elementos, mas como mencionei só é semelhante na questão de visibilidade, pois o atributo hidden também atua de maneira semântica por definir que aquele elemento não é relevante, ou não será mais relevante naquele contexto do documento ou está sendo reutilizado por outras partes da página.


## Semântica e finalidade do atributo

Muitos confundem a questão de esconder elementos e utilizam o atributo `hidden` de maneira exagerada. Todo elemento e atributo do HTML5 tem um sentido intrínseco, um propósito de existir e essa deve ser sua pergunta sempre que for utilizar algum elemento ou atributo.

### Em que caso utilizo o atributo hidden
- Conteúdo que não é relevante, mas pode ser em algum momento mais tarde;
- Conteúdo que algum momento era relevante, mas não será mais usado;
- Conteúdo reutilizável;
- Conteúdo descritívos para tecnologia assistiva (leitores de tela);

### Casos que não se deve usar o atributo hidden
- Não devemos utilizar o atributo hidden para ocultar conteúdo em outra resolução de tela, por exemplo usá-lo para ocultar conteúdo quando mobile;
- Não ocultar conteúdo que poderão ser expandidos;
- Não ocultar conteúdo numa interface de alternância como guias ou tabs;

Essa confusão de quando ou não usar é normal, principalmente porque o atributo não é tão claro assim, deve ser até por isso que muitos developers não gostam e acham que nem deveria ter um atributo assim porque seus benefícios semânticos e de acessibilidade são poucos, porém não são ruim na minha visão.

## Traz algum ganho para SEO?

Não diretamente! Mas uma das coisas que acho interessante nesse atributo é que podemos semanticamente informar aos bots dos mecanismos de buscas que esse elemento não é relevante. 

### Por que isso é importante?

É possível que alguns bots inclua conteúdos ocultos via CSS ou JS na sua análise e consequentemente traga resultados de pesquisa menos precisos. Alguns bots atuais já tentam detectar conteúdos ocultos através da análise do CSS e Javascript para poder determinar o conteúdo a ser indexado e a sua importância.

Porém existem algumas aplicações que restringem o acesso no robots.txt o download de assets, a fim de economizar recursos do servidor.

::: obs
Não imagino alguém que faça isso atualmente, mas nunca bloqueie CSS e JS para o Google. Ele quer ver seu site do jeito que o visitante humano (usuário) irá ver.
:::

No caso de restrições de acesso ou que algum bot não seja capaz de analisar elementos ocultos via CSS ou Javascript, o atributo `hidden` tem um uso relevante.

## O ganho foi na acessibilidade

Muitos não utilizam ou desconhecem o atributo `aria-hidden`, que é uma maneira de informar as tecnologias assistivas (<abbr title="Interface de programação de aplicativos">API</abbr> de acessibilidade) que ignore esses elementos onde o atributo foi inserido, mas esse elemento mesmo com o aria-hidden ainda permanecerá visível para o usuário no browser, enquanto isso, elementos com atributo hidden ficam inacessíveis/ocultos para qualquer dispositivo.

::: obs
Se você utilizar o hidden não precisa utilizar o aria-hidden=true, mas também não é uma total redundância se utilizar os dois, pois os dispositivos de tecnologia assistiva deveriam também ser mais consistentes/uniformes ao suporte, mas nem sempre é o caso.
:::

Uma opção de uso do atributo hidden para melhorar a acessibilidade que eu utilizo, é criar blocos de conteúdos que detalham algum outro elemento como ícones, search, campos de input ou outros elementos que precisam de uma descrição mais detalhada, em conjunto com o `aria-labelledby` ou `aria-describedby`.

Por exemplo:  
Em um contexto de checkout:

::: figurecode Campo para <abbr title="Card Verification Value">CVV</abbr> de cartões de crédito com aria-describedby
```html{11}
<div class="form-group">
  <label for="cvv">CVV</label>
  <input
    id="cvv"
    name="cvv"
    type="text"
    minlength="3"
    maxlength="4"
    inputmode="numeric"
    autocomplete="cc-cvv"
    aria-describedby="cvv-info"
  />
  <span hidden id="cvv-info">
    Digite os 3 dígitos que está na parte de trás do cartão de crédito
  </span>
</div>
```
:::

Em outro contexto, em uma edição ou exclusão:

::: figurecode Usando aria-describedby em botão close
```html
<button type="button" aria-label="close" aria-describedby="descriptionClose">X</button>
<div id="descriptionClose" hidden>
  Se você cancelar perderá as informações inseridas no campo XXX e será 
  enviado para a página anterior.
</div>
```
:::

::: obs
Os casos de uso são muitos, mas use com moderação.
:::

## Suporte

<intersection-observer rootMargin="600px">
  <template v-slot="data">
    <iframe v-if="data.show" src="https://caniuse.bitsofco.de/embed/index.html?feat=hidden&periods=future_1,current,past_1,past_2" height="420" allowfullscreen="true" style="width: 100%"></iframe>
  </template>
</intersection-observer>

O suporte nesse momento já é praticamente completo entre os browsers e dispositivos.
Porém existe um forma via CSS que você pode usar quando o browser ou leitor de tela que o usuário esteja acessando não dê suporte.

::: figurecode
```css
[hidden] { 
  display: none !important;
}
```
:::

O engraçado com esse atributo e sua relação com o CSS display é que essa regra evita também que ocorra uma falha sobre a visibilidade entre os elementos com o atributo hidden. É que no CSS ainda sim é possível utilizando o `display: block`, fazer com que um elemento com o atributo hidden volte a ser exibido. Estranho, mas é possível.

O próprio browser adiciona uma regra css como pode ser visto na imagem abaixo:

<img
  loading="lazy"
  src="/images/posts/2018/08/browser-atributo-hidden.jpg"
  alt="Imagem do browser mostrando um elemento p (tag de parágrafo) utilizando o atributo hidden e no lado esquerdo uma regra css inserido pelo próprio browser com um display none"
  title="Imagem do browser mostrando um elemento p (tag de parágrafo) utilizando o atributo hidden e no lado esquerdo uma regra css inserido pelo próprio browser com um display none"
  width="1244"
  height="192"
/>

Mas se houver um seletor mais forte, ele é sobrescrito, por isso o uso do `!important`

Por exemplo:  
Revertendo a visibilidade com o CSS `display: block`
::: figurecode
```html display-block
<p hidden>
  Esses elemento deve ser oculto visualmente e para tecnologia assistiva
</p>

<p hidden class="desc">
  Esse elemento deveria estar oculto, mas foi revelado através 
  do display: block via CSS
</p>
```
:::

::: figurecode
```css style-display-block
.desc {
  display: block;
}
```
:::

<code-output
  class="my-10"
  title="Saída renderizada de um elemento com atributo hidden e com o estilo display block, porém, sem o uso do important"
  selector=".display-block"
  styleSelector=".style-display-block"
  height="140px"
/>

<div class="mb-8">
  <hr />
</div>

Evitando sobrescrita utilizando `!important`

::: figurecode
```html hidden-display-none-important
<p hidden>
  Esses elemento deve estar oculto visualmente e para tecnologia assistiva
</p>

<p hidden class="desc">
  Esse elemento mesmo com o display: block não é exibido por conta 
  do !important para todos os elementos com o atributo hidden.
</p>
```
:::

::: figurecode
```css style-hidden-display-none-important
[hidden] {
  display: none !important;
}

.desc {
  display: block;
}
```
:::

<code-output
  class="my-10"
  title="Saída renderizada de 2 elementos com atributo hidden, com o estilo display block, porém, não sendo exibido devido ter um display none como importante atrelado ao atributo hidden"
  selector=".hidden-display-none-important"
  styleSelector=".style-hidden-display-none-important"
  height="100px"
/>

Se você inspecionar a saída, verá que as tags estão sendo renderizadas, mas não exibidas devido ao uso do important atribuído a todo elemento com atributo `hidden`, não é nada de novo, mas uma maneira usando CSS de manter o comportamento correto do atributo.

<div class="mb-8">
  <hr />
</div>

Por fim, a cada novidade no uso do hidden, irei colocando sempre updates nesse mesmo post, não se preocupe, vocês sempre serão informados sobre novidades.


