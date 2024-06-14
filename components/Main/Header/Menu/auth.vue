<script lang="ts">
export default {
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
    <ul class="list list-lg-row ms-lg-auto align-items-lg-center">
        <li class="menu-item">
            <NuxtLink :to=to class="link d-inline-flex align-items-center gap-2 py-2 px-3 rounded-1 bg-grad-6 clr-white fw-bold fs-14">
                <span class="d-inline-block ff-3"> {{ text }} </span>
                <span class="d-inline-block fs-12">
                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z"/></svg>
                </span>
            </NuxtLink>
        </li>
    </ul>
</template>

<style scoped>
svg {
    width: 25px;
    height: 25px;
}
</style>