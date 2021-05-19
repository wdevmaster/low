<template>
  <!-- Page content-->
  <div>
    <!-- Banner -->
    <t-banner/>
    <!-- About -->
    <t-about/>
    <!-- Portfolio -->
    <t-portfolio/>
    <!-- Services -->
    <t-services/>
    <!-- Team -->
    <t-team/>
    <!-- Testimonial -->
    <t-testimonial/>
  </div>
</template>

<script>
import TBanner from '~/components/Banner'
import TAbout from '~/components/About'
import TPortfolio from '~/components/Portfolio'
import TServices from '~/components/Services'
import TTeam from '~/components/Team'
import TTestimonial from '~/components/Testimonial'

export default {
  components: {
    TBanner,
    TAbout,
    TPortfolio,
    TServices,
    TTeam,
    TTestimonial
  }
}
</script>

<style>

</style>
