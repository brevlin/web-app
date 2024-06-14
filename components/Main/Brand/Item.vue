<script lang="ts">
export default {
    props: {
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <!-- TODO : Link to brand page -->
    <li>
        <div class="brand-btn d-inline-block">
            <ElTooltip :content="alt" placement="top">
                <NuxtImg :src="src" :alt="alt" class="img-fluid" />
            </ElTooltip>
        </div>
    </li>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap');

* {
    font-family: "Roboto Slab", serif;
}
</style>