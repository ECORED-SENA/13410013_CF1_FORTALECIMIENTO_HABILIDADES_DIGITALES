export default {
  global: {
    componenteFormativo: 'Contenido, planeación digital y derechos de autor',
    descripcionCurso:
      'El desarrollo de este componente es introductorio a temas necesarios para iniciar en el proceso de construcción de contenidos digitales desde las características básicas del contenido digital, definición de objetivos, planeación digital y derechos de autor.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos básicos y características del contenido digital',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de contenido digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Básicos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Intermedios',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Avanzados',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Objetivos de comunicación asociados al contenido digital',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Planeación de contenidos digitales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Derechos de autor',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tipos de licencias',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Fuentes de contenido libre',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Atribución de derechos',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Jesualdo Morantes',
        cargo: 'Instructor',
        centro: 'SENA',
        regional: 'Regional Norte de Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Diseñadora Instruccional - Revisora Metodológica y Pedagógica',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: [
          'Gilberto Junior Rodriguez Rodriguez',
          'Wilson Andrés Arenales Caceres',
          'Andrés Felipe Herrera',
          'Jessica Moreno Realpe',
          'Víctor Cardenas',
          'Arnulfo Beltran',
        ],
        cargo: 'Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'María Isabel Román Rueda',
        cargo: 'Validación de diseño y contenido',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ángeles, 2020, Contenidos digitales: qué son, tipos y ejemplos, Recuperado de ',
      link: 'https://www.pantallea.com/contenidos-digitales-tipos-ejemplos/',
    },
    {
      referencia:
        'Diana Agudelo, 2019. ¿Qué es una estrategia de contenidos y por qué es importante?, Recuperado de ',
      link: 'https://www.triario.co/blog/que-es-una-estrategia-contenidos',
    },
    {
      referencia:
        'Luz Peréz Baz, 2020. Los 4 tipos de objetivos que tienes que definir para el éxito de tu negocio. Recuperado de ',
      link:
        'https://www.makinglovemarks.es/blog/objetivos-estrategia-comunicacion/',
    },
    {
      referencia:
        'Organización Mundial de Propiedad Intelectual OMPI, 2018. La propiedad intelectual en el ámbito digital, Recuperado de ',
      link: 'https://www.wipo.int/ip-outreach/es/ipday/2016/ip_digital.html',
    },
  ],
  glosario: [
    {
      termino: 'Autor',
      significado: 'Persona física que realiza la creación intelectual.',
    },
    {
      termino: 'Avatar',
      significado:
        'Representación gráfica que identifica a un usuario. Los avatares pueden ser fotografías reales o dibujos animados.',
    },
    {
      termino: 'Banner',
      significado:
        'Forma de publicidad en internet que consiste en incluir una pieza publicitaria gráfica dentro de una página web; por lo general, se pone en el encabezado del sitio.',
    },
    {
      termino: 'Call to action',
      significado:
        'Es un botón o enlace situado en un site que busca atraer clientes potenciales y convertirlos en clientes finales, normalmente a través de un formulario en una página de destino o landing page.',
    },
    {
      termino: 'Comunicar',
      significado:
        'Transmitir y recibir información por medio de un código común, de un emisor a un receptor.',
    },
    {
      termino: 'Contenido de valor',
      significado:
        'Es el contenido que ayuda y aporta valor real a los usuarios. En internet se puede distinguir entre el contenido de valor, el contenido comercial y el contenido de relleno, publicando contenido de valor en lugar de contenido comercial se logra que se comparta en redes sociales, fidelizar a los usuarios y llegar a nuevos clientes.',
    },
    {
      termino: 'Copia o ejemplar',
      significado:
        'Soporte material que contiene la obra como resultado de un acto de reproducción.',
    },
    {
      termino: 'Formato de imagen',
      significado:
        'Datos digitales en un formato específico, que permite ser visualizado en una computadora o dispositivo compatible; los más usados son PNG, JPEG, TIFF y GIF.',
    },
    {
      termino: 'Infografía',
      significado:
        'Combinación de imágenes y textos, sintética, explicativa y fácil de entender, con el fin de comunicar información de manera visual y simplificar su transmisión.',
    },
    {
      termino: 'Live streaming',
      significado:
        'Transmisión de contenido de audio o video de manera inmediata, sin necesidad de ser almacenada, por ejemplo, los programas de radio se transmiten en tiempo real.',
    },
    {
      termino: 'Multimedia',
      significado:
        'Se refiere a cualquier plataforma que utiliza diferentes medios de expresión para comunicar y dar a conocer información, desde texto e imágenes hasta gifs, videos y audios.',
    },
    {
      termino: 'Objetivos',
      significado: 'Fin que se quiere alcanzar y al cual se dirige una acción.',
    },
    {
      termino: 'Planear',
      significado:
        'Acción que implica la elaboración de un plan o proyecto de trabajo, estudio o de alguna actividad a realizar en el futuro.',
    },
    {
      termino: 'Podcast',
      significado:
        'Publicación digital en audio o video que se puede descargar o escuchar vía streaming. Suele alojarse en una página web o blog, pero también en plataformas especializadas en audio como itunes, spotify o soundcloud.',
    },
    {
      termino: 'Shooting',
      significado:
        'Sesión fotográfica en la que se hacen varias tomas del mismo producto para finalmente elegir la o las mejores imágenes que muestran lo que la marca quiere expresar sobre ese producto o servicio.',
    },
    {
      termino: 'Stitching',
      significado:
        'Proceso por el cual se combinan múltiples imágenes (foto stiching) para producir una imagen panorámica o una de alta resolución, normalmente mediante un programa de ordenador.',
    },
    {
      termino: 'Storytelling',
      significado:
        'Contar una historia sobre el producto a través de imágenes o videos, con el fin de lograr una mayor conexión con el cliente. Se representa lo que el producto le puede ofrecer o cómo se vería usándolo.',
    },
  ],
  complementario: [
    {
      texto:
        'Derechos de autor: Organización Mundial de la Propiedad Intelectual OMPI. (2016). Principios básicos del derecho de autor y los derechos conexos.',
      tipo: 'PDF',
      descarga: '/downloads/wipo_pub_909_2016.pdf',
    },
  ],
}
