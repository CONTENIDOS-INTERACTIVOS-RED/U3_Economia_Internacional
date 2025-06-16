export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Finanzas internacionales y desafíos globales',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Mercados financieros internacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Características y funciones de los mercados financieros internacionales',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Factores que influyen en los mercados financieros internacionales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipo de cambio y riesgo cambiario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto y clasificación de tipo de cambio',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Factores que influyen en el tipo de cambio',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Gestión del riesgo cambiario',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Inversiones internacionales y flujo de capital',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Tipos de inversión internacional',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Factores que afectan los flujos de capital internacional',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Desafíos globales en las finanzas internacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Crisis financieras y su impacto en la economía global',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Regulación financiera internacional',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Retos del crecimiento económico en un entorno globalizado',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Peña Castellanos, L. (2011). De la economía internacional: compilación 2010. Editorial Universitaria.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/71448',
    },
    {
      referencia:
        'Orden Olasagasti, O. D. (2015). Gestión del riesgo y mercados financieros. Delta Publicaciones.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/170083',
    },
    {
      referencia:
        'Tamayo Saborit, M., Casanova Montero, A. R. & Zuaznábar Morales, I. R. (2019). Finanzas internacionales: teoría y políticas. Editorial Universo Sur.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/120839',
    },
    {
      referencia:
        'Población García, F. J. (2013). La gestión del riesgo en empresas industriales. Delta Publicaciones.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/169700',
    },
    {
      referencia:
        'Seco Presencio, A. & Calvo Hornero, A. (Dir.). (2015). Las instituciones financieras internacionales en los mercados de capital. D - UNED - Universidad Nacional de Educación a Distancia. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/86614 ',
    },
    {
      referencia:
        'Siglo XXI, S. S. (2009). Cuaderno para emprendedores y empresarios: comercio exterior. El Cid Editor. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/34630 ',
    },
    {
      referencia:
        'Torrero Mañas, A. (2011). La crisis financiera internacional y sus efectos sobre la economía española: seis conferencias. Marcial Pons Ediciones Jurídicas y Sociales. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/127389 ',
    },
    {
      referencia:
        'León, G. (Comp.) & Afcha, S. (Comp.). (2013). Economía mundial, crecimiento económico y financiero factores para una estrategia local e internacional. A - Guillén Eduardo León López.  ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/190896',
    },
  ],
  glosario: [
    {
      termino: 'Activo financiero',
      significado:
        'Instrumento negociable en los mercados financieros, que representa un derecho sobre ingresos futuros, como acciones y bonos.',
    },
    {
      termino: 'Apalancamiento financiero',
      significado:
        'Uso de deuda para financiar inversiones con el objetivo de aumentar la rentabilidad de los recursos propios.',
    },
    {
      termino: 'Basilea III',
      significado:
        'Conjunto de normas internacionales, diseñadas para fortalecer la regulación, supervisión y gestión de riesgos, del sector bancario.',
    },
    {
      termino: 'Crisis cambiaria',
      significado:
        'Situación en la que una moneda experimenta una fuerte depreciación, afectando la estabilidad financiera de un país.',
    },
    {
      termino: 'Derivados financieros',
      significado:
        'Contratos cuyo valor depende del comportamiento de un activo subyacente, como futuros, opciones y swaps.',
    },
    {
      termino: 'Especulación financiera',
      significado:
        'Compra y venta de activos con el objetivo de obtener beneficios por variaciones en los precios, sin un propósito productivo.',
    },
    {
      termino: 'Estabilidad financiera',
      significado:
        'Condición en la que el sistema financiero funciona sin interrupciones, garantizando liquidez y confianza en los mercados.',
    },
    {
      termino: 'Fluctuación cambiaria',
      significado:
        'Variaciones en el valor de una moneda con respecto a otra, debido a factores económicos y políticos.',
    },
    {
      termino: 'Fondos soberanos',
      significado:
        'Vehículos de inversión, gestionados por gobiernos que administran excedentes fiscales, para invertir en activos internacionales.',
    },
    {
      termino: '<em>Hedge Funds</em>',
      significado:
        'Fondos de inversión que emplean estrategias avanzadas de mercado, para maximizar rendimientos, usualmente con alto riesgo.',
    },
    {
      termino: 'Instrumentos de cobertura',
      significado:
        'Herramientas financieras como contratos de futuros y opciones, utilizadas para reducir riesgos cambiarios o de tasa de interés.',
    },
    {
      termino: 'Liquidez internacional',
      significado:
        'Disponibilidad de activos convertibles en efectivo en los mercados globales, sin generar grandes fluctuaciones de precios.',
    },
    {
      termino: 'Mercado de capitales',
      significado:
        'Espacio donde se negocian activos financieros de largo plazo, como acciones y bonos.',
    },
    {
      termino: 'Mercado de divisas (<em>Forex</em>)',
      significado:
        'Plataforma global donde se intercambian monedas extranjeras, determinando los tipos de cambio.',
    },
    {
      termino: 'Prima de riesgo',
      significado:
        'Diferencia en la tasa de interés exigida por los inversionistas, para asumir el riesgo de una economía, frente a activos de menor riesgo.',
    },
    {
      termino: 'Regulación financiera',
      significado:
        'Normativas y supervisión establecidas por entidades internacionales, para garantizar la transparencia y solidez del sistema financiero.',
    },
    {
      termino: 'Riesgo país',
      significado:
        'Probabilidad de que un país incumpla sus obligaciones financieras, debido a factores económicos o políticos.',
    },
    {
      termino: '<em>Swap</em> cambiario',
      significado:
        'Acuerdo financiero en el que dos partes intercambian flujos de efectivo en diferentes monedas, para gestionar riesgos de tipo de cambio.',
    },
    {
      termino: 'Tasa LIBOR',
      significado:
        'Referencia global utilizada para fijar tasas de interés en préstamos interbancarios internacionales.',
    },
    {
      termino: 'Volatilidad financiera',
      significado:
        'Grado de fluctuación en los precios de los activos financieros, influenciado por incertidumbre económica y especulación.',
    },
  ],
}
