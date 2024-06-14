export default defineEventHandler((event) => {
    return [{
        id: '1',
        question: 'Comment créer un utilisateur ?',
        answer: 'Pour créer un utilisateur, rendez-vous dans la section "Utilisateurs" du menu principal, puis cliquez sur le bouton "Créer un utilisateur".'
    },{
        id: '2',
        question: 'Comment attribuer un rôle à un utilisateur ?',
        answer: 'Pour attribuer un rôle à un utilisateur, rendez-vous dans la section "Utilisateurs" du menu principal, puis cliquez sur le bouton "Attribuer un rôle".'
    },{
        id: '3',
        question: 'Comment supprimer un utilisateur ?',
        answer: 'Pour supprimer un utilisateur, rendez-vous dans la section "Utilisateurs" du menu principal, puis cliquez sur le bouton "Supprimer".'
    },{
        id: '4',
        question: 'Comment modifier un utilisateur ?',
        answer: 'Pour modifier un utilisateur, rendez-vous dans la section "Utilisateurs" du menu principal, puis cliquez sur le bouton "Modifier".'
    }, {
        id: '5',
        question: 'Comment créer un projet ?',
        answer: 'Pour créer un projet, rendez-vous dans la section "Projets" du menu principal, puis cliquez sur le bouton "Créer un projet".'
    }]
})