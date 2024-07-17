export default interface Account {
    type: 'user' | 'admin',
    role: 'student' | 'teacher' | 'admin' | 'root' | 'parent', // ? Entreprise (recruteur) ?
}