export default defineEventHandler((event) => {
    return {
        items: [{
            path: '/',
            text: 'Accueil'
        }, {
            path: '/pricing',
            text: 'Abonnements'
        }, {
            path: '/features',
            text: 'Fonctionnalités'
        }, {
            path: '/about',
            text: 'A propos'
        }, {
            path: '/faq',
            text: 'FAQ'
        }]
    }
})
  