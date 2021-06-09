<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row
      .col-lg-7
        p.mb-3.text-bold  ¿Sabías que el contenido digital se refiere a toda la información que se muestra en un medio digital?
        p.mb-3  Cuando hablamos de información, nos referimos a los gráficos, presentaciones, audios y videos. Para producir cada uno de estos insumos, es importante conocer sus características y el flujo de trabajo que implica el desarrollo de cada uno de estos contenidos.
        p.mb-3  En este componente formativo entraremos al mundo del contenido digital, aprenderemos los conceptos y características básicas necesarias, los tipos de contenido digital, los objetivos de comunicación y planeación de esos contenidos.
        p.mb-3  Finalizaremos con un tema importante en la actualidad, los derechos de autor y la propiedad intelectual, donde encontrarás cuáles son los tipos de licencias, las fuentes de contenido de libre uso, y cuál es la atribución de derechos.
        p.mb-3.text-bold  ¡Muchos éxitos en este aprendizaje!

      .col-lg-5
        figure
          img(src='@/assets/curso/t0-i1.svg', alt='representación ecosistema digital')

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
