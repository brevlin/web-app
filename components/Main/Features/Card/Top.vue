<script lang="ts">

</script>

<template>
    <div class="col-md-6 col-lg-4 fb-card-lists fadein_bottom_24">
        <div class="fb-card p-4 p-xl-8 rounded-4 bg-neutral-6 overflow-hidden h-100">
            <div class="d-flex flex-wrap justify-content-between align-items-center mb-5">
                <span class="d-block fw-bold fs-18 clr-neutral-90"> Keywords </span>
                <span class="d-inline-block flex-shrink-0 py-1 px-2 bg-info-50 bg-opacity-2 clr-info-50 lh-1 fs-14">
                    Step 01 </span>
            </div>
            <div class="row g-4">
                <div class="col-sm-6">
                    <div class="p-4 p-md-6 rounded-4 bg-neutral-10 bg-opacity-5 shadow text-center">
                        <div
                            class="w-8 h-8 mx-auto mb-4 d-grid place-content-center rounded-circle bg-info-50 bg-opacity-5 clr-info-50">
                            <i class="bi bi-lightning-fill"></i>
                        </div>
                        <span class="d-block clr-neutral-80 fs-12 fw-bold"> Trending Keywords </span>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="p-4 p-md-6 rounded-4 bg-neutral-10 bg-opacity-5 shadow text-center">
                        <div
                            class="w-8 h-8 mx-auto mb-4 d-grid place-content-center rounded-circle bg-warning-50 bg-opacity-5 clr-warning-50">
                            <i class="bi bi-gear-fill"></i>
                        </div>
                        <span class="d-block clr-neutral-80 fs-12 fw-bold"> Keywords Topic </span>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="p-4 p-md-6 rounded-4 bg-neutral-10 bg-opacity-5 shadow text-center">
                        <div
                            class="w-8 h-8 mx-auto mb-4 d-grid place-content-center rounded-circle bg-success-50 bg-opacity-5 clr-success-50">
                            <i class="bi bi-chat-dots-fill"></i>
                        </div>
                        <span class="d-block clr-neutral-80 fs-12 fw-bold"> Number Keywords </span>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="p-4 p-md-6 rounded-4 bg-neutral-10 bg-opacity-5 shadow text-center">
                        <div
                            class="w-8 h-8 mx-auto mb-4 d-grid place-content-center rounded-circle bg-primary-50 bg-opacity-5 clr-primary-50">
                            <i class="bi bi-flag-fill"></i>
                        </div>
                        <span class="d-block clr-neutral-80 fs-12 fw-bold"> Choose language </span>
                    </div>
                </div>
                <div class="col-12">
                    <a href="#"
                        class="link d-block w-100 max-text-32 mx-auto border border-dashed border-success-50 border-opacity-5 py-3 px-6 rounded ff-1 fs-12 fw-bold clr-white text-center">
                        Other Input </a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6 col-lg-4 fb-card-lists fadein_bottom_24">
        <div class="fb-card p-4 p-xl-8 rounded-4 bg-neutral-6 overflow-hidden h-100">
            <div class="d-flex flex-wrap justify-content-between align-items-center mb-5">
                <span class="d-block fw-bold fs-18 clr-neutral-90"> Generated Titles </span>
                <span
                    class="d-inline-block flex-shrink-0 py-1 px-2 bg-primary-50 bg-opacity-2 clr-primary-50 lh-1 fs-14">
                    Step 02 </span>
            </div>
            <ul class="list gap-6">
                <li>
                    <NuxtImg src="/example/features/fb-img-1.png" alt="image" class="img-fluid w-100" />
                </li>
                <li>
                    <NuxtImg src="/example/features/fb-img-2.png" alt="image" class="img-fluid w-100" />
                </li>
                <li>
                    <NuxtImg src="/example/features/fb-img-3.png" alt="image" class="img-fluid w-100" />
                </li>
            </ul>
        </div>
    </div>
    <div class="col-md-6 col-lg-4 fb-card-lists fadein_bottom_24">
        <div class="fb-card p-4 p-xl-8 rounded-4 bg-neutral-6 overflow-hidden h-100">
            <div class="d-flex flex-wrap justify-content-between align-items-center mb-5">
                <span class="d-block fw-bold fs-18 clr-neutral-90"> Final Output </span>
                <span
                    class="d-inline-block flex-shrink-0 py-1 px-2 bg-primary-50 bg-opacity-2 clr-primary-50 lh-1 fs-14">
                    Step 03 </span>
            </div>
            <NuxtImg src="/example/features/fb-img-4.png" alt="image" class="img-fluid" />
        </div>
    </div>
</template>