<template>
  <div>
    <main class="page-wrapper">
      <t-header/>
       <!-- Slanted background-->
      <div class="position-relative bg-gradient" style="height: 480px;">
        <div class="shape shape-bottom shape-slant bg-secondary d-none d-lg-block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 260">
            <polygon fill="currentColor" points="0,257 0,260 3000,260 3000,0"></polygon>
          </svg>
        </div>
      </div>

      <div class="container position-relative zindex-5 pb-4 mb-md-3" style="margin-top: -350px;">
        <div class="row">
          <!-- Sidebar-->
          <t-sidebar/>
          <!-- Content-->
          <div class="col-lg-8">
            <div class="d-flex flex-column h-100 bg-light rounded-3 shadow-lg p-4">
              <div class="py-2 p-md-3">
                <nuxt/>
              </div>
            </div>
          </div>
        </div>
      </div>


    </main>
    <t-footer/>
  </div>
</template>

<script>
import THeader from '~/components/layouts/app/Header'
import TSidebar from '~/components/layouts/app/Sidebar'
import TFooter from '~/components/layouts/app/Footer'

export default {
  components: {
    THeader,
    TSidebar,
    TFooter
  }
}
</script>

<style>

</style>
