export default async function auth(type: string, username: string, email: string, password: string) { // Faut typer le paramètre type
    const res = await $fetch(`/auth/${type}`, {
        baseURL: 'http://localhost:3001',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    return res as any;
}