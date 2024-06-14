<template>
    <div class="bg-black body-clip">
        <div class="login-page">
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <MainAuthRadar />
                    <div class="col-xxl-5 col-xl-6 col-lg-8 col-md-10">
                        <div class="gradient-card py-sm-12 py-8 px-sm-8 px-5 rounded-5">
                             <MainAuthText title="Bienvenue" subtitle="Connectez-vous à votre compte" description="Entrez vos informations pour vous connecter à votre compte." />
                             <form>
                                <div class="d-flex flex-wrap gap-xl-6 gap-4 align-items-center justify-content-center mt-6">
                                    <MainAuthFormOauth path="/auth/google" image="/svg/google.svg" name="Google" />
                                    <MainAuthFormOauth path="/auth/linkedin" image="/svg/linkedin.svg" name="Linkedin" />
                                </div>
                                <MainAuthFormMain />
                             </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>