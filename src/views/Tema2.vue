<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Tipos de contenido digital
    figure.mb-5
      img(src='@/assets/curso/t2-i1.svg', alt='representación organizada de los tipos de contenido digital')
    p.text-bold.mb-5  Los prototipos de formatos con contenidos digitales que las personas o las empresas comparten, se pueden clasificar de la siguiente manera:
    
    #t_2_1.titulo-segundo
      h2 2.1 Básicos
    br
    
    .row.justify-content-center.mb-5.align-items-center
      .col-lg-4
        p.mb-4 Son aquellos que cualquier persona con acceso a un dispositivo móvil puede crear y publicar en sus redes sociales, estos son:
      .col-lg-6
        .tarjeta.tarjeta--gris.p-4.mb-5.customSlides-A
          SlyderA
            .row
              .col-lg-12
                .h4 Fotografía digital
                figure.mb-4
                  img(src='@/assets/curso/t2-i2.svg', alt='representación organizada de los tipos de contenido digital')
            .row
              .col-lg-12
                .h4 Video grabado o video en vivo
                figure.mb-4
                  img(src='@/assets/curso/t2-i3.svg', alt='representación organizada de los tipos de contenido digital')
            .row
              .col-lg-12
                .h4 Audio
                figure.mb-4
                  img(src='@/assets/curso/t2-i4.svg', alt='representación organizada de los tipos de contenido digital')
            .row
              .col-lg-12
                .h4 Texto
                figure.mb-4
                  img(src='@/assets/curso/t2-i5.svg', alt='representación organizada de los tipos de contenido digital')



    .separador

    br
    br

    #t_2_2.titulo-segundo
      .h4 2.2  Intermedios
    .row.justify-content-center.mb-5.align-items-center
      .col-lg-4
        p.mb-4 El contenido digital intermedio es aquel que requiere el uso de herramientas de edición para producirlas e incluso pueden ser creadas desde el dispositivo móvil. La mayoría se desarrollan con un objetivo de comunicación y son contenidos planeados.
        p.mb-4 Algunas de las más conocidas son:
      .col-lg-6
        .tarjeta.tarjeta--gris.p-4.mb-5.customSlides-A
          SlyderA
            .row
              .col-lg-12
                .h4 Infografía
                figure.mb-4
                  img(src='@/assets/curso/t2-i6.svg', alt='representación organizada de los tipos de contenido digital')
            .row
              .col-lg-12
                .h4 Póster
                figure.mb-4
                  img(src='@/assets/curso/t2-i7.svg', alt='representación organizada de los tipos de contenido digital')     
            .row
              .col-lg-12
                .h4 Presentaciones
                figure.mb-4
                  img(src='@/assets/curso/t2-i8.svg', alt='representación organizada de los tipos de contenido digital')        
            .row
              .col-lg-12
                .h4 Video promocional
                figure.mb-4
                  img(src='@/assets/curso/t2-i9.svg', alt='representación organizada de los tipos de contenido digital') 
            .row
              .col-lg-12
                .h4 Podcast
                figure.mb-4
                  img(src='@/assets/curso/t2-i10.svg', alt='representación organizada de los tipos de contenido digital')       
    
    Separador
    br
    br
    #t_2_3.titulo-segundo
      .h4 2.3 Avanzados
    .row.justify-content-center.mb-5.align-items-center
      .col-lg-4
        p.mb-4  Este tipo de contenidos digitales requieren de profesionales, en el área, para producirlos.
        p.mb-4  En esta categoría podemos encontrar:
      .col-lg-6
        .tarjeta.tarjeta--gris.p-4.mb-5.customSlides-A
          SlyderA
            .row
              .col-lg-12
                .h4 Videojuegos
                figure.mb-4
                  img(src='@/assets/curso/t2-i11.svg', alt='representación organizada de los tipos de contenido digital')
            .row
              .col-lg-12
                .h4 Videos seriados
                figure.mb-4
                  img(src='@/assets/curso/t2-i12.svg', alt='representación organizada de los tipos de contenido digital')
            .row
              .col-lg-12
                .h4 e-book interactivos
                figure.mb-4
                  img(src='@/assets/curso/t2-i13.svg', alt='representación organizada de los tipos de contenido digital')
            .row
              .col-lg-12
                .h4 Páginas Web
                figure.mb-4
                  img(src='@/assets/curso/t2-i14.svg', alt='representación organizada de los tipos de contenido digital')
            .row
              .col-lg-12
                .h4 Seminarios Web o webinar
                figure.mb-4
                  img(src='@/assets/curso/t2-i15.svg', alt='representación organizada de los tipos de contenido digital')
    
    
      
    .cajon.color-primario.p-4.mb-4
      p.mb-3 Existe una larga lista de modelos u opciones de contenidos digitales que podemos crear, incluyendo combinaciones entre ellos; un ejemplo, muy común, se puede observar en las páginas de venta de productos, donde podemos encontrar un carrusel de imágenes (más de 2 imágenes en la misma publicación) y en algunos casos, acompañado de un video explicativo del producto. 
      p.text-bold Pero, la decisión de qué tipo de contenido digital debo crear para mi emprendimiento, dependerá de la planeación del contenido, tema que aprenderemos a continuación.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
