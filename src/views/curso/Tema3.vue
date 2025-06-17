<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Inversiones internacionales y flujo de capital'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-color-8.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6.order-2
            figure
              img(src="@/assets/curso/tema3/1.svg", data-aos="zoom-in")
          .col-lg-6.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left").mb-4 Para conocer sobre esta temática, lo invitamos a escuchar el siguiente pó Inversiones internacionales y flujo de capital
    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Fundamentos de la innovación estratégica"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )

    p.mb-4 Los gobiernos han adoptado diversas estrategias para gestionar los flujos de capital internacional y mitigar los riesgos asociados a la volatilidad financiera:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/2.png")
            .col-lg-7
              h5 Establecimiento de controles de capital
              p Estrategias que pueden incluir restricciones a la entrada o salida de divisas, impuestos a las transacciones financieras y regulaciones sobre la repatriación de utilidades. Estas medidas buscan estabilizar la economía y evitar desequilibrios en la balanza de pagos. No obstante, su efectividad depende del contexto económico de cada país y de la capacidad de sus instituciones, para implementar políticas coherentes y sostenibles.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema3/3.png")
            .col-lg-7
              h5 Promoción de la inversión extranjera directa
              p Clave para la gestión de los flujos de capital en sectores estratégicos. Muchos países han desarrollado incentivos fiscales, zonas francas y marcos regulatorios favorables para atraer inversiones a largo plazo que generen beneficios estructurales. Sin embargo, también es importante garantizar que esta inversión contribuya al desarrollo sostenible, evitando prácticas como la sobreexplotación de recursos naturales o la concentración de beneficios, en grandes corporaciones, sin impactos positivos en la economía local.
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") En el contexto actual, las inversiones internacionales han adquirido un papel aún más relevante debido a la transición hacia una economía digital y sostenible. La inversión en sectores como la tecnología, la energía renovable y la infraestructura digital, se ha convertido en una prioridad para muchos países, porque representa una oportunidad para diversificar la economía y reducir la dependencia de industrias tradicionales. A su vez, la creciente conciencia sobre el impacto ambiental ha llevado a que los inversionistas busquen proyectos con criterios de sostenibilidad, promoviendo la inversión responsable y el financiamiento de iniciativas que contribuyan a mitigar el cambio climático.
    
        .bg-color-7.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Además de los factores económicos, la estabilidad política y la gobernanza, son elementos fundamentales para atraer inversión extranjera. Los países con instituciones sólidas, sistemas legales transparentes y políticas económicas previsibles, generan mayor confianza en los inversionistas. Por el contrario, la incertidumbre política, los cambios abruptos en las regulaciones y la corrupción pueden desalentar la entrada de capital y provocar fugas de inversión. En este sentido, la implementación de reformas estructurales que fortalezcan el Estado de derecho y la transparencia, es clave para consolidar un entorno atractivo para la inversión internacional.
    
    .bg-full-width.bg-color-info
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            figure
              img(src="@/assets/curso/tema3/6.svg", data-aos="zoom-in")
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/7.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Las inversiones internacionales y el flujo de capital, son elementos esenciales para el desarrollo económico y la estabilidad financiera de los países. La atracción de inversión extranjera directa, puede generar crecimiento y empleo, mientras que los flujos de capital especulativos pueden representar riesgos significativos si no se gestionan adecuadamente. Los gobiernos y las instituciones financieras internacionales, deben implementar políticas que permitan aprovechar los beneficios de la movilidad del capital, al tiempo que minimizan sus impactos negativos. En un mundo cada vez más interconectado, la capacidad de los países para gestionar estos flujos, será determinante para su éxito en la economía global.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Tipos de inversión internacional
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-16.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Las inversiones internacionales pueden clasificarse en diferentes categorías, según su naturaleza, objetivos y el nivel de control que otorgan a los inversionistas sobre los activos adquiridos. Estas inversiones representan un mecanismo clave para el crecimiento económico de los países, dado que facilitan la transferencia de capital, tecnología y conocimientos entre economías. La globalización financiera ha permitido que los capitales se desplacen con mayor facilidad, dando lugar a oportunidades de inversión en múltiples sectores y regiones. Sin embargo, los distintos tipos de inversión, conllevan riesgos y beneficios específicos que los gobiernos y las empresas deben considerar al participar en los mercados financieros internacionales.
        p(data-aos="fade-left") Uno de los tipos de inversión más relevantes es la inversión extranjera directa (IED), la cual implica la adquisición de activos productivos en un país distinto al de origen del inversionista:
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/9.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Primer tema
                p.mb-0 Este tipo de inversión se diferencia de otras formas de financiamiento porque involucra un grado significativo de control y gestión sobre las operaciones de la empresa receptora.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/10.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Segundo tema
                p.mb-0 Las empresas multinacionales suelen realizar IED con el propósito de establecer filiales, fábricas o centros de distribución en nuevos mercados, expandiendo así su presencia global y diversificando sus fuentes de ingresos.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/11.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Tercer tema
                p.mb-0 Entre los beneficios de la IED se encuentran la creación de empleo, el desarrollo de infraestructura, la transferencia de tecnología y la mejora en la competitividad de la economía receptora.
    
    p.mb-4 Ahora, conozcamos algunos tipos de inversión:

    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/12.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          p(numero="1" titulo="inversión extranjera directa") La inversión extranjera directa puede adoptar diferentes formas, según el grado de control y la estructura de la transacción. Una de las modalidades más comunes es la creación de nuevas empresas o “greenfield investment”, donde una empresa extranjera establece desde cero, una filial en otro país, construyendo infraestructura y generando empleo local. Este tipo de inversión suele ser más beneficioso para la economía receptora, porque fomenta el desarrollo industrial y tecnológico. Otra forma de IED es la adquisición o fusión con empresas locales, donde una compañía extranjera compra una participación mayoritaria en una empresa ya existente. Esta estrategia permite acceder rápidamente a mercados locales y aprovechar la experiencia de las empresas establecidas, aunque puede generar preocupaciones sobre la pérdida de autonomía, de las industrias nacionales.
          p(numero="2" titulo="inversión de cartera 1") En contraste con la inversión extranjera directa, la inversión de cartera se caracteriza por la compra de activos financieros sin un control significativo sobre las empresas emisoras. Este tipo de inversión incluye la adquisición de acciones, bonos y otros instrumentos financieros emitidos por gobiernos o empresas extranjeras. A diferencia de la IED, la inversión de cartera no está vinculada a la gestión operativa de las empresas en las que se invierte, sino que se basa en la búsqueda de rentabilidad, a través del movimiento de los precios de los activos financieros. Este tipo de inversión puede ser una fuente importante de financiamiento para los países receptores, pero también puede generar volatilidad en los mercados financieros, si los inversionistas deciden retirar repentinamente, su capital, ante cambios en las condiciones económicas o políticas.
          p(numero="3" titulo="inversión de cartera 2") La inversión de cartera se ha visto impulsada en las últimas décadas por la digitalización de los mercados financieros y la liberalización del comercio de valores. Los inversionistas pueden comprar y vender activos en mercados internacionales con facilidad, lo que ha incrementado la interconexión entre los sistemas financieros globales. Sin embargo, esta movilidad del capital también puede generar riesgos, debido a que los países pueden enfrentar fugas de capital en momentos de crisis, lo que debilita sus monedas y dificulta la estabilidad macroeconómica. Por esta razón, algunos gobiernos han implementado mecanismos de regulación, para limitar el impacto de la inversión especulativa y fomentar la estabilidad financiera, a largo plazo.
    
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/13.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          p(numero="4" titulo="inversión en deuda soberana") Otro tipo de inversión internacional es la inversión en deuda soberana, que se refiere a la compra de bonos emitidos por gobiernos extranjeros. Los países emiten deuda en los mercados financieros para financiar proyectos de infraestructura, cubrir déficits fiscales o estabilizar sus economías. Los inversionistas compran estos bonos con la expectativa de recibir pagos periódicos de intereses y el reembolso del capital invertido, al vencimiento del instrumento. La rentabilidad de la deuda soberana está influenciada por la calificación de riesgo país, las tasas de interés internacionales y la estabilidad macroeconómica del país emisor. En general, los países con economías sólidas y baja percepción de riesgo, pueden emitir bonos con tasas de interés más bajas, mientras que aquellos con economías frágiles, deben ofrecer mayores rendimientos para atraer inversionistas.
          p(numero="5" titulo="inversión en bonos corporativos internacionales") La inversión en bonos corporativos internacionales, es donde las empresas emiten deuda en mercados extranjeros para financiar sus operaciones. Este tipo de inversión permite a las compañías acceder a capital a tasas competitivas y diversificar sus fuentes de financiamiento. Sin embargo, al igual que ocurre con la deuda soberana, la inversión en bonos corporativos está sujeta a los riesgos asociados con la estabilidad económica del país emisor y la solvencia de la empresa emisora.
        
    .bg-full-width.bg-color-18.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/14.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Un aspecto clave de la inversión internacional, es el papel de los fondos de inversión y fondos soberanos, que administran grandes volúmenes de capital y canalizan recursos hacia distintos mercados. 

    TabsC.color-acento-botones.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Fondos de inversión" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Fondos de inversión
            p Permiten a los inversionistas individuales o institucionales, diversificar sus portafolios mediante la compra de participaciones en un conjunto de activos internacionales.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/15.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Fondos soberanos" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Fondos soberanos
            p Son entidades estatales que gestionan los excedentes fiscales de un país y los invierten en activos internacionales para generar rendimientos a largo plazo. Países con grandes reservas de divisas, como Noruega, China y Arabia Saudita, han utilizado fondos soberanos para invertir en sectores estratégicos y garantizar la estabilidad financiera de sus economías.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/16.png', alt='')
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/17.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0 En el contexto actual, las inversiones internacionales están experimentando transformaciones significativas debido a factores como la digitalización de los mercados, la adopción de criterios ambientales, sociales y de gobernanza (ESG) y la creciente influencia de la geopolítica en las decisiones de inversión. Cada vez más inversionistas están priorizando proyectos que cumplen con estándares de sostenibilidad, lo que ha impulsado el crecimiento de las inversiones en energías renovables, infraestructura verde y tecnologías limpias. Asimismo, las tensiones comerciales y las políticas proteccionistas en distintas regiones del mundo, han generado incertidumbre en los mercados, afectando la distribución del capital internacional.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/18.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-16.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Los diferentes tipos de inversión internacional desempeñan un papel clave en la integración económica global y en la generación de oportunidades de desarrollo para los países receptores. La inversión extranjera directa fomenta el crecimiento productivo y tecnológico, mientras que la inversión de cartera proporciona liquidez a los mercados financieros. Sin embargo, la volatilidad de los flujos de capital y los riesgos asociados a la especulación financiera, representan desafíos que deben ser gestionados mediante políticas económicas y regulaciones adecuadas. La evolución de las inversiones internacionales continuará moldeando la economía global, influenciada por avances tecnológicos, cambios regulatorios y la creciente importancia de la sostenibilidad en la toma de decisiones financieras.
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Factores que afectan los flujos de capital internacional

    p.mb-4 Los flujos de capital internacional son fundamentales para el financiamiento y el crecimiento económico de los países, pero están influenciados por múltiples factores que determinan su comportamiento.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0.order-2
            h2.mb-4(data-aos="flip-up") Factores que afectan los flujos de capital internacional
            p.mb-4(data-aos="fade-right") En el PDF <b>Factores que afectan los flujos de capital internacional</b>, se analizan elementos como la política monetaria, la estabilidad política, la percepción del riesgo y la sostenibilidad, que inciden en la entrada y salida de capitales. Este material proporciona una visión integral para comprender cómo estos flujos impactan la estabilidad financiera y el desarrollo global.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Factores que afectan los flujos de capital internacional.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/19.png', alt='')
    
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/6316 " target="_blank" rel="noopener noreferrer") Guerra-Bello, G. (2010). Inversión internacional y sistema tributario. Apuntes sobre los precios de transferencia entre partes relacionadas como estrategia fiscal. Estudios Socio-Jurídicos, 8(2), 9-25.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/70561 " target="_blank" rel="noopener noreferrer") Castillo Meneses, Y. (2015). El sesgo de debilidad a favor del inversionista extranjero: un límite a la responsabilidad internacional de las corporaciones transnacionales. Universidad de los Andes. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://dialnet.unirioja.es/descarga/articulo/6302481.pdf" target="_blank" rel="noopener noreferrer") Fernández Rozas, J. C. (2010). Regulación versus desregulación internacional de los mercados financieros. Agenda Internacional, XVII(28), 197-216.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=rJvaD5dgfHI" target="_blank" rel="noopener noreferrer") Administración UAM Azcapotzalco. (2021). Inversión extranjera directa y Actividad económica, un análisis para América Latina [video]. YouTube.  
            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=nU56mYqT6Ts " target="_blank" rel="noopener noreferrer") CEDU Uninorte. (2021). Negocios Internacionales y Competitividad: Módulo 5 - IED horizontal [video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
