<template>
  <footer class="footer bg-secondary pt-5 pt-md-6 pt-lg-7">
    <div class="container py-3 pt-md-0">
      <div class="row pb-2 pb-md-5">
        <form class="col-xl-6 col-lg-7 col-md-7 needs-validation mb-5" novalidate>
          <h2 class="pb-4">What project are you looking for?</h2>
          <div class="input-group mb-3"><i class="ai-user position-absolute top-50 start-0 translate-middle-y ms-3"></i>
            <input class="form-control rounded" type="text" placeholder="Name" required>
          </div>
          <div class="input-group mb-3"><i class="ai-mail position-absolute top-50 start-0 translate-middle-y ms-3"></i>
            <input class="form-control rounded" type="email" placeholder="Email" required>
          </div>
          <div class="mb-3 pb-1">
            <textarea class="form-control" rows="4" placeholder="Project description" required></textarea>
          </div>
          <div class="row pt-2">
            <div class="col-lg-6 col-md-8">
              <button class="btn btn-primary btn-block" type="submit">Send Request</button>
            </div>
          </div>
        </form>
        <div class="col-xl-3 col-lg-4 offset-xl-3 offset-lg-1 col-md-5 mb-5">
          <h2 class="pb-2">Contacts</h2>
          <ul class="list-unstyled fs-sm mb-4 pb-2">
            <li><a class="nav-link-style" href="mailto:contact@example.com">contact@example.com</a></li>
            <li><a class="nav-link-style" href="tel:+15262200459">+ 1 526 220 0459</a></li>
          </ul>
          <h3 class="h6 pb-2">Or connect with us on:</h3><a class="btn-social bs-outline bs-facebook bs-lg me-2 mb-2" href="#"><i class="ai-facebook"></i></a><a class="btn-social bs-outline bs-twitter bs-lg me-2 mb-2" href="#"><i class="ai-twitter"></i></a><a class="btn-social bs-outline bs-instagram bs-lg me-2 mb-2" href="#"><i class="ai-instagram"></i></a><a class="btn-social bs-outline bs-dribbble bs-lg me-2 mb-2" href="#"><i class="ai-dribbble"></i></a><a class="btn-social bs-outline bs-behance bs-lg me-2 mb-2" href="#"><i class="ai-behance"></i></a>
        </div>
      </div>
    </div>
    <div class="bg-dark pt-5 pb-4">
      <div class="container d-md-flex justify-content-between align-items-center text-center">
        <ul class="list-inline fs-sm mb-3 order-md-2">
          <li class="list-inline-item my-1"><a class="nav-link-style nav-link-light" href="#">Support</a></li>
          <li class="list-inline-item my-1"><a class="nav-link-style nav-link-light" href="#">Contacts</a></li>
          <li class="list-inline-item my-1"><a class="nav-link-style nav-link-light" href="#">Terms &amp; Conditions</a></li>
        </ul>
        <p class="fs-sm mb-3 order-md-1"><span class="text-light opacity-50 me-1">© All rights reserved. Made by</span><a class="nav-link-style nav-link-light" href="https://createx.studio/" target="_blank" rel="noopener">Createx Studio</a></p>
      </div>
    </div>
  </footer>
</template>
