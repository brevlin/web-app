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
        }
    }
}
</script>

<template>
    <div class="section-space-sm-bottom">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-10" data-aos="flip-left">
                    <h2 class="mb-6 text-center clr-white fw-extrabold">
                        {{ title }}
                    </h2>
                    <p class="mb-0 text-center fw-extrabold ff-1 fs-18 clr-white animate-line-3d">
                        <span class="clr-grad-6"> {{ description }} </span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>