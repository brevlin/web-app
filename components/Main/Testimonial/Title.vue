<script lang="ts">
export default {
    name: 'TestimonialTitle',
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <div class="section-space-sm-bottom">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-8">
            <h3 class="mb-0 clr-neutral-90 fw-extrabold text-center animate-line-3d title-star"> {{ title }} </h3>
          </div>
        </div>
      </div>
    </div>
</template>