<template>
    <div class="d-flex flex-column flex-lg-row-auto w-lg-350px w-xl-500px">
        <div class="d-flex flex-column position-lg-fixed top-0 bottom-0 w-lg-350px w-xl-500px scroll-y bgi-size-cover bgi-position-center left-side">
            <div class="d-flex flex-center py-10 py-lg-20 mt-lg-20">
                <NuxtLink to="/">
                    <NuxtImg src="/example/logo.png" alt="Logo" class="h-70px" />
                </NuxtLink>
            </div>
            <div class="d-flex flex-row-fluid justify-content-center p-10">
                <div class="stepper-nav">
                    <div class="stepper-item current" data-kt-stepper-element="nav">
                        <div class="stepper-wrapper">
                            <div class="stepper-icon rounded-3">
                                <i class="ki-duotone ki-check fs-2 stepper-check"></i>
                                <span class="stepper-number">1</span>
                            </div>
                            <div class="stepper-label">
                                <h3 class="stepper-title fs-2">Type de compte</h3>
                                <div class="stepper-desc fw-normal">Selectionnez votre type de compte</div>
                            </div>
                        </div>
                        <div class="stepper-line h-40px"></div>
                    </div>
                    <div class="stepper-item" data-kt-stepper-element="nav">
                        <div class="stepper-wrapper">
                            <div class="stepper-icon rounded-3">
                                <i class="ki-duotone ki-check fs-2 stepper-check"></i>
                                <span class="stepper-number">2</span>
                            </div>
                            <div class="stepper-label">
                                <h3 class="stepper-title fs-2">Informations</h3>
                                <div class="stepper-desc fw-normal">Ajoutez vos informations</div>
                            </div>
                        </div>
                        <div class="stepper-line h-40px"></div>
                    </div>
                    <div class="stepper-item" data-kt-stepper-element="nav">
                        <div class="stepper-wrapper">
                            <div class="stepper-icon">
                                <i class="ki-duotone ki-check fs-2 stepper-check"></i>
                                <span class="stepper-number">3</span>
                            </div>
                            <div class="stepper-label">
                                <h3 class="stepper-title fs-2">Détails</h3>
                                <div class="stepper-desc fw-normal">Confirmez et ajoutez des détails</div>
                            </div>
                        </div>
                        <div class="stepper-line h-40px"></div>
                    </div>
                    <div class="stepper-item" data-kt-stepper-element="nav">
                        <div class="stepper-wrapper">
                            <div class="stepper-icon">
                                <i class="ki-duotone ki-check fs-2 stepper-check"></i>
                                <span class="stepper-number">4</span>
                            </div>
                            <div class="stepper-label">
                                <h3 class="stepper-title">Modules</h3>
                                <div class="stepper-desc fw-normal">Ajoutez des modules</div>
                            </div>
                        </div>
                        <div class="stepper-line h-40px"></div>
                    </div>
                    <div class="stepper-item" data-kt-stepper-element="nav">
                        <div class="stepper-wrapper">
                            <div class="stepper-icon">
                                <i class="ki-duotone ki-check fs-2 stepper-check"></i>
                                <span class="stepper-number">5</span>
                            </div>
                            <!--end::Icon-->
                            <!--begin::Label-->
                            <div class="stepper-label">
                                <h3 class="stepper-title">Completed</h3>
                                <div class="stepper-desc fw-normal">Your account is created</div>
                            </div>
                            <!--end::Label-->
                        </div>
                        <!--end::Wrapper-->
                    </div>
                </div>
            </div>
            <div class="d-flex flex-center flex-wrap px-5 py-10">
                <!--begin::Links-->
                <div class="d-flex fw-normal">
                    <a href="https://keenthemes.com" class="text-success px-5" target="_blank">Terms</a>
                    <a href="https://devs.keenthemes.com" class="text-success px-5" target="_blank">Plans</a>
                    <a href="https://1.envato.market/EA4JP" class="text-success px-5" target="_blank">Contact Us</a>
                </div>
                <!--end::Links-->
            </div>
            <!--end::Footer-->
        </div>
    </div>
</template>

<style scoped>
    .left-side {
        background-image: linear-gradient( 180.7deg,  rgba(0,213,255,1) 2.5%, rgba(79,255,255,1) 97.7% );;
    }
</style>

<style src="assets/css/dashboard.bundle.css"></style>
<style src="assets/css/dashboard-plugins.bundle.css"></style>
