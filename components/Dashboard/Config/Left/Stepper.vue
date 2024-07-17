<script>
export default {
    props: {
        step: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        desc: {
            type: String,
            default: ''
        },
        active: {
            type: Boolean,
            default: false
        },
        completed: {
            type: Boolean,
            default: false
        },
        pending: {
            type: Boolean,
            default: false
        }
    }
}

let attr = '';

if (this.active) {
    attr = 'current';
} else if (this.completed) {
    attr = 'completed';
} else if (this.pending) {
    attr = 'pending';
}
</script>

<template>
    <div :class="`stepper-item ${attr}`">
        <div class="stepper-wrapper">
            <div class="stepper-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" v-if="completed">
                    <path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/>
                </svg>
                <span class="stepper-number">
                    {{step}}
                </span>
            </div>
            <div class="stepper-label">
                <h3 class="stepper-title">
                    {{title}}
                </h3>
                <div class="stepper-desc fw-normal">
                    {{desc}}
                </div>
            </div>
        </div>
    </div>
</template>