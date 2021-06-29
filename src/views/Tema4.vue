<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Planeación de contenidos digitales
    .row.mb-5
      .col-lg-3
        figure
          img(src='@/assets/curso/t4-i1.svg')
      .col-lg-9
        p.mb-4  El primer paso en la creación de contenidos digitales es 
          span.text-bold  la planeación 
          | y, en el siguiente video, comprenderemos porqué es importante y cómo utilizar una herramienta indispensable en ese proceso: 
          span.text-bold  el calendario editorial. 
    
    figure
    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/njV_qy7JwGs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //-- figcaption Video: Leyenda del video
    .row.mb-4
      .col-lg-4
        a.anexo.mb-4(:href="obtenerLink('/downloads/A1_CF01_4_Calendario.xlsx')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-xls.svg")
            .anexo__texto
              p 
                span.text-bold  Anexo. 
                | Formato calendario de contenido.
    
    h3.titulo-tercero ¿Por qué nunca debe faltar un calendario?
    .row.justify-content-center.customCards
      .col-lg-10
        .tarjeta-avatar-b.mb-5.align-items-center
          img.h85(src='@/assets/curso/t4-i2.svg' alt='Icono bocina')
          .tarjeta.color-primario
            .p-4
              .h2 Aportar valor a la audiencia
              p La audiencia sentirá que se le toma en serio y que se está creando para ella. Hablar por hablar en las redes sociales lo convierte en esa famosa cuenta “humo” y, por supuesto, es nada creativa.

        .tarjeta-avatar-b.mb-5.align-items-center
          img.h85(src='@/assets/curso/t4-i3.svg' alt='Icono bocina')
          .tarjeta.color-primario
            .p-4
              .h2 Proyectar las ideas
              p Mide las reacciones y se adapta con tiempo a los cambios necesarios para mejorar.

        .tarjeta-avatar-b.mb-5.align-items-center
          img.h85(src='@/assets/curso/t4-i4.svg' alt='Icono bocina')
          .tarjeta.color-primario
            .p-4
              .h2 Rapidez para crear
              p Una vez que sus pilares se encuentren claros y casados con el modelo de calendario editorial, las ideas llegarán en cantidad industrial. Se sabe hacia donde va.

        .tarjeta-avatar-b.mb-5.align-items-center
          img.h85(src='@/assets/curso/t4-i5.svg' alt='Icono bocina')
          .tarjeta.color-primario
            .p-4
              .h2 Producir + escuchar mejor
              p El calendario editorial desarrolla un séptimo sentido: creación intuitiva. Se entiende mejor lo que se quiere comunicar y se entiende a la audiencia.
        .tarjeta-avatar-b.mb-5.align-items-center
          img.h85(src='@/assets/curso/t4-i6.svg' alt='Icono bocina')
          .tarjeta.color-primario
            .p-4
              .h2 Conocer mejor al público
              p Cada formato, cada temática, cada post tiene una audiencia diferente.
    .row
      .col-lg-8
        .cajon.color-primario.p-4.mb-4
          p Antes de ir al formato de calendario de contenido, 
            span.text-bold realizaremos una planificación y una estrategia.
    
    p.mb-4 
      span.text-bold  Es importante 
      |  tener presente que, para crear una estrategia de distribución sólida, se necesita una segura comprensión de los objetivos de contenido. Las siguientes preguntas nos ayudarán a guiarnos en esta toma de decisiones:
    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-5.align-items-center
          img(src='@/assets/curso/t4-i7.svg' alt='Icono bocina')
          .tarjeta.color-soft-blue
            .p-4
              ul.lista-ul
                li 
                  i.fas.fa-check
                  | ¿Cuál es el objetivo? 
                li 
                  i.fas.fa-check
                  | ¿Qué estás intentando lograr? Liderazgo de pensamiento, conversiones, conocimiento de la marca.
                li 
                  i.fas.fa-check
                  | ¿Qué quieres que la gente realice una vez que haya interactuado con el contenido? Ya sea que se trate de acciones en redes sociales, visitas a páginas o descargas de demostración. Qué se supone que debe ser su contenido, en última instancia.
                li 
                  i.fas.fa-check
                  | ¿A quién intentas llegar? ¿Qué tipo de contenido consumen? ¿Qué nivel de conocimiento poseen? Cuando comprendas quiénes son esas personas "adecuadas", podrás identificar mejor cómo crear contenido que les interese. 
                li 
                  i.fas.fa-check
                  | ¿Qué canales utilizarás? Vas a querer apuntar a los canales más efectivos y relevantes para llegar a las personas. Una estrategia de distribución sólida, generalmente incluye una combinación de medios.  
    .row
      .col-lg-8
        .cajon.color-primario.p-4.mb-4
          p Una vez que se tiene 
            span.text-bold la comprensión básica de los objetivos, 
            | se puede desarrollar el resto de la estrategia.
    br
    br
    br

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.h85{height: 85px}
.color-soft-blue{background-color: #F3F9FF}
.customCards .tarjeta-avatar-b > div{padding-left: 6%}
</style>
