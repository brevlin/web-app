<!-- TODO : Table des différents abonnements dans la DB (?) -->
<script lang="ts">

</script>

<template>
    <div class="col-md-4 featured-lists fadeIn_bottom">
        <div
            class="p-4 bg-black rounded-5 border border-dashed border-neutral-80 border-opacity-4 position-relative z-1">
            <div class="top-shadow bg-neutral-6 p-4 p-lg-6 p-xl-10 rounded-4">
                <div class="mb-10 text-center">
                    <h6 class="mb-3 fs-18 clr-neutral-90"> Premium Plan </h6>
                    <span class="d-block mb-3 fs-14 clr-neutral-80"> Start with 3,000 word limit </span>
                    <h4 class="mb-10 clr-neutral-90"> $18/mo </h4>
                    <a href="login.html"
                        class="link d-inline-flex gap-1 align-items-center py-2 px-4 rounded-1 clr-white bg-neutral-variant-30 :bg-primary-key">
                        <span class="d-inline-block fs-14 fw-semibold "> Try For Free </span>
                        <span class="d-inline-block">
                            <i class="bi bi-arrow-right-short"></i>
                        </span>
                    </a>
                </div>
                <ul class="list gap-5">
                    <li>
                        <div class="d-flex gap-3">
                            <span
                                class="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
                                <i class="bi bi-check2"></i>
                            </span>
                            <span class="d-block clr-neutral-80 fs-14"> Suitable for blog posts, simple articles
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="d-flex gap-3">
                            <span
                                class="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
                                <i class="bi bi-check2"></i>
                            </span>
                            <span class="d-block clr-neutral-80 fs-14"> Standard grammar and spelling checks
                            </span>
                        </div>
                    </li>
                    <li>
                        <div class="d-flex gap-3">
                            <span
                                class="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
                                <i class="bi bi-check2"></i>
                            </span>
                            <span class="d-block clr-neutral-80 fs-14"> Basic Models </span>
                        </div>
                    </li>
                    <li>
                        <div class="d-flex gap-3">
                            <span
                                class="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
                                <i class="bi bi-check2"></i>
                            </span>
                            <span class="d-block clr-neutral-80 fs-14"> 100 Captured Contacts </span>
                        </div>
                    </li>
                    <li>
                        <div class="d-flex gap-3">
                            <span
                                class="flex-shrink-0 d-grid place-content-center w-6 h-6 rounded-circle border border-solid border-neutral-variant-30 bg-neutral-variant-30 bg-opacity-1 clr-neutral-variant-30">
                                <i class="bi bi-check2"></i>
                            </span>
                            <span class="d-block clr-neutral-80 fs-14"> Basic Support </span>
                        </div>
                    </li>
                </ul>
            </div>
            <NuxtImg src="/shape/pricing.png" alt="Shape"
                class="img-fluid w-100 position-absolute start-0 end-0 bottom-0 z-n1" />
        </div>
    </div>
</template>