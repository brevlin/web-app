export default async function auth(type: string, username: string, email: string, password: string) { // Faut typer le paramètre type
    console.log(10);
    
    const res = await $fetch(`/auth/${type}`, {
        baseURL: 'http://localhost:3001',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
    });

    console.log(res);
    

    return res as any;
}