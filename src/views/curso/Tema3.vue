<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Retos y oportunidades de la política comercial internacional'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    
    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Principales retos de la política comercial


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/59799 " target="_blank" rel="noopener noreferrer") Urquizu Cavallé, Á. (2013). La inversión empresarial en la República de Panamá: sistema tributario, plataformas jurídicas y convenios para evitar la doble imposición internacional. J.M. BOSCH EDITOR. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/71448 " target="_blank" rel="noopener noreferrer") Peña Castellanos, L. (2011). De la economía internacional: compilación 2010. Editorial Universitaria.   


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.wto.org/spanish/res_s/booksp_s/anrep_s/wtr07-2b_s.pdf " target="_blank" rel="noopener noreferrer") Organización Mundial del Comercio (OMC). (2007). La economía y la economía política de la política comercial. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.economia.gob.mx/files/gobmx/librosblancos/Libro%20Blanco%20Pol%C3%ADtica%20Comercial%20Internacional%202013-2018_Sin%20Anexos.pdf " target="_blank" rel="noopener noreferrer") LIBRO BLANCO DE LA POLÍTICA COMERCIAL INTERNACIONAL 2013-2018  Secretaría de Economía de México. (2018). Política comercial internacional 2013-2018.


 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=-YwqFtWzGqc" target="_blank" rel="noopener noreferrer") Heri Gutierrez Garcia. (2021). Procesos de Integración Económica [video]. YouTube.  


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=_FNm3u_KnzQ " target="_blank" rel="noopener noreferrer") Universidad Icesi. (2024). Democracia e integración regional en América Latina: retos y oportunidades [video]. YouTube. 







          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
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
              '¿Cuál de las siguientes afirmaciones describe mejor el concepto de política comercial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Es el conjunto de estrategias y regulaciones que rigen el comercio de un país con el resto del mundo.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Es la eliminación de cualquier tipo de control sobre el comercio exterior.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Se refiere solo a la protección de la industria nacional.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Es una estrategia utilizada solo por los países en desarrollo.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La política comercial incluye medidas como aranceles, acuerdos internacionales y regulaciones que afectan el comercio exterior.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué diferencia a un tratado de libre comercio de una unión aduanera?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Un tratado de libre comercio permite el comercio sin aranceles entre los países miembros, pero cada país mantiene su propia política comercial frente a terceros.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'Una unión aduanera no elimina aranceles entre sus miembros.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'En un tratado de libre comercio, los países adoptan una moneda común.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Una unión aduanera es solo un acuerdo bilateral, mientras que un tratado de libre comercio involucra a múltiples países.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'En una unión aduanera, además de eliminar aranceles entre los miembros, se establece una política comercial común frente a terceros países.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué ocurre si un país aumenta significativamente sus aranceles a la importación?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Los consumidores pueden enfrentar precios más altos por productos importados.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Se reducen automáticamente las exportaciones del país.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Se fomenta la competencia con productos extranjeros.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'La economía del país mejora sin generar consecuencias negativas.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Un aumento en los aranceles encarece los bienes importados, lo que puede afectar el poder adquisitivo de los consumidores y generar tensiones comerciales.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál es uno de los principales retos de la política comercial internacional en la actualidad?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'La falta de acuerdos comerciales entre países.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La necesidad de equilibrar la protección de la industria nacional con la apertura comercial.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'La eliminación total de las barreras arancelarias en todos los sectores.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'La imposibilidad de regular el comercio debido a la globalización.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'Los gobiernos deben encontrar un balance entre proteger su economía interna y participar en acuerdos comerciales que faciliten el crecimiento económico.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué organismo internacional supervisa el cumplimiento de las normas del comercio global?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Banco Mundial (BM).',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Organización Mundial del Comercio (OMC).',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Fondo Monetario Internacional (FMI).',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Organización de las Naciones Unidas (ONU).',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              'La OMC es el organismo encargado de regular y supervisar el comercio internacional, asegurando que los países cumplan con las normativas establecidas en los acuerdos comerciales.',
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
