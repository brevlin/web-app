<script lang="ts">
export default {
    props: {
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
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="row g-4">
            <div class="col-12">
                <div class="top-shadow section-space-sm-y rounded-4 bg-black position-relative z-1 overflow-hidden" data-aos="fade-up">
                    <div class="row g-4 align-items-center">
                        <div class="col-md-6 col-xl-5">
                            <div class="px-4 px-lg-6 px-xl-15">
                                <h4 class="mb-6 clr-neutral-90"> {{ title }} </h4>
                                <p class="mb-10 clr-neutral-80 fs-14"> {{ description }} </p>
                                <NuxtLink to="/panel"
                                    class="gradient-btn-3 position-relative z-1 link d-inline-flex gap-2 align-items-center justify-content-center px-6 py-3 rounded-1 fw-bold text-center">
                                    <span class="d-inline-block flex-shrink-0"> {{ buttonText }} </span>
                                    <span class="d-inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m14 18l-1.4-1.45L16.15 13H4v-2h12.15L12.6 7.45L14 6l6 6z"/></svg>
                                    </span>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="col-md-6 col-xl-7">
                            <div class="text-center">
                                <NuxtImg src="/example/dashboard-hero.png" alt="image" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <NuxtImg src="/shape/hero-content.png" alt="Shape" class="w-100 h-100 position-absolute inset-0 z-n1 pointer-none" />
                    <!-- <img src="./assets/img/hero-4-content-shape.webp" alt="image"
                        class="w-100 h-100 position-absolute inset-0 z-n1 pointer-none"> -->
                </div>
            </div>
        </div>
    </div>
</template>