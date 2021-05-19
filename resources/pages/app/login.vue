<template>
  <section class="container d-flex justify-content-center align-items-center" style="flex: 1 0 auto;">
    <div class="signin-form">
      <div class="signin-form-inner">
        <!-- Sign in view-->
        <div class="view show pt-5" id="signin-view">
          <h1 class="h2 text-center">Sign in</h1>
          <p class="fs-ms text-muted mb-4 text-center">
            Sign in to your account using email and password provided during registration.
          </p>
          <form class="needs-validation" novalidate>
            <div class="input-group mb-3">
              <i class="ai-mail position-absolute top-50 start-0 translate-middle-y ms-3"></i>
              <input class="form-control rounded" type="email" placeholder="Email" required>
            </div>
            <div class="input-group mb-3">
              <i class="ai-lock position-absolute top-50 start-0 translate-middle-y ms-3"></i>
              <div class="password-toggle w-100">
                <input class="form-control" type="password" placeholder="Password" required>
                <label class="password-toggle-btn" aria-label="Show/hide password">
                  <input class="password-toggle-check" type="checkbox">
                  <span class="password-toggle-indicator"></span>
                </label>
              </div>
            </div>
            <div class="d-flex justify-content-between align-items-center mb-3 pb-1">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="keep-signed-2">
                <label class="form-check-label" for="keep-signed-2">Keep me signed in</label>
              </div>
              <!--
              <a class="nav-link-style fs-ms" href="password-recovery.html">Forgot password?</a>
              -->
            </div>
            <button class="btn btn-primary d-block w-100" type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'auth'
}
</script>

<style>

</style>
