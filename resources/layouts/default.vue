<template>
  <div>
    <main class="page-wrapper">
      <t-header/>
      <nuxt/>
    </main>
    <t-footer/>
  </div>
</template>

<script>
import THeader from '~/components/layouts/Header.vue'
import TFooter from '~/components/layouts/Footer.vue'

export default {
  components: {
    THeader,
    TFooter
  }
}
</script>

<style>

</style>
