<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isSticky = ref(false)

const handleScroll = () => {
    isSticky.value = window.scrollY > 0
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <div class="bg-black">
        <!-- ! Header -->
        <header class="header header--4 header--fixed" :class="{ sticky: isSticky, brightness: isSticky }">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav class="menu d-lg-flex justify-content-lg-between align-items-lg-center py-3 py-lg-0">
                            <MainHeaderResponsive />
                            <div
                                class="menu-nav d-flex align-items-lg-center flex-column flex-lg-row flex-grow-1 gap-4 pb-4 pb-lg-0 rounded">
                                <MainHeaderMenuList />
                                <!-- ? Si la personne est déjà connecté, le chemin sera '/dashboard' et le texte sera 'Mon panel' -->
                                <!-- Exemple -->
                                <MainHeaderMenuAuth to="/auth" text="Connexion" />
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>

        <!-- ! Hero -->
        <div class="hero-4 bg-grad-6">
            <MainHeroStrip />
            <div class="hero-4__content bg-black section-space-top">
                <div class="section-space-top section-space-sm-bottom">
                    <MainHeroSectionTop title="Brevlin" description="Site de gestion d'écoles" />
                    <MainHeroSectionBottom title="Titre" description="Description" buttonText="Découvrir" />
                </div>
            </div>
        </div>

        <!-- ! Brand -->
        <MainBrandCount />
        <div class="overflow-hidden">
            <div class="container-fluid p-0">
                <div class="row g-0">
                    <div class="col-12">
                        <div class="scroller-x" data-direction="left" data-speed="slow">
                            <ul class="list list-row gap-10 scroller-x__list">
                                <MainBrandItem src="/example/logo.png" alt="Brand 1" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 2" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                                <MainBrandItem src="/example/logo.png" alt="Brand 3" />
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ! AI featured -> features -->
        <div class="section-space-sm-y">
            <div class="ai-featured-section section-space-sm-y">
                <MainFeaturesShapes />
                <MainFeaturesContainers />
            </div>

            <MainFeaturesMore />
        </div>

        <!-- ! Pricing -->
        <div class="pricing-section-3 section-space-sm-y">
            <MainPricingAvatars />
            <MainPricingTitle title="Les tarifs :" />
            <div class="container">
                <div class="row g-4">
                    <MainPricingCard />
                    <MainPricingCard />
                    <MainPricingCard />
                </div>
            </div>
            <NuxtImg src="/shape/pricing.png" alt="Shape"
                class="img-fluid d-none d-xl-block position-absolute top-0 start-0 pointer-none z-n1" />
        </div>

        <!-- ! Testimonials -->
        <!--
        <div class="testimonial-section-1 section-space-sm-y position-relative z-1">
            <NuxtImg src="/shape/testimonial-shape-1.png" alt="Shape"
                class="w-100 h-100 position-absolute inset-0 z-n1 pointer-none" />
            <div class="testimonial-section-1__content overflow-hidden">
                <div class="container-fluid container-fixed p-0">
                    <div class="row g-0">
                        <div class="col-12">
                            <div class="scroller-x mb-6" data-direction="left" data-speed="slow">
                                <ul class="list list-row align-items-center gap-6 scroller-x__list">
                                    <MainTestimonialContent avatar="/images/testimonial/1.png" name="Test"
                                        position="Test" text="Test" />
                                    <MainTestimonialContent avatar="/images/testimonial/1.png" name="Test"
                                        position="Test" text="Test" />
                                    <MainTestimonialContent avatar="/images/testimonial/1.png" name="Test"
                                        position="Test" text="Test" />
                                </ul>
                            </div>
                            <div class="scroller-x" data-direction="right" data-speed="slow">
                                <ul class="list list-row align-items-center gap-6 scroller-x__list">
                                    <MainTestimonialContent avatar="/images/testimonial/1.png" name="Test"
                                        position="Test" text="Test" />
                                    <MainTestimonialContent avatar="/images/testimonial/1.png" name="Test"
                                        position="Test" text="Test" />
                                    <MainTestimonialContent avatar="/images/testimonial/1.png" name="Test"
                                        position="Test" text="Test" />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        -->

        <!-- ! FAQ -->
        <div class="faq-section-4 section-space-sm-y">
            <MainFaqTitle text="FAQ" />
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="p-4 p-md-9 rounded-4 bg-black top-shadow fadeIn_bottom">
                            <MainFaqAccordion />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- ! CTA -->
        <MainCtaContent title="Test" text="Test" buttonText="Test" />

        <!-- ! Footer -->
        <MainFooterContent />
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100..900&display=swap');

* {
    font-family: "Roboto Slab", serif;
}

.brightness {
    backdrop-filter: brightness(0.3);
}

.sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
}

.hero-4__content {
    background-image: url('../public/bg/hero-4-bg.webp');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>