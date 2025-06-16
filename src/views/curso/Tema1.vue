<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Teorías y estrategias de política comercial'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Concepto e importancia de la política comercial
    
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/51475 " target="_blank" rel="noopener noreferrer") Steinberg, F. (2012). La nueva teoría del comercio internacional y la política comercial estratégica. B - EUMED. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/50065 " target="_blank" rel="noopener noreferrer") Tugores Ques, J. (2005). Economía internacional. McGraw-Hill España. 

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Tratado_de_libre_comercio " target="_blank" rel="noopener noreferrer") Wikipedia. (2024). Tratado de libre comercio. Wikipedia, la enciclopedia libre.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repositorio.cepal.org/bitstream/handle/11362/44918/7/S1900748_es.pdf " target="_blank" rel="noopener noreferrer") Comisión Económica para América Latina y el Caribe (CEPAL). (2019). Perspectivas del comercio internacional de América Latina y el Caribe, 2019.


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=ssp3jLPYUss " target="_blank" rel="noopener noreferrer") ULLaudiovisual - Universidad de La Laguna. (2023). Los tratados internacionales [video]. YouTube. 


            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=PLt9ciUCNHU " target="_blank" rel="noopener noreferrer") WePWo. (2019). Video 10 | Tipos de acuerdos internacionales [video]. YouTube. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=GKEpP-8bTps " target="_blank" rel="noopener noreferrer") AceleraExport. (2019). ACUERDOS DE LIBRE COMERCIO DESAFÍOS y OPORTUNIDADES | 3o OPORTUNIDADES COMERCIALES [video]. YouTube. 



 

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
