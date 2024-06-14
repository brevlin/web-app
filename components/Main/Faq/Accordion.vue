<script setup lang="ts">
import type FaqDetails from '~/types/FaqDetails';

const questions = await $fetch('/api/faq') as FaqDetails[];
const id = `#faqAccordionGV`;
</script>

<template>
    <div class="accordion custom-accordion custom-accordion--faq" id="faqAccordionHomeFour" v-for="faq of questions">
        <div class="accordion-item border-bottom-0 border-start-0 border-end-0">
            <h2 class="accordion-header">
                <button class="accordion-button fs-20 fw-bold" type="button" data-bs-toggle="collapse"
                    :data-bs-target="id + faq.id" aria-expanded="true"> 
                    {{ faq.question }}    
                </button>
            </h2>
            <div :id="id + faq.id" class="accordion-collapse collapse show" data-bs-parent="#faqAccordionHomeFour">
                <div class="accordion-body">
                    <ul class="list gap-4 mb-8">
                        <li> {{ faq.answer }} </li>
                    </ul>
                    <p class="mb-0">
                        Si vous avez d'autres questions, n'hésitez pas à nous contacter. Nous serons ravis de vous aider.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>