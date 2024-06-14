export default defineEventHandler((event) => {
    return [{
        iconUrl: '/svg/calendar.svg',
        iconAlt: 'Feature',
        title: 'Gestion des cours',
        description: 'Consultation de l\'emploi du temps, consultation des notes, accès aux matériels de cours et aux ressources pédagogiques.',
    },{
        iconUrl: '/svg/communication.svg',
        iconAlt: 'Feature',
        title: 'Communication et collaboration',
        description: 'Forums de discussion pour chaque cours, système de messagerie interne pour communiquer avec les professeurs et les camarades.',
    },{
        iconUrl: '/svg/tools.svg',
        iconAlt: 'Feature',
        title: 'Outils de travail',
        description: 'Calendrier académique avec rappel des échéances importantes, accès aux devoirs et possibilité de soumettre les travaux en ligne.',
    },{
        iconUrl: '/svg/teacher.svg',
        iconAlt: 'Feature',
        title: 'Pour les professeurs',
        description: 'Création et gestion des cours et des contenus pédagogiques, suivi des performances et des progrès des étudiants.',
    }]
})