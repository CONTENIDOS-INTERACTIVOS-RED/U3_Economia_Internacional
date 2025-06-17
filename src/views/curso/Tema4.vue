<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Desafíos globales en las finanzas internacionales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 Los desafíos globales en las finanzas internacionales, reflejan la complejidad de un sistema económico interconectado, en constante transformación.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Desafíos globales en las finanzas internacionales
            p.mb-4(data-aos="fade-right") En el PDF <b>Desafíos globales en las finanzas internacionales</b>, se abordan temas como la regulación financiera, la digitalización, la sostenibilidad, la desigualdad y la gestión de la deuda, con el fin de comprender los riesgos y oportunidades que enfrentan los países, en el contexto actual. Este material ofrece una visión crítica y actualizada para analizar la estabilidad y resiliencia del sistema financiero global.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Desafíos globales en las finanzas internacionales.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/1.png', alt='')
    
    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Crisis financieras y su impacto en la economía global

    p.mb-4 Las crisis financieras han sido una característica recurrente en la historia de la economía global y han tenido impactos devastadores en el crecimiento, el empleo y la estabilidad social de los países afectados. Estas crisis pueden surgir por diversas razones, incluyendo la especulación excesiva, la falta de regulación financiera, el endeudamiento insostenible y los desequilibrios en los mercados internacionales. A lo largo del tiempo, se han identificado diferentes tipos de crisis financieras, como las crisis bancarias, las crisis de deuda soberana y las crisis cambiarias, cada una con consecuencias económicas distintas pero interconectadas:

    .row.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/2.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large-2(data-aos="fade-left")
          p(numero="1" titulo="La crisis bancaria") Ocurre cuando el sistema financiero de un país experimenta una pérdida masiva de confianza por parte de los depositantes y prestamistas, lo que lleva al colapso de los bancos y a la restricción del crédito. En estos casos, los bancos pueden enfrentar problemas de liquidez e insolvencia debido a la acumulación de activos de alto riesgo o a la falta de fondos para respaldar sus operaciones. Un ejemplo de crisis bancaria es la Gran Depresión de 1929, que comenzó con la caída del mercado de valores en Estados Unidos y se propagó a nivel mundial, causando quiebras bancarias masivas, deflación y un desempleo sin precedentes. En situaciones como esta, la falta de confianza en el sistema financiero puede generar una corrida bancaria, en la que los clientes retiran su dinero de los bancos de manera masiva, agravando la crisis.
          p(numero="2" titulo="La crisis de deuda soberana") Ocurre cuando un país no puede cumplir con sus obligaciones de pago de deuda externa o interna, lo que genera inestabilidad en los mercados financieros y desconfianza entre los inversionistas. Estas crisis suelen estar relacionadas con déficits fiscales elevados, políticas económicas insostenibles y el uso excesivo de financiamiento externo. Un ejemplo significativo de este tipo de crisis es la crisis de la deuda en América Latina, durante la década de 1980, cuando muchos países de la región, como México, Argentina y Brasil, se endeudaron en dólares a tasas de interés variables y luego enfrentaron dificultades para pagar sus obligaciones, tras un aumento en las tasas internacionales de interés. Como consecuencia, estas economías entraron en recesión, sufrieron devaluaciones monetarias y enfrentaron períodos prolongados de estancamiento económico.
          p(numero="3" titulo="La crisis cambiaria") Ocurre cuando la moneda de un país experimenta una devaluación repentina y significativa, lo que afecta la confianza de los inversionistas y provoca salidas masivas de capital. Estas crisis pueden ser el resultado de políticas económicas mal gestionadas, déficits en la balanza de pagos o ataques especulativos en los mercados de divisas. Un ejemplo de crisis cambiaria es la crisis financiera asiática de 1997, en la que varios países del sudeste asiático, como Tailandia, Indonesia y Corea del Sur, vieron cómo sus monedas colapsaban debido a la fuga de capitales y a la especulación en los mercados de divisas. Esta crisis afectó gravemente sus economías, causando una profunda recesión y un aumento en la pobreza y el desempleo.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Crisis financieras y su impacto en la economía global
            p.mb-4(data-aos="fade-right") En el PDF <b>Crisis financieras y su impacto en la economía global</b>, se analizan las causas, efectos y respuestas frente a crisis como la del 2008, así como los mecanismos internacionales diseñados para prevenir y mitigar sus consecuencias. Este material ofrece una comprensión integral sobre cómo estas crisis se propagan y transforman el panorama económico mundial.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Crisis financieras y su impacto en la economía global.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/3.png', alt='')
    
    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] Regulación financiera internacional
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/4.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-18.p-4.mb-3(data-aos="fade-left")
          p.mb-0.text-white La regulación financiera internacional es un pilar fundamental para la estabilidad económica global, dado que establece normas y mecanismos para supervisar el sistema financiero y prevenir crisis económicas. A medida que los mercados financieros se han globalizado y las transacciones transfronterizas han aumentado, la necesidad de una regulación efectiva, se ha vuelto más evidente. La falta de supervisión adecuada, ha sido un factor clave en muchas crisis financieras, lo que ha llevado a la creación de instituciones y normativas internacionales, destinadas a minimizar los riesgos y promover la transparencia en los mercados.

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/5.svg", data-aos="zoom-in")
      .col-lg-9
        .bg-color-15.p-5.mb-3(data-aos="fade-left")
          p.mb-0 El objetivo principal de la regulación financiera internacional es garantizar la estabilidad del sistema financiero mundial, prevenir la toma de riesgos excesivos por parte de instituciones financieras y proteger a los inversionistas y consumidores.
    
    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema4/6.svg", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        .bg-color-16.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Para lograr esto, se han desarrollado diversas normas y organismos que supervisan el cumplimiento de las regulaciones en diferentes países. Entre las entidades más importantes en este ámbito se encuentran el Fondo Monetario Internacional (FMI), el Banco Mundial, el Banco de Pagos Internacionales (BPI) y el Consejo de Estabilidad Financiera (FSB, por sus siglas en inglés).

    p.mb-4  Estas instituciones <b>trabajan en conjunto con los gobiernos y los bancos centrales</b> para diseñar políticas y regulaciones que reduzcan la probabilidad de crisis financieras y fomenten el crecimiento económico sostenible.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0.order-2
            h2.mb-4(data-aos="flip-up") Regulación financiera internacional
            p.mb-4(data-aos="fade-right") En el PDF <b>Regulación financiera internacional</b>, se analizan los principales organismos, estándares y desafíos asociados a la supervisión bancaria, la prevención de delitos financieros y la adaptación a nuevas tecnologías. Este material ofrece una visión integral sobre cómo las regulaciones buscan equilibrar la estabilidad, la innovación y la cooperación entre países, en un entorno financiero en constante evolución.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_8.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Regulación financiera internacional.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/7.png', alt='')
    
    #t_4_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.3] Retos del crecimiento económico en un entorno globalizado
    
    p.mb-4 El crecimiento económico en un entorno globalizado, plantea numerosos retos que exigen respuestas coordinadas y sostenibles por parte de los países.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Retos del crecimiento económico en un entorno globalizado
            p.mb-4(data-aos="fade-right") En el PDF <b>Retos del crecimiento económico en un entorno globalizado</b>, se abordan temas como la desigualdad, la automatización, el cambio climático, el proteccionismo y el acceso al financiamiento, que afectan la estabilidad y equidad del desarrollo económico mundial. Este material ofrece una mirada integral sobre cómo enfrentar estos desafíos para construir economías más resilientes, inclusivas y sostenibles.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_9.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Retos del crecimiento económico en un entorno globalizado.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/8.png', alt='')

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/68398" target="_blank" rel="noopener noreferrer") Pérez Barbeito, J. (2014). Finanzas internacionales: cómo gestionar los riesgos financieros internacionales. Editorial Universidad de Santiago de Chile.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/39382 " target="_blank" rel="noopener noreferrer") Cue Mancera, A. (2015). Economía internacional. Grupo Editorial Patria.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/221247 " target="_blank" rel="noopener noreferrer") Tassara, C. (2016). Cooperación internacional para el desarrollo: gobierno, economía y sociedad. Evolución de las políticas y escenarios futuros. Universidad de La Salle - Ediciones Unisalle.  

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.oecd.org/content/dam/oecd/es/publications/reports/2012/11/economic-globalisation_g1g134da/9789264226272-es.pdf " target="_blank" rel="noopener noreferrer") Huwart, J. & Verdier, L. (2015). Globalización Económica. Orígenes y consecuencias.  OECD Publicaciones.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=yU-w8ciTlf8 " target="_blank" rel="noopener noreferrer") Secretos del Dinero. (2025). Crisis Económica 2025: ¿Estamos al Borde del Colapso Financiero? | Recesión Mundial [video]. YouTube. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=WeFoumD6Fpc " target="_blank" rel="noopener noreferrer") Mundo Empresarial. (2020). ¿De qué depende el crecimiento económico de un país? Concepto [video]. YouTube. 


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Qué sucede cuando un país tiene un déficit en su balanza comercial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Exporta más bienes de los que importa.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Importa más bienes de los que exporta.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Su moneda se fortalece automáticamente.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'No tiene impacto en la economía.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Un déficit comercial indica que un país está comprando más bienes y servicios del extranjero de los que está vendiendo, lo que puede generar dependencia financiera externa.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es una de las principales funciones del mercado de divisas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Determinar el valor de las monedas y facilitar el comercio internacional.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Regular el comercio interior de los países.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Establecer los precios de los bienes de consumo.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Controlar la inflación en los mercados locales.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'El mercado de divisas permite el intercambio de monedas entre países, lo que influye en las exportaciones, importaciones e inversiones internacionales.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué efecto tiene una apreciación de la moneda de un país en su comercio internacional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aumenta la competitividad de sus exportaciones.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reduce la demanda de productos importados.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Hace que las exportaciones sean más costosas y las importaciones más baratas.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'No afecta el comercio internacional.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Cuando una moneda se aprecia, los productos nacionales se encarecen para los compradores extranjeros, reduciendo las exportaciones. Al mismo tiempo, los productos importados se abaratan, lo que puede aumentar la demanda de bienes extranjeros.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué sucede cuando los mercados financieros internacionales experimentan una crisis económica global?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Se incrementa la estabilidad de los mercados y el acceso al crédito.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Las inversiones extranjeras aumentan debido a la confianza en la economía.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Se genera volatilidad en los mercados y puede haber fuga de capitales.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'No hay impacto en la economía de los países en desarrollo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Las crisis financieras generan incertidumbre y afectan la confianza de los inversionistas, lo que puede provocar una salida masiva de capitales, inestabilidad en los mercados y devaluación de monedas.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de las siguientes estrategias puede aplicar un país para atraer inversión extranjera directa (IED)?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Implementar políticas fiscales y regulatorias favorables para los inversionistas.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Aumentar la burocracia y los impuestos sobre la inversión extranjera.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Prohibir la entrada de empresas extranjeras al mercado nacional.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Reducir la inversión en infraestructura y desarrollo tecnológico.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Los países que buscan atraer inversión extranjera suelen ofrecer incentivos fiscales, reducir barreras burocráticas y mejorar su infraestructura, lo que genera confianza y promueve el crecimiento económico.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
