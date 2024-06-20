<script setup lang="ts">
// https://stackoverflow.com/questions/60278515/how-to-import-css-file-from-assets-folder-in-nuxt-js

import { useEmailStore } from "~/stores/email";

const emailStore = useEmailStore();

const email = emailStore.email;

if (email == '') {
  navigateTo('/auth');
}
</script>

<template>
  <div class="d-flex flex-column flex-root custom-gradient full-page">
    <div class="d-flex flex-column flex-center flex-column-fluid">
      <div class="d-flex flex-column flex-center text-center">
        <div class="card card-flush w-lg-650px">
          <div class="card-body">
            <div class="mb-14">
              <NuxtLink to="/">
                <NuxtImg src="/example/logo.png" alt="Logo" class="h-40px" />
              </NuxtLink>
            </div>
            <h1 class="fw-bolder text-gray-900 mb-5">
              Vérifiez votre boite mail
            </h1>
            <div class="fs-6 mb-8" data-aos="zoom-out">
              <span class="fw-semibold text-gray-500">
                Vous avez reçu un mail de confirmation de votre inscription sur la boite mail :
                <br>
                <b>{{email}}</b>
              </span>
            </div>
            <div class="mb-11">
              <NuxtLink to="/">
                <ElButton type="primary" plain>
                  Retourner à l'accueil
                </ElButton>
              </NuxtLink>
            </div>
            <div class="mb-0">
              <NuxtImg src="/example/check-mailbox.png" class="mw-100 mh-300px theme-light-show" alt="Illustration" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="/assets/css/dashboard.bundle.css">

</style>

<style scoped>
.custom-gradient {
  background: linear-gradient(-60deg, rgb(138, 185, 255) 50%, rgb(69, 103, 178) 50%);
}

.full-page {
  height: 100vh;
}
</style>