<script lang="ts">
export default {
  name: 'PricingTitle',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
    <div class="pricing-section-3__title section-space-sm-bottom">
      <div class="container">
        <div class="row">
          <div class="col-xl-7">
            <h3 class="mb-0 clr-neutral-90 fw-extrabold animate-line-3d">
                {{ title }}
            </h3>
          </div>
        </div>
      </div>
    </div>
</template>