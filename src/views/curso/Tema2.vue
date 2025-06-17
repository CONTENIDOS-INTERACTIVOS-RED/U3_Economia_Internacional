<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Tipo de cambio y riesgo cambiario'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 El tipo de cambio y el riesgo cambiario son elementos fundamentales en las finanzas internacionales, ya que influyen directamente en la inversión, el comercio exterior y la estabilidad económica.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Tipo de cambio y riesgo cambiario
            p.mb-4(data-aos="fade-right") En el PDF <b>Tipo de cambio y riesgo cambiario</b>, se analizan los factores que afectan la variación de las monedas, los distintos regímenes cambiarios y las estrategias para mitigar el impacto de la volatilidad en las operaciones globales. Este material proporciona herramientas claves para comprender y gestionar los desafíos que plantea un entorno financiero internacional en constante cambio.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Tipo de cambio y riesgo cambiario.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/1.png', alt='')
   
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Concepto y clasificación de tipo de cambio

    .bg-full-width.bg-color-3
      .p-4.p-md-5
        .row.mb-5.justify-content-center
          .col-md-6.col-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/2.svg", data-aos="zoom-in")
          .col-lg-10
            p El tipo de cambio es un elemento central en la economía internacional, dado que determina el valor de una moneda en relación con otra y afecta directamente la competitividad de un país en los mercados globales. Se define como el precio de una moneda, expresado en términos de otra, estableciendo la cantidad de una divisa que se necesita para obtener una unidad de otra. Esta variable es fundamental para la dinámica del comercio exterior, la inversión internacional y la estabilidad macroeconómica, puesto que influye en la rentabilidad de las exportaciones e importaciones, en la atracción de capital extranjero y en la gestión de la deuda externa de los países.
            p El tipo de cambio es determinado por la oferta y la demanda de divisas en los mercados internacionales.
        
        .row.justify-content-center.align-items-stretch
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Primero
                p.mb-0 La <b>demanda</b> de una moneda aumenta cuando los inversionistas extranjeros desean adquirir bienes, servicios o activos financieros, de un país.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema2/4.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Segundo
                p.mb-0 La <b>oferta</b> de una moneda se incrementa cuando los residentes de ese país necesitan divisas extranjeras para importar productos, invertir en el exterior o pagar compromisos financieros internacionales.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white A medida que estas fuerzas cambian, el tipo de cambio fluctúa, afectando la competitividad de los productos nacionales y la estabilidad financiera de los mercados.
    
    p.mb-4 Existen diferentes regímenes cambiarios que los países adoptan para gestionar la variabilidad de sus monedas. Cada uno de estos sistemas tiene ventajas y desventajas, dependiendo del contexto económico y de los objetivos de política monetaria de cada nación. Entre los principales tipos de tipo de cambio, se encuentran:

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/6.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          p(numero="1" titulo="Tipo de cambio fijo") Es aquel en el que el valor de una moneda se mantiene estable con respecto a otra divisa o a una cesta de monedas, debido a la intervención directa del banco central. En este sistema, el gobierno se compromete a mantener un valor determinado para su moneda y debe utilizar sus reservas internacionales para intervenir en el mercado de divisas y evitar fluctuaciones. Este régimen se utiliza principalmente en economías que buscan estabilidad en el comercio exterior y en los flujos de inversión, porque proporciona previsibilidad en los costos de importación y exportación. Sin embargo, un tipo de cambio fijo puede ser difícil de mantener, si la economía enfrenta desequilibrios en su balanza de pagos o si las reservas internacionales del país son insuficientes para sostener el valor artificial de la moneda. En situaciones de crisis, los gobiernos pueden verse obligados a realizar devaluaciones abruptas, lo que genera inestabilidad financiera y desconfianza en los mercados.
          p(numero="2" titulo="Tipo de cambio flotante") Es aquel en el que el valor de la moneda es determinado libremente por las fuerzas del mercado, es decir, por la oferta y la demanda de divisas. En este régimen, el banco central no interviene de manera directa para estabilizar la moneda, sino que permite que su valor fluctúe en función de factores macroeconómicos como la inflación, las tasas de interés, la inversión extranjera y la percepción de riesgo país. La principal ventaja de este sistema, es que permite que el tipo de cambio se ajuste automáticamente a los cambios en la economía global, evitando crisis cambiarias y reduciendo la necesidad de mantener grandes reservas internacionales. Sin embargo, la principal desventaja es que puede generar volatilidad, afectando la estabilidad de los precios y dificultando la planificación financiera de las empresas y los inversionistas. En momentos de incertidumbre económica o crisis internacionales, los tipos de cambio flotantes pueden sufrir oscilaciones bruscas, lo que incrementa el riesgo cambiario para las empresas y los gobiernos.
          p(numero="3" titulo="Tipo de cambio mixto o intervenido") Es aquél en el cual el gobierno permite que la moneda fluctúe dentro de ciertos límites, pero interviene en el mercado cuando considera que las variaciones pueden afectar la estabilidad económica del país. En este sistema, el banco central puede comprar o vender divisas para evitar fluctuaciones excesivas y mantener cierto grado de control sobre la moneda. Este régimen es utilizado en países que buscan aprovechar las ventajas del tipo de cambio flotante sin exponerse a una volatilidad extrema. No obstante, el éxito de este enfoque depende de la capacidad del banco central para administrar adecuadamente su política cambiaria y de la confianza que los mercados tengan en la estabilidad de la economía nacional.
    
    p.mb-4 La elección de un régimen cambiario depende de múltiples factores, incluyendo:

    .bg-full-width.bg-color-3
      .p-4.p-md-5
        .row.justify-content-center.align-items-stretch.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-16.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 El grado de apertura económica de un país.
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-16.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 La estabilidad de su sistema financiero.
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-16.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Su nivel de reservas internacionales.
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-16.p-4(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto
                  img(src="@/assets/curso/tema2/10.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Sus objetivos de política monetaria. 
    
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/11.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") En economías emergentes, donde la volatilidad de los mercados financieros puede ser alta, muchos gobiernos optan por regímenes mixtos para mitigar los efectos de las fluctuaciones abruptas en el tipo de cambio. En contraste, economías avanzadas con mercados financieros sólidos, pueden permitir un régimen de tipo de cambio flotante, sin mayores riesgos para la estabilidad económica.
    
    .row.mb-5
      .col-lg-3.order-2
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-9.order-1.mb-3.mb-lg-0
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          p.mb-0(data-aos="fade-left") El impacto del tipo de cambio en la economía es significativo, debido a que afecta tanto a los sectores productivos como a los consumidores. Una apreciación de la moneda nacional encarece las exportaciones y reduce su competitividad en los mercados internacionales, pero abarata las importaciones, beneficiando a los consumidores y reduciendo la inflación. Por el contrario, una depreciación de la moneda nacional puede impulsar las exportaciones al hacer que los bienes sean más accesibles para compradores extranjeros, pero también puede encarecer los productos importados, aumentando los costos para los consumidores y generando presiones inflacionarias.
        
        p.mb-0 El estudio del tipo de cambio es crucial en el análisis de las finanzas internacionales, dado que influye en las decisiones de inversión, en la política monetaria de los gobiernos y en la estabilidad macroeconómica de los países. La gestión eficiente de los regímenes cambiarios permite mitigar riesgos y aprovechar oportunidades en el comercio global, asegurando un equilibrio en la competitividad económica y en la confianza de los mercados financieros.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-16.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Esto es un factor determinante en la economía internacional y puede gestionarse a través de diferentes regímenes cambiarios, dependiendo de las necesidades y condiciones de cada país. Mientras que los sistemas de tipo de cambio fijo buscan estabilidad y previsibilidad, los sistemas flotantes permiten ajustes dinámicos a las condiciones del mercado. 
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/13.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") La elección del régimen cambiario adecuado, es una decisión estratégica que afecta la competitividad económica, la inversión extranjera y la estabilidad financiera de una nación, en un entorno globalizado. La comprensión de estas dinámicas es esencial para diseñar políticas económicas que fomenten el crecimiento y minimicen los riesgos asociados a la volatilidad cambiaria.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Factores que influyen en el tipo de cambio
    
    p El tipo de cambio es una variable económica dinámica y su valor se ve afectado por múltiples factores que pueden generar apreciación o depreciación de una moneda, en relación con otras divisas. Estos factores pueden ser de origen económico, político o externo y tienen un impacto directo en la estabilidad macroeconómica de un país, en la competitividad de sus exportaciones y en la confianza de los inversionistas internacionales. Comprender estos determinantes, es clave para analizar la volatilidad del mercado de divisas y anticipar los efectos de las fluctuaciones cambiarias en la economía global. 
    p Conozcamos estos factores:

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/14.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          p(numero="1" titulo="La inflación") La relación entre la inflación y el valor de una moneda es directa, puesto que cuando un país experimenta un alto nivel de inflación en comparación con sus socios comerciales, su moneda tiende a depreciarse. Esto se debe a que la inflación reduce el poder adquisitivo del dinero, generando una menor demanda de la moneda local en los mercados internacionales. Los inversionistas prefieren monedas de economías con inflación baja y estable, porque esto les proporciona mayor seguridad en términos de retorno real, sobre sus inversiones. Por el contrario, si un país logra mantener una inflación controlada, su moneda se mantiene relativamente estable y competitiva en los mercados financieros.
          p(numero="2" titulo="Tasas de interés") Establecidas por los bancos centrales, son otro determinante fundamental del tipo de cambio. Cuando un país incrementa sus tasas de interés, los inversionistas extranjeros tienen mayor incentivo para comprar activos denominados en esa moneda, ya que les ofrece un mayor rendimiento sobre sus inversiones. Este aumento en la demanda de la divisa, fortalece su valor en el mercado internacional. Por el contrario, cuando un banco central reduce las tasas de interés, el atractivo de la moneda disminuye, lo que puede llevar a su depreciación. La política monetaria juega un papel crucial en la determinación de las tasas de interés y, en consecuencia, en la evolución del tipo de cambio. Los bancos centrales, a través de sus decisiones sobre tasas de referencia, buscan mantener un equilibrio entre crecimiento económico, inflación y estabilidad cambiaria.
          p(numero="3" titulo="Balanza de pagos") La balanza de pagos, que representa el registro de todas las transacciones económicas de un país con el resto del mundo. Si un país tiene un superávit en su balanza de pagos, significa que sus exportaciones superan a sus importaciones, lo que genera una mayor demanda por su moneda y, en consecuencia, una apreciación de la misma. En cambio, si un país presenta un déficit comercial, su moneda puede debilitarse, dado que necesita adquirir divisas extranjeras para financiar sus importaciones. La balanza de pagos no solo depende del comercio de bienes y servicios, sino también de los flujos de inversión y las transferencias internacionales de capital.
    
    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/15.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          p(numero="4" titulo="Nivel de deuda externa") El nivel de deuda externa de un país, también tiene un impacto significativo en el tipo de cambio. Si una nación tiene una elevada deuda en moneda extranjera, puede generar incertidumbre en los mercados financieros y afectar la confianza de los inversionistas. Un alto nivel de endeudamiento puede indicar que el país tiene dificultades para cumplir con sus obligaciones financieras, lo que aumenta la percepción de riesgo y reduce la demanda por su moneda. En estos casos, la moneda local tiende a depreciarse, especialmente si el gobierno no cuenta con suficientes reservas internacionales para respaldar su estabilidad financiera. En contraste, países con niveles de deuda controlados y sostenibles, suelen gozar de mayor estabilidad cambiaria, puesto que los inversionistas perciben un menor riesgo asociado a sus economías.
          p(numero="5" titulo="Expectativas del mercado y la percepción de riesgo") Estas también influyen en la fluctuación del tipo de cambio. Los inversionistas toman decisiones con base en la estabilidad política, económica y social de un país, lo que impacta la confianza en su moneda. Si existe incertidumbre respecto a la solidez del sistema financiero o se anticipa una crisis económica, los inversionistas tienden a retirar sus capitales, lo que provoca una devaluación de la moneda. De manera similar, eventos como elecciones, conflictos geopolíticos, cambios en políticas económicas o crisis internacionales, pueden generar volatilidad en los mercados cambiarios y afectar la demanda de una divisa en particular.
          p(numero="6" titulo="Comercio internacional y la apertura económica") El comercio internacional y la apertura económica de un país, también desempeñan un papel clave en la determinación del tipo de cambio. Los países con una economía abierta y un sector exportador fuerte, tienden a atraer mayor inversión extranjera y a generar demanda por su moneda, lo que contribuye a su apreciación. Por el contrario, economías altamente dependientes de importaciones, pueden experimentar presiones devaluatorias en su moneda si su balanza comercial no es favorable. La estructura de comercio de cada país, la diversificación de su producción y su competitividad en el mercado global determinan, en gran medida, el comportamiento de su tipo de cambio.
          p(numero="7" titulo="Flujos de inversión extranjera directa y de inversión de cartera") Estos también afectan la cotización de una moneda en los mercados internacionales. Cuando los inversionistas extranjeros compran activos financieros en un país, como acciones, bonos o inmuebles, necesitan adquirir la moneda local, lo que impulsa su apreciación. Sin embargo, si la confianza en la economía se deteriora o si surgen mejores oportunidades en otros mercados, los inversionistas pueden retirar su capital, provocando una depreciación de la divisa. La estabilidad macroeconómica y la calidad del entorno regulatorio, son factores claves para atraer y retener inversión extranjera, lo que a su vez influye en la estabilidad del tipo de cambio.
    
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/16.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Los bancos centrales y los gobiernos pueden intervenir en los mercados de divisas para influir en la cotización de su moneda. A través de la compra o venta de reservas internacionales, los bancos centrales pueden suavizar fluctuaciones excesivas y estabilizar el tipo de cambio. En algunas economías, los gobiernos también implementan políticas cambiarias que buscan mantener la competitividad de sus exportaciones mediante la devaluación controlada de la moneda. Sin embargo, la intervención excesiva en los mercados cambiarios, puede generar distorsiones y provocar conflictos comerciales con otros países.
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-18.p-4.h-100(data-aos="fade-left")
          p.mb-0.text-white Es una variable altamente influenciada por múltiples factores económicos, financieros y políticos. La inflación, las tasas de interés, la balanza de pagos, el nivel de deuda, la percepción de riesgo y los flujos de inversión internacional, son algunos de los principales determinantes de la cotización de una moneda en los mercados financieros globales. La interacción de estos factores genera movimientos en los mercados de divisas, afectando el comercio exterior, la competitividad de las economías y la estabilidad macroeconómica. Para los gobiernos y los bancos centrales, comprender y gestionar estos factores, es crucial para implementar políticas económicas que favorezcan el crecimiento sostenible y la estabilidad financiera, en un entorno global cada vez más interconectado.

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Gestión del riesgo cambiario

    p.mb-4 La gestión del riesgo cambiario es clave para reducir la exposición a pérdidas generadas por la volatilidad en los tipos de cambio en un entorno financiero global.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Gestión del riesgo cambiario
            p.mb-4(data-aos="fade-right") En el PDF <b>Gestión del riesgo cambiario</b>, se presentan estrategias como coberturas financieras, diversificación de mercados, intervención gubernamental y planificación empresarial, que permiten mitigar los efectos adversos de las fluctuaciones monetarias. Este material ofrece herramientas esenciales para fortalecer la estabilidad económica y la competitividad en contextos internacionales.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Gestión del riesgo cambiario.
    
          .col-lg-5.mb-3.mb-lg-0.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/18.png', alt='')




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/131885 " target="_blank" rel="noopener noreferrer") Tamayo Saborit, M. & Gonzalez Capote, D. (2020). La gestión de riesgos: herramienta estratégica de gestión empresarial. Editorial Universo Sur.   

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/227434" target="_blank" rel="noopener noreferrer") Bertrán Jordana, J. & Gracia Ramos, M. C. (2019). Instrumentos financieros derivados y gestión del riesgo. Delta Publicaciones.   
 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/170138" target="_blank" rel="noopener noreferrer") Olivo, S. Perossa, M. & Tapia, G. N. (2015). Examen del riesgo del negocio: el plus para una gestión equilibrada. Delta Publicaciones.  



            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=okQ0IHdFKi8" target="_blank" rel="noopener noreferrer") Universidad Continental. (2021). Tipos de cambio [video]. YouTube.  
            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=_ssCo38i1EI" target="_blank" rel="noopener noreferrer") EUDE Business School. (2021). 20150218 MASTERCLASS Tipologías de Riesgo en los mercados financieros Enrique Ballesta [video]. YouTube.  





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
