// ? If the user is already connected, the login button will be replaced by a button to access the dashboard
export default interface AuthItem {
    path: '/auth/login' | '/dashboard',
    text: 'Connexion' | 'Mon panel'
}