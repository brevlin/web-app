<script lang="ts">
export default {
    name: 'TestimonialContent',
    props: {
        avatar: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        position: {
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
    <li>
        <div class="p-4 px-md-8 py-md-12 bg-black rounded-4 max-text-50">
            <div class="d-flex gap-4 align-items-center mb-8">
                <div class="w-12 h-12 flex-shrink-0 rounded-circle overflow-hidden">
                    <NuxtImg :src="avatar" alt="Avatar" class="w-100 h-100 object-fit-cover" />
                </div>
                <div class="flex-grow-1">
                    <h6 class="mb-0 fs-18 clr-neutral-90"> {{ name }} </h6>
                    <span class="d-block fs-12 clr-neutral-80"> {{ position }} </span>
                </div>
            </div>
            <p class="mb-0 clr-neutral-80 fs-18">
                {{ text }}
            </p>
        </div>
    </li>
</template>