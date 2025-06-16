<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Acuerdos y tratados internacionales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

   
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Tipos de acuerdos comerciales

    
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/120836 " target="_blank" rel="noopener noreferrer") Casanova Montero, A. R. & Zuaznábar Morales, I. R. (2018). El comercio internacional: teorías y políticas. Editorial Universo Sur. 



            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.redalyc.org/articulo.oa?id=87025385007" target="_blank" rel="noopener noreferrer") Rosa Polanco, H. (2012). El Modelo Ricardiano De Ventaja Comparativa Y El Comercio Contemporáneo: El Caso Del Sector De "Equipos De Transporte" En La Industria Manufacturera. Ciencia y Sociedad, XXXVII(4), 529-555.  

 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://espanol.libretexts.org/Negocio/Negocios/Negocios_Avanzados/Libro%3A_Negocios_Internacionales/02%3A_Comercio_Internacional_e_Inversi%C3%B3n_Extranjera_Directa/2.02%3A_%C2%BFQu%C3%A9_es_la_teor%C3%ADa_del_comercio_internacional%3F " target="_blank" rel="noopener noreferrer") LibreTexts. (s.f.). ¿Qué es la teoría del comercio internacional? LibreTexts.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=V6Vfbi5Cyjg " target="_blank" rel="noopener noreferrer") Heri Gutierrez Garcia. (2018l). Teoría del comercio internacional [video]. YouTube. 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=BNn3TLizXMY " target="_blank" rel="noopener noreferrer") Universidad Continental. (2021). Modelo de Heckscher Ohlin [video]. YouTube. 





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
