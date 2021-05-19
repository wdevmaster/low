<template>
  <div>
    <!-- Title + Delete link-->
    <div class="d-sm-flex align-items-center justify-content-between pb-4 text-center text-sm-start">
      <h1 class="h3 mb-2 text-nowrap">Profile info</h1>
    </div>
    <!-- Content-->
    <div class="row">
      <div class="col-sm-6">
        <div class="mb-3 pb-1">
          <label class="form-label px-0" for="account-fn">First Name</label>
          <input class="form-control" type="text" id="account-fn" value="Amanda">
        </div>
      </div>
      <div class="col-sm-6">
        <div class="mb-3 pb-1">
          <label class="form-label px-0" for="account-ln">Last Name</label>
          <input class="form-control" type="text" id="account-ln" value="Wilson">
        </div>
      </div>
      <div class="col-sm-6">
        <div class="mb-3 pb-1">
          <label class="form-label px-0" for="account-email">Email address</label>
          <input class="form-control" type="text" id="account-email" value="a.wilson@example.com">
        </div>
      </div>
      <div class="col-sm-6">
        <div class="mb-3 pb-1">
          <label class="form-label px-0" for="account-username">Username</label>
          <div class="input-group"><span class="input-group-text">@</span>
            <input class="form-control" type="text" id="account-username" value="amanda_w">
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="mb-3 pb-1">
          <label class="form-label px-0" for="account-city">Password</label>
          <input class="form-control" type="password" id="account-city">
        </div>
      </div>
      <div class="col-sm-6">
        <div class="mb-3 pb-1">
          <label class="form-label px-0" for="account-address">Password confirmation </label>
          <input class="form-control" type="password" id="account-address">
        </div>
      </div>
      <div class="col-12">
        <hr class="mt-2 mb-4">
        <div class="d-flex flex-wrap justify-content-between align-items-center">
          <div class="form-check d-block"></div>
          <button class="btn btn-primary mt-3 mt-sm-0" type="button"><i class="ai-save fs-lg me-2"></i>Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'app'
}
</script>

<style>

</style>
