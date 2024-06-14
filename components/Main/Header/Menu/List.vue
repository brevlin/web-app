<script setup lang="ts">
import type HeaderItem from '~/types/HeaderItem';

const list = await $fetch('/api/header') as HeaderItem;

console.log(list.items);

</script>

<template>
    <ul class="list list-lg-row ms-lg-auto align-items-lg-center" v-for="item of list.items">
        <MainHeaderMenuItem :to="item.path" :text="item.text" />
    </ul>
</template>