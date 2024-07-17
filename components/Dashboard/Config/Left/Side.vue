<script>
import {useConfigStore} from "#imports";
const configStore = useConfigStore();
</script>

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
                    <DashboardConfigLeftStepper
                        step="1"
                        title="Type de compte"
                        desc="Selectionnez votre type de compte"
                        :active="configStore.step === 1"
                        :completed="configStore.step > 1"
                        :pending="configStore.step < 1"
                    />
                    <DashboardConfigLeftStepper
                        step="2"
                        title="Informations"
                        desc="Ajoutez vos informations"
                        :active="configStore.step === 2"
                        :completed="configStore.step > 2"
                        :pending="configStore.step < 2"
                    />
                    <DashboardConfigLeftStepper
                        step="3"
                        title="Détails"
                        desc="Confirmez et ajoutez des détails"
                        :active="configStore.step === 3"
                        :completed="configStore.step > 3"
                        :pending="configStore.step < 3"
                    />
                    <DashboardConfigLeftStepper
                        step="4"
                        title="Modules"
                        desc="Ajoutez des modules"
                        :active="configStore.step === 4"
                        :completed="configStore.step > 4"
                        :pending="configStore.step < 4"
                    />
                </div>
            </div>
            <DashboardConfigLeftFooter />
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
