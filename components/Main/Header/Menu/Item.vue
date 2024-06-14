<script lang="ts">
export default {
    name: 'MenuItem',
    props: {
        to: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    }
}
</script>

<template>
    <li class="menu-list">
        <NuxtLink :to="to" class="link menu-link"> {{ text }} </NuxtLink>
    </li>
</template>