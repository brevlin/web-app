<script lang="ts">
export default {
  name: 'FaqTitle',
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
    <div class="faq-section-4__title section-space-sm-bottom">
      <div class="container">
        <div class="row">
          <div class="col-xl-7">
            <div class="faq-section-4__title-is">
              <h3 class="mb-0 clr-neutral-90 fw-extrabold animate-line-3d">
                {{ text }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>