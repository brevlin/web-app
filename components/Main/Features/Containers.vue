<script setup lang="ts">
import type FeaturesDetails from '~/types/FeaturesDetails';

const features = await $fetch('/api/features') as FeaturesDetails[];
</script>

<template>
    <div class="ai-featured-section__title section-space-sm-bottom">
        <div class="container">
            <div class="row">
                <div class="col-md-10 col-xl-8" data-aos="fade-left" data-aos-duration="500">
                    <h3 class="mb-0 max-text-24 clr-neutral-90 fw-extrabold animate-line-3d">
                        Grand titre
                    </h3>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row g-4">
            <div class="col-md-6 col-lg-4 col-xl-3 featured-lists fadein_bottom_23" v-for="feature in features">
                <div
                    class="p-3 position-relative z-1 bg-black rounded-3 border border-dashed border-neutral-80 border-opacity-4 h-100">
                    <div
                        class="d-flex flex-column justify-content-center px-4 py-12 rounded-3 bg-neutral-10 text-center h-100">
                        <div class="mb-6 d-inline-block mx-auto">
                            <img :src="feature.iconUrl" :alt="feature.iconAlt" class="img-fluid">
                        </div>
                        <h6 class="clr-neutral-90 fw-extrabold"> {{ feature.title }} </h6>
                        <p class="mb-0 clr-neutral-80">
                            {{ feature.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>