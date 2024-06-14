<script setup lang="ts">
const brandCount = useSchoolCount(2345);
</script>

<template>
    <div class="section-space-xsm-bottom">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12" data-aos="zoom-in">
                    <h6 class="mb-0 text-center clr-neutral-90 fw-extrabold">
                        Brevlin regroupe {{ brandCount }} écoles sous sa plateforme !
                    </h6>
                </div>
            </div>
        </div>
    </div>
</template>