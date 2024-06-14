<script>
export default {
    name: 'Text',
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
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
    <p class="fs-24 fw-medium clr-neutral-80 mb-5">{{ title }}</p>
    <h4 class="h4 fw-bold mb-2 clr-neutral-90">{{ subtitle }}</h4>
    <p class="clr-neutral-80">{{ description }}</p>
</template>