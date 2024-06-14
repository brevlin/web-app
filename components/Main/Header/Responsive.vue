<script setup lang="ts">

</script>

<template>
    <div class="d-flex align-items-center justify-content-between">
        <NuxtLink to="/" class="logo link d-inline-flex align-items-center flex-shrink-0">
            <NuxtImg src="/example/logo.png" alt="logo" class="img-fluid object-fit-contain logo" />
        </NuxtLink>

        <button class="menu-toggle w-10 h-10 p-0 border-0 lh-1 bg-primary-50 clr-neutral-100 :clr-neutral-100 transition :bg-primary-300 rounded flex-shrink-0 d-lg-none order-sm-3 fs-24">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"/></svg>
        </button>
    </div>
</template>