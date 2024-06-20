<script setup>
import { useProcessStore } from '#imports';

const { isOnProcess } = useProcessStore();
</script>

<template>
    <div class="bg-black body-clip">
        <div class="login-page">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <MainAuthRadar />
                    <div class="col-xxl-5 col-xl-6 col-lg-8 col-md-10">
                        <div class="gradient-card py-sm-12 py-8 px-sm-8 px-5 rounded-5">
                             <MainAuthText title="Bienvenue" subtitle="Connectez-vous à votre compte" description="Entrez vos informations pour vous connecter à votre compte." />
                             <MainAuthFormMain />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>