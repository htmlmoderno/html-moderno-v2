---
view: Post
lang: pt-br

title: Você sempre vê o DOCTYPE na primeira linha do HTML, mas você sabe o por quê?
description: Essencial no HTML, a declaração do DOCTYPE atualmente está mais curta e simples, porém nem sempre foi assim. Fique sabendo mais sobre o seu papel.
excerpt: Essencial no HTML, a declaração do DOCTYPE atualmente está mais curta e simples, porém nem sempre foi assim. Vamos saber mais sobre o seu papel no HTML e a sua importância nos tempos de hoje.
announcer: Postagem %title% %complementRoute%

thumb: 
  - extension: png
    path: /images/posts/2018/09/
    alternativeText: Imagem de capa background roxo pastel e uma ilustração de 3 documentos

categories: [seguranca, semantica, html5]
tags: [HTML5, Seguranca web]
author: ktquez
date: 2018-09-03

meta:
  - name: og:url
    content: https://htmlmoderno.com.br/posts/voce-sempre-ve-o-doctype-ali-na-primeira-linha-mas-voce-sabe-o-por-que/
  - name: og:title
    content: Você sempre vê o DOCTYPE na primeira linha do HTML, mas você sabe o por quê?
  - name: og:description
    content: Essencial no HTML, a declaração do DOCTYPE atualmente está mais curta e simples, porém nem sempre foi assim. Fique sabendo mais sobre o seu papel.
  - name: og:image
    content: https://htmlmoderno.com.br/images/posts/2018/09/voce-sempre-ve-o-doctype-ali-na-primeira-linha-mas-voce-sabe-o-por-que.png
  - name: twitter:url
    content: https://htmlmoderno.com.br/posts/voce-sempre-ve-o-doctype-ali-na-primeira-linha-mas-voce-sabe-o-por-que/
  - name: twitter:title
    content: Você sempre vê o DOCTYPE na primeira linha do HTML, mas você sabe o por quê?
  - name: twitter:description
    content: Essencial no HTML, a declaração do DOCTYPE atualmente está mais curta e simples, porém nem sempre foi assim. Fique sabendo mais sobre o seu papel.
  - name: twitter:image
    content: https://htmlmoderno.com.br/images/posts/2018/09/voce-sempre-ve-o-doctype-ali-na-primeira-linha-mas-voce-sabe-o-por-que.png

---

## Introdução

O DOCTYPE (não é uma tag) é uma declaração (DTD = <span lang="en">Document Type Declaration</span>) e representa a primeira linha do documento HTML. É uma maneira de informar ao navegador o tipo de documento e garantir que esse documento seja manipulado da mesma maneira em diferentes navegadores, devido ao modo padrão (Standard mode) que é um comportamento descrito pelas especificações HTML e CSS. 

O <abbr title="HyperText Markup Language">HTML</abbr> até sua versão 4 e nas versões xHTML era baseado em SGML (Standard Generalized Markup Language) que resumidamente é uma especificação para linguagens de marcação e nela existe a necessidade de um <abbr title="Declaração do tipo de documento">DTD</abbr>, mas a partir do HTML5 já não se é baseado em um padrão específico porque ele tem suas próprias regras de análise.

> Algumas coisas foram herdadas do SGML, uma delas é o no uso do DOCTYPE o (!) ponto de exclamação, esse sinal também é usado para declarar comentários.

## Como devemos utilizá-lo?

A declaração do DOCTYPE é case insensitive (que não difere de maiúsculas ou minúsculas), use como quiser.

```html
<!DOCTYPE HTML> ou <!DOCTYPE html> ou <!doctype html>
```

As declarações DOCTYPE nas versões anteriores eram longas e difíceis de memorizar, por exemplo a declaração da versão "Transitional XHTML 1.0" que em relação ao uso entre desenvolvedores/desenvolvedoras precedeu a nova sintaxe. Por exemplo:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

> Reza a lenda de que um desenvolvedor, ninguém sabe o seu nome e rosto, quantos cafés ele tomava por dia, mas ele conseguiu escrever essa declaração inteira na mão sem utilizar ‘copiar e colar’, sem ajuda de autocomplete e toda ela sem errar uma letra. 😂😂

Brincadeiras a parte, a sintaxe do DOCTYPE atual está bem mais curta e mesmo assim acho que ninguém se dá o trabalho de escrevê-la.

Você pode verificar a evolução das sintaxes da declaração DOCTYPE no link abaixo:
- [Declarações de tipo de documento válidas por versões](https://www.totalvalidator.com/support/doctypes.html) 

## Esse novo DOCTYPE é do HTML5?

Não necessariamente, muitos pensam que essa nova declaração é do HTML5 especificamente, mas não, ela veio com o HTML5, porém ela servirá a partir de agora para todas as futuras versões do HTML como 6 ou 7, o que o novo DOCTYPE faz é dizer ao navegador para manipular e processar com o HTML mais moderno.

## É necessário o uso do DOCTYPE?

**Sim!** Segundo a <abbr title="World Wide Web Consortium">W3C</abbr>:

::: bq
DOCTYPEs são necessários por motivos herdados. Quando omitidos, os navegadores tendem a usar um modo de renderização diferente, incompatível com algumas especificações. A inclusão do DOCTYPE em um documento garante que o navegador faça uma tentativa de melhor esforço para seguir as especificações relevantes.
:::

Mesmo o HTML5 não necessitando mais de <abbr title="Declaração do tipo de documento">DTD</abbr> a sua presença garante que o navegador não se comporte de maneira imprecisa, pois quando não informamos, os navegadores utilizam um recurso chamado `quirks mode`, ao contrário disso, quando informamos o DOCTYPE ao navegador, ele entra no `standard mode` onde faz com que ele siga as especificações do HTML e CSS da melhor maneira possível.

Não é do conhecimento de muitos, mas a falta do DOCTYPE ativa o quirks mode que é um recurso implementado pelos navegadores a muito tempo atrás para garantir compatibilidade com sites antigos logo depois que os novos padrões fossem implementados. 

O Mozilla reuni nesse link abaixo alguns comportamentos, mas se você estiver desenvolvendo um HTML e CSS correto, poucas coisas serão afetadas.
- [Comportamento do Modo Quirks do Mozilla](https://developer.mozilla.org/en-US/docs/Mozilla/Mozilla_quirks_mode_behavior)

## Vulnerabilidades

O Quirks mode deve ser evitado devido a ser vulnerável a um ataque chamado RPO (Relative path Overwrite) é um ataque peculiar que atua na injeção em folhas de estilo (via caminhos relativos de arquivos CSS) diferente do <abbr title="Cross-site scripting">XSS</abbr> que é através de script.

Praticamente a maioria dos sites usam o DOCTYPE habilitando o stardard mode  no navegador, mas alguns browsers (como sempre) o IE 9 e anteriores, segundo especialistas ainda é possível que o invasor consiga forçar a troca de “stardard mode” para o “quirks mode” e com isso ter um ambiente de ataque para essas e outras vulnerabilidade.

Para os amantes de segurança, deixo aqui um link abaixo de um artigo bastante atual sobre essa técnica:  
- [Análise em larga escala de injeção de estilo por substituição de caminho relativo](https://blog.acolyer.org/2018/05/28/large-scale-analysis-of-style-injection-by-relative-path-overwrite/)

## Clientes de Email e o DOCTYPE

A maioria dos especialistas em email marketing ainda utilizam o <abbr title="eXtensible HyperText Markup Language">XHTML</abbr> transitional DOCTYPE devido a compatibilidade em versões de cliente de email antigos.

O DOCTYPE do HTML5 pode ser utilizado, porém com regras atualizadas que pode causar efeitos não desejáveis, como na imagem abaixo:

Sem display:

<img
  src="/images/posts/2018/09/email-image-sem-display-block.jpg"
  alt="Exibindo newsletter sem display block e com falhas de espaçamento entre as imagens"
  title="Exibindo newsletter sem display block e com falhas de espaçamento entre as imagens"
  loading="lazy"
  width="837"
  height="516"
/>

Com `display: block`

<img
  src="/images/posts/2018/09/email-image-com-display-block.jpg"
  alt="Exibindo newsletter com display block e sem falhas de espaçamento entre as imagens"
  title="Exibindo newsletter com display block e sem falhas de espaçamento entre as imagens"
  loading="lazy"
  width="851"
  height="526"
/>

As imagens no HTML5 se comportam semelhantes aos textos, com isso recebem um espaçamento entre linhas. 

Para solucionar esse erro de espaçamento, basta inserir no atributo style da sua imagem a propriedade display com o valor block (`display: block`).

O HTML5 trouxe novas regras e deixou obsoletos todos os atributos que envolvia a tag `<table>` como align, bgcolor, dentre outros. Nesse caso se você utiliza table tag para estruturar seus e-mails (Se você busca sempre utilizar códigos válidos), recomenda-se que você utilize o XHTML 1.0 transitional.

Existem clientes de email que respeitam seu DOCTYPE informado, mas os webmails tratam quase sempre seu email como documento HTML5, webmails que falo são Gmail, Hotmail, Yahoo, dentre outros. Você pode conferir no link abaixo os clientes de email e quais DOCTYPEs eles utilizam:  
- [Teste de DOCTYPES em clientes de email](https://emails.hteumeuleu.fr/wp-content/uploads/2016/10/doctype-test-results.html)

---

Por fim, parece algo bobo que não damos tanta importância por ele sempre estar ali em cima na primeira linha, porém saber um pouco mais sobre ajuda a corrigir erros, deixar o documento HTML mais seguro e moderno.