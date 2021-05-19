<template>
  <div class="bg-secondary">
    <main class="page-wrapper d-flex flex-column">
      <t-header/>
      <nuxt/>
    </main>
    <t-footer/>
  </div>
</template>

<script>
import THeader from '~/components/layouts/app/Header.vue'
import TFooter from '~/components/layouts/app/Footer.vue'

export default {
  components: {
    THeader,
    TFooter
  }
}
</script>

<style>

</style>
