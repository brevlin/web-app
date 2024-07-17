<script lang="ts">
export default {
    props: {
        type: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
    }
}
</script>

<template>
    <div class="col-lg-6">
        <input type="radio" class="btn-check" name="account_type" value="corporate" id="kt_create_account_form_account_type_corporate" />
        <label class="btn btn-outline btn-outline-dashed btn-active-light-primary p-7 d-flex align-items-center">
            <NuxtImg :src="icon" />
            <span class="d-block fw-semibold text-start">
                <span class="text-gray-900 fw-bold d-block fs-4 mb-2">
                    {{ type }}
                </span>
                <span class="text-muted fw-semibold fs-6">
                    {{ description }}
                </span>
            </span>
        </label>
    </div>
</template>