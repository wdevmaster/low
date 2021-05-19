<template>
  <header class="header navbar navbar-expand-lg navbar-light bg-light navbar-sticky" data-scroll-header data-fixed-element>
    <div class="container px-0 px-xl-3">
      <button class="navbar-toggler ms-n2 me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand flex-shrink-0 order-lg-1 mx-auto ms-lg-0 pe-lg-2 me-lg-4" href="#">
        <img class="d-none d-lg-block" src="~assets/img/logo/logo-dark.png" alt="Around" width="153">
        <img class="d-lg-none" src="~assets/img/logo/logo-icon.png" alt="Around" width="58">
      </a>
      <div class="offcanvas offcanvas-collapse order-lg-2" id="primaryMenu">
        <div class="offcanvas-cap navbar-shadow">
          <h5 class="mt-1 mb-0">Menu</h5>
          <button class="btn-close lead" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <!-- Menu-->
          <t-navbar/>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import TNavbar from './Navbar'

export default {
  components: {
    TNavbar
  }
}
</script>
