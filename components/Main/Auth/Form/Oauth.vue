<script>
export default {
    name: 'Oauth',
    props: {
        path: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <div class="d-flex flex-wrap gap-xl-6 gap-4 align-items-center justify-content-center mt-6">
        <NuxtLink :to="path" class="link d-inline-flex align-items-center justify-content-center gap-4 py-3 px-8 rounded-2 bg-neutral-6 login-with-btn">
            <NuxtImg :src="image" :alt="name" class="img-fluid" />
            <span class="d-inline-block clr-neutral-80 fs-14">{{ name }}</span>
        </NuxtLink>
    </div>
</template>