<script lang="ts">
export default {
    name: 'CtaContent',
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
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
    <div class="cta-section-2 section-space-y">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-8">
                <div class="text-center">
                    <div class="mb-8 fadeIn_bottom">
                        <NuxtImg src="/example/logo2" alt="image" class="img-fluid" />
                    </div>
                    <h3 class="mb-6 clr-neutral-90 fw-extrabold animate-line-3d">
                        {{ title }}
                    </h3>
                    <p class="mb-8 clr-neutral-80 fw-bold animate-text-from-bottom">
                        {{ text }}
                    </p>
                    <div class="fadeIn_bottom">
                        <NuxtLink to="/" class="gradient-btn-3 position-relative z-1 link d-inline-flex gap-2 align-items-center justify-content-center px-6 py-3 rounded-1 fw-bold text-center">
                            <span class="d-inline-block flex-shrink-0">
                                {{ buttonText }}
                            </span>
                            <span class="d-inline-block">
                                <i class="bi bi-arrow-right-short"></i>
                            </span>
                        </NuxtLink>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>