<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Derechos de autor
    figure
    .video.mb-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/uKZZxlT4F5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    //-- figcaption Video: Leyenda del video
    
    .row.mb-5
      .col-lg-7
        p.mb-3  La propiedad intelectual es entendida como toda creación del intelecto humano, y sus derechos se protegen por la ley, a través de dos ramas: la propiedad industrial y el derecho de autor.
        p.mb-3  En nuestro caso, utilizaremos los derechos de autor. Como su nombre lo indica, se refiere al reconocimiento que se le da a un autor, por ley, con respecto a la creación de sus obras, ya sean artísticas, literarias, musicales, científicas, inéditas, etc. Su objetivo es la protección original de quien crea estas obras, aclarando que, además de proteger desde la parte legal, se hace de manera moral y patrimonial.
        p.mb-3  Con lo anterior, lo que se busca es que, quienes extraigan alguna obra, sepan que tiene un creador y que a este debe dársele su respectiva atribución o, en su defecto, solicitarle un permiso para utilizarla, sea para fines educativos o simplemente para beneficio propio.
        p.mb-3  Para ampliar el tema sobre derechos de autor, lo invitamos a leer el documento de 
          span.text-bold la Organización Mundial de la Propiedad Intelectual OMPI, 
          | denominado “Principios básicos del derecho de autor y los derechos conexos”, el cual se encuentra en el material complementario.
        p.mb-3  Ahora bien, dentro de los derechos de autor que protegen las obras ya mencionadas, 
          span.text-bold existen licencias que se ofrecen dependiendo del motivo que se quiere. 
          | Estudiemos cada una de ellas. 
      .col-lg-5
        figure
          img(src='@/assets/curso/t5-i1.jpg')
    .separador
    br
    br
    #t_5_1.titulo-segundo
      .h4 5.1 Tipos de licencias
    p.mb-3  A través de la web, se pueden encontrar recursos muy interesantes que se utilizan para enriquecer los contenidos digitales como imágenes, videos, audio, entre otros. Sin embargo, es importante diferenciar qué tipo de contenidos se pueden usar y cuándo los derechos de autor permiten la reutilización de estos.
    p.mb-5  Es por eso que, a continuación, 
      span.text-bold abordaremos los diferentes tipos de licencias:
    //-- tabs
    TabsC.mb-5
      .py-3.py-md-4(titulo="Copyright")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            .h4 Todos los derechos reservados 
            p Cuando un recurso tiene Copyright, el autor debe recibir una compensación económica por el uso de su obra. Por tal motivo, si por ejemplo, se crea un video con una canción reconocida y se publica en alguna red social, lo más probable es que la publicación pueda ser bloqueada por derechos de autor, ya que no se ha pagado por el uso de esta.
          .col-md-5
            figure
              img(src='@/assets/curso/t5-i2.svg', alt='Texto que describa la imagen')
              //--figcaption Leyenda de la imagen
      .py-3.py-md-4(titulo="Copyleft")
        .row.justify-content-center
          .col-md-5
            .h4 Algunos derechos reservados
            p.mb-3  Existen contenidos que están libres de licencia y son una oportunidad para que sus autores den a conocer su trabajo a una gran comunidad, a su vez que realizan aportes a campos como la educación, el emprendimiento, entre otros, dejando libres sus contenidos.
            p.mb-3  Esta licencia trata de propiciar el libre uso y distribución de alguna obra, y exige que las personas que realicen una modificación de la misma, preserven esas libertades. 
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/t5-i3.svg', alt='Texto que describa la imagen')
              //--figcaption Leyenda de la imagen

      .py-3.py-md-4(titulo="Creative Commons")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            .h4 Algunos derechos reservados 
            p Cuando un contenido tiene el sello de Creative Commons (CC) se debe analizar muy bien para poder determinar el uso y la forma de autorización del autor. En muchos casos puede ser totalmente libre para difusión, comercialización, modificación, etc., y en otros casos se limita e incluye la atribución en la obra final.
        
          .col-md-5
            figure
              img(src='@/assets/curso/t5-i4.svg', alt='Texto que describa la imagen')
              //--figcaption Leyenda de la imagen

    br
    p.mb-5  Pero debes tener en cuenta que 
      span.text-bold la licencia Creative Commons tiene cuatro condiciones y 6 combinaciones de esas condiciones. La siguiente imagen explica cada una de ellas.
    .row.justify-content-center
      .col-lg-10
        .tabla-b__header
          .h4.mb-0  Condiciones creative commons
        .row.p-5
          .col-lg-6
            .box-item.align-items-center
              figure.w90
                img.h90(src='@/assets/curso/t5-i5.svg', alt='Texto que describa la imagen')
              p
                span.text-bold Autoría: 
                | siempre citar al autor.
          .col-lg-6
            .box-item.align-items-center
              figure.w90
                img.h90(src='@/assets/curso/t5-i6.svg', alt='Texto que describa la imagen')
              p 
                span.text-bold Sin obras derivadas: 
                | no se permite la modificación del original.
        .row.p-5
          .col-lg-6
            .box-item.align-items-center
              figure.w90
                img.h90(src='@/assets/curso/t5-i7.svg', alt='Texto que describa la imagen')
              p
                span.text-bold No comercial: 
                | no se permite la comercialización, ni los fines lucrativos.
          .col-lg-6
            .box-item.align-items-center
              figure.w90
                img.h90(src='@/assets/curso/t5-i8.svg', alt='Texto que describa la imagen')
              p 
                span.text-bold Compartir igual:  
                | permite modificación del original, manteniendo la misma licencia.


    .row.justify-content-center
      .col-lg-10
        .tabla-b__header
          .h4.mb-0  Combinación de condiciones
        .row.p-5.b-botttom
          .col-lg-4
            figure
              img.h90(src='@/assets/curso/t5-i9.svg' alt="icono CC e icono de persona")
            figcaption.no-bg  Reconocimiento al autor.
          .col-lg-4
            figure
              img.h90(src='@/assets/curso/t5-i10.svg' alt="icono CC, icono de persona, icono sin fines comerciales")
            figcaption.no-bg  Reconocimiento al autor sin fines comerciales.
          .col-lg-4
            figure
              img.h90(src='@/assets/curso/t5-i11.svg' alt="icono CC, icono de persona, icono sin fines comerciales")
            figcaption.no-bg  Reconocimiento al autor. Permite modificaciones, pero sin fines comerciales.
        .row.p-5.b-botttom
          .col-lg-4
            figure
              img.h90(src='@/assets/curso/t5-i12.svg' alt="icono CC,  No se permite modificar la obra.")
            figcaption.no-bg  Reconocimiento al autor. No se permite modificar la obra.
          .col-lg-4
            figure
              img.h90(src='@/assets/curso/t5-i13.svg' alt="icono CC, Se permite comercializar")
            figcaption.no-bg  Reconocimiento al autor. Se permite comercializar.
          .col-lg-4
            figure
              img.h90(src='@/assets/curso/t5-i14.svg' alt="icono CC, sin fines comerciales y sin modificaciones")
            figcaption.no-bg  Reconocimiento al autor, sin fines comerciales y sin modificaciones.

    .separador

    br
    br
    #t_5_2.titulo-segundo
      .h4 5.2 Fuentes de contenido libre
    p.mb-3  Este tipo de contenido alcanza las creaciones de dominio público donde se otorgan derechos de uso sin restricciones legales. Es de resaltar que libre no es igual a gratis, ya que, en algunos casos, el autor recibe donaciones o incentivos por sus contenidos; también se debe mencionar que existen licencias abiertas que son libres, porque pueden prohibir algunos usos de su obra o solicitar atribución que sería lo normalmente correcto.
    p.mb-5  Algunas fuentes de contenido libre son las siguientes:
    .row.justify-content-center
      .col-lg-4
        figure
          img.mb-3(src='@/assets/curso/t5-i15.png' alt="icono CC,  No se permite modificar la obra.")
          
        a.anexo.mb-4.mb-lg-0(href="https://pixabay.com/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p 
              span.text-bold  Enlace Web. 
              | www.Pixabay.com
      .col-lg-4
        figure
          img.mb-3(src='@/assets/curso/t5-i16.png' alt="icono CC,  No se permite modificar la obra.")
        a.anexo.mb-4.mb-lg-0(href="https://www.zapsplat.com/" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p 
              span.text-bold  Enlace Web. 
              | www.zapsplat.com
    .separador

    br
    br
    #t_5_3.titulo-segundo
      .h4 5.3 Atribución de derechos
    .row
      .col-lg-7
        p.mb-3  El sitio donde se encuentre alojado el dominio público, podrá solicitar que se haga una atribución al creador del contenido o al sitio que aloja al contenido.
        p.mb-3  En la biblioteca musical de YouTube por ejemplo, se puede filtrar la búsqueda por archivo de audio que requiera atribución y los que no lo necesiten.
        p.mb-3  Ten en cuenta que la no atribución de una obra podría traer implicaciones legales, las cuales van desde aspectos económicos con multas, hasta procesos legales que podrían llevar a la cárcel a quien se tome como propia una obra de su respectiva atribución. Por lo tanto, es muy importante saber qué tipo de obra se toma y consultar los respectivos permisos que esta tiene, debido a que hay algunas que no requieren atribución, pero otras que sí.
        
      .col-lg-5.mb-5
        figure
          img.mb-3(src='@/assets/curso/t5-i17.png' alt="icono CC,  No se permite modificar la obra.")
    .row
      .col-lg-12
        .cajon.color-primario.p-4.mb-4
          p.text-bold El consejo es que nunca debemos tomar algo como propio si no lo es, porque cada creación tiene un autor y, además, su atribución es un reconocimiento al autor por la obra que hizo y que le fue de utilidad en sus proyectos, ya sean laborales, educativos o personales. Asimismo, con su atribución se apoya el trabajo del autor y se pagan sus derechos patrimoniales.



</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.h90{height:  90px}
.w90{ width: 90px}
figcaption{ font-size: 16px; line-height: 20px}
.tabla-b__header *{color: #fff}
.b-botttom{border-bottom: 3px solid #C7F9CC}
.box-item{display: inline}
.box-item figure{ margin-right: 15px; float: left}
.box-item p{margin-top: 25px}
</style>
