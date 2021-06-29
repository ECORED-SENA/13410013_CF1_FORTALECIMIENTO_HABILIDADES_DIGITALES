<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1  Conceptos básicos y características del contenido digital
    .row.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/t1-i1.svg')
      .col-lg-9
        p.mb-4  Constantemente estamos interactuando con contenido digital; muchas veces sin prestar atención a sus detalles y características y, al desconocer esta información, desaprovechamos todo el potencial que pueden brindarnos para el marketing de nuestros emprendimientos.
        p.mb-4  Por ello, se recomienda que vea el siguiente video, en el cual 
          span.text-bold se explicarán los conceptos básicos y las características del contenido digital.
    
    figure
    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/1p9t9ymdH6Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //-- figcaption Video: Leyenda del video

    .row
      .col-lg-7
        .cajon.color-primario.p-4.mb-4
          p Al finalizar el video, analiza: 
            span.text-bold ¿cuál es el contenido digital que más utilizas?

  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
