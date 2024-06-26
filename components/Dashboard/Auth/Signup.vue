<script lang="ts">
export default {
  name: 'Signup',
  props: {
    isLoading: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: false
    }
  }
};
</script>

<template>
  <div class="d-flex flex-column flex-root h-oh">
    <div class="d-flex flex-column flex-center flex-column-fluid">
      <div class="d-flex flex-column flex-center text-center p-10">
        <ElSkeleton :loading="true" style="width: 2500px" animated v-if="isLoading" />
        <div class="card card-flush w-md-650px py-5" v-else>
          <div class="card-body py-15 py-lg-20">
            <div class="mb-7">
              <NuxtLink to="/">
                <NuxtImg src="/example/logo.png" alt="Logo" class="h-40px" />
              </NuxtLink>
            </div>
            <h1 class="fw-bolder text-gray-900 mb-5">
              {{ title }}
            </h1>
            <div class="fw-semibold fs-6 text-gray-500 mb-7">
              {{ description }}
            </div>
            <div class="mb-0">
              <NuxtImg :src="img" class="mw-100 mh-300px" alt="Illustration" />
            </div>
            <div class="mb-0">
              <NuxtLink :to="link">
                <ElButton type="primary" plain>
                  {{ buttonText }}
                </ElButton>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--
    <h1 class="fw-bolder text-gray-900 mb-5">
              {{ success ? 'Bienvenue !' : 'Erreur' }}
            </h1>
            <div class="fw-semibold fs-6 text-gray-500 mb-7">
              {{ success ? 'Faites vos premiers pas sur Brevlin, créez votre espace \npersonnel et configurez votre compte dès maintenant.' : 'Une erreur est survenue lors de la création de votre compte.'}}
            </div>
            <div class="mb-0">
              <img src="assets/media/auth/welcome.png" class="mw-100 mh-300px theme-light-show" alt="" />
              <img src="assets/media/auth/welcome-dark.png" class="mw-100 mh-300px theme-dark-show" alt="" />
            </div>
            <div class="mb-0">
              <a href="index.html" class="btn btn-sm btn-primary">Go To Dashboard</a>
            </div>
  -->
</template>

<style scoped>
.h-oh {
  height: 100%;
}
</style>