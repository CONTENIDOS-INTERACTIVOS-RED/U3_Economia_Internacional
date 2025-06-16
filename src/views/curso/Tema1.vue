<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Mercados financieros internacionales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 Los mercados financieros internacionales son una pieza clave en la dinámica económica global, ya que permiten movilizar capital entre países, impulsando el comercio, la inversión y el desarrollo.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Mercados financieros internacionales
            p.mb-4(data-aos="fade-right") En el PDF <b>Mercados financieros internacionales</b>, se analiza su funcionamiento, evolución, actores principales y los desafíos que enfrentan ante la volatilidad y la transformación digital, brindando una visión integral sobre su papel en la estabilidad y el crecimiento económico mundial.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Mercados financieros internacionales.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/1.png', alt='')
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Características y funciones de los mercados financieros internacionales
    
    .row.mb-5.justify-content-center.align-items-end
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-10
        .bg-color-7.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Los mercados financieros internacionales son una estructura fundamental en la economía global, debido a que permiten la asignación eficiente de recursos a nivel mundial y facilitan la interacción entre distintos actores económicos, como gobiernos, bancos centrales, instituciones financieras, empresas y particulares. Estos mercados funcionan como plataformas donde se negocian activos financieros, incluyendo divisas, bonos, acciones, derivados y otros instrumentos que permiten la movilidad de capital, a través de las fronteras. La interconexión de estos mercados ha sido impulsada por la globalización y los avances tecnológicos, lo que ha permitido transacciones en tiempo real y una mayor integración entre las economías del mundo.
        p Entre las principales características de los mercados financieros internacionales, se encuentran:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Su alta liquidez
              p Lo que significa que los activos pueden comprarse y venderse con facilidad sin afectar significativamente su precio. Esta liquidez es esencial para la estabilidad del sistema financiero, dado que permite que los inversionistas ajusten sus portafolios y gestionen riesgos con mayor eficiencia. Además, estos mercados son altamente interdependientes, lo que significa que los acontecimientos en una región pueden tener efectos inmediatos, en otras partes del mundo. Por ejemplo, una crisis financiera en un país con una economía relevante, puede generar volatilidad en los mercados de capitales de otras naciones, afectando sus monedas, tasas de interés y niveles de inversión.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Su flexibilidad
              p Lo que permite la adaptación a cambios en las condiciones macroeconómicas, políticas y regulatorias. Los mercados pueden reaccionar rápidamente a factores como decisiones de política monetaria de los bancos centrales, cambios en las tasas de interés, fluctuaciones en los precios de las materias primas y tensiones geopolíticas. Esta capacidad de ajuste contribuye a la eficiencia del sistema financiero, pero también puede generar episodios de volatilidad extrema, especialmente en tiempos de incertidumbre económica.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/5.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Desde una perspectiva funcional, los mercados financieros internacionales desempeñan un papel esencial en la canalización del ahorro hacia la inversión productiva. A través de estos mercados, los recursos financieros de los inversionistas pueden dirigirse hacia empresas, gobiernos o proyectos que requieren financiamiento para su desarrollo y crecimiento. De esta manera, los mercados financieros permiten que el capital se distribuya de manera más eficiente, facilitando el desarrollo económico y el progreso tecnológico a nivel global.
    
        .bg-color-16.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Uno de los roles más importantes de estos mercados es la fijación de precios de activos financieros. Los precios de las acciones, bonos y otros instrumentos financieros, se determinan en función de la oferta y la demanda, reflejando las expectativas de los inversionistas sobre el rendimiento futuro de los activos y la estabilidad económica de los países emisores. 

    p Este mecanismo de fijación de precios permite que los mercados financieros sean una fuente clave de información para los actores económicos, puesto que reflejan la percepción de los inversionistas sobre el riesgo y las oportunidades en diferentes sectores y regiones.
    p.mb-4 Además, los mercados financieros internacionales:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Facilitan la provisión de liquidez
              p Lo que significa que permiten que los inversionistas conviertan sus activos, en efectivo, de manera rápida y eficiente. La disponibilidad de liquidez es fundamental para garantizar la estabilidad del sistema financiero y evitar crisis de confianza que puedan afectar el funcionamiento del mercado. En este sentido, las instituciones financieras juegan un papel clave al actuar como intermediarios que facilitan el acceso al crédito y a la inversión, en diferentes sectores de la economía.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 La gestión del riesgo financiero
              p Los participantes en los mercados financieros utilizan diversos instrumentos, como derivados, contratos de futuros y opciones, para protegerse contra fluctuaciones en los precios de los activos y los tipos de cambio. Estas herramientas permiten que las empresas y los inversionistas reduzcan la incertidumbre y minimicen pérdidas potenciales derivadas de cambios inesperados en las condiciones del mercado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Facilitan el acceso al financiamiento
              p Los mercados financieros internacionales, también facilitan el acceso al financiamiento para países, empresas e instituciones. A través de la emisión de bonos soberanos, los gobiernos pueden obtener recursos para financiar proyectos de infraestructura, educación, salud y otros sectores estratégicos. De igual manera, las empresas pueden emitir acciones o bonos corporativos en los mercados internacionales, para expandir sus operaciones y mejorar su competitividad global.
    
    p.mb-4 En cuanto a su estructura, los mercados financieros internacionales se dividen en diferentes segmentos, según el tipo de activo que se negocia:

    .bg-full-width.bg-fondo-1.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/10.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="13%" y="33.5%" numero="+")
                h5 1. El mercado de divisas
                p El mercado de divisas (Forex) es el más grande y líquido del mundo, permitiendo el intercambio de monedas extranjeras y la determinación de los tipos de cambio. 
    
              .bg-color-white.box-shadow.p-3(x="38%" y="17%" numero="+")
                h5 2. El mercado de capitales
                p El mercado de capitales incluye la compra y venta de acciones y bonos emitidos por empresas y gobiernos, mientras que el mercado interbancario facilita transacciones de corto plazo, entre bancos y otras entidades financieras. 
    
              .bg-color-white.box-shadow.p-3(x="87%" y="17%" numero="+")
                h5 3. Los mercados de derivados
                p Los mercados de derivados, permiten a los inversionistas y empresas, protegerse contra fluctuaciones en los precios de activos financieros y materias primas.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-18.p-4.h-100(data-aos="fade-left")
          p.mb-0.text-white Los mercados financieros internacionales, son fundamentales para el funcionamiento de la economía global, porque facilitan la asignación de recursos, la gestión del riesgo y el acceso al financiamiento. Su eficiencia y estabilidad dependen de diversos factores, como la regulación financiera, la política monetaria y la confianza de los inversionistas. A medida que la globalización avanza y los mercados se vuelven más interdependientes, el estudio y análisis de estos mercados se torna cada vez más relevante para comprender los desafíos y oportunidades que enfrenta la economía mundial.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Factores que influyen en los mercados financieros internacionales

    p.mb-4 Los mercados financieros internacionales están sujetos a la influencia de múltiples factores económicos, políticos y tecnológicos que determinan su comportamiento y estabilidad.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Factores que influyen en los mercados financieros internacionales
            p.mb-4(data-aos="fade-right") En el PDF <b>Factores que influyen en los mercados financieros internacionales</b>, se examinan elementos como la política monetaria, la confianza de los inversionistas, los eventos globales y el avance tecnológico, con el fin de comprender cómo estos influyen en la dinámica de los flujos de capital y la toma de decisiones financieras, a nivel global.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Factores que influyen en los mercados financieros internacionales.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/12.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/35695" target="_blank" rel="noopener noreferrer") Díez de Castro, L. T. (2008). Mercados financieros internacionales. Dykinson.  
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/170097  " target="_blank" rel="noopener noreferrer") García Estévez, P. (Coord.), Díez de Castro, L. T. (Coord.) & Alonso Conde, A. B. (2009). Mercados financieros internacionales. Delta Publicaciones. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/172852  " target="_blank" rel="noopener noreferrer") Fornt, X. (2020). El riesgo país y las garantías internacionales. Marge Books. 



            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://documents1.worldbank.org/curated/en/544001468276368721/pdf/378920REVISED0101OFFICIAL0USE0ONLY1.pdf  " target="_blank" rel="noopener noreferrer") de la Torre A., & Schmukler, S. L. (2008). Mercados de capitales emergentes y globalización. Banco Mundial-Mayol Ediciones.


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=3Choz1bF_XE " target="_blank" rel="noopener noreferrer") Brillante PRO. (2024). ¿Que son los Mercados Over-The-Counter (OTC)? [video]. YouTube. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=RxLEZ86ArQQ " target="_blank" rel="noopener noreferrer") Universidad Continental. (2021). Mercado de Divisas [video]. YouTube. 





 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
