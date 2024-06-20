<script setup>

// Bon lien :
// http://localhost:3000/auth/verify#access_token=eyJhbGciOiJIUzI1NiIsImtpZCI6ImxteFpUaGI2ZEgrZklsWVkiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzE4NjUyMDgzLCJpYXQiOjE3MTg2NDg0ODMsImlzcyI6Imh0dHBzOi8va21ueHZ1Y3JxaXR4cmVucGF2YXguc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6ImQxYTc2YTdmLTdkMjQtNGQ2MC04NjZkLWQ0YzRlZGMxYzUwMSIsImVtYWlsIjoidHJpc3Rhbi5waWVycmVsb3Vpcy5wcm9AZ21haWwuY29tIiwicGhvbmUiOiIiLCJhcHBfbWV0YWRhdGEiOnsicHJvdmlkZXIiOiJlbWFpbCIsInByb3ZpZGVycyI6WyJlbWFpbCJdfSwidXNlcl9tZXRhZGF0YSI6eyJlbWFpbCI6InRyaXN0YW4ucGllcnJlbG91aXMucHJvQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwicGhvbmVfdmVyaWZpZWQiOmZhbHNlLCJzdWIiOiJkMWE3NmE3Zi03ZDI0LTRkNjAtODY2ZC1kNGM0ZWRjMWM1MDEifSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJvdHAiLCJ0aW1lc3RhbXAiOjE3MTg2NDg0ODN9XSwic2Vzc2lvbl9pZCI6IjY0NGQ5NzMzLTIxYTQtNDBkYi04ZGEwLThhNDRkZDI1ZmI0NSIsImlzX2Fub255bW91cyI6ZmFsc2V9.9vgS-LkFNUQ6zlzG1sB17GjPHiSIL3eWm00-V0sf4-I&expires_at=1718652083&expires_in=3600&refresh_token=5zZCwRa7N27ZReuhhQ4Kuw&token_type=bearer&type=signup

// Mauvais lien :
// http://localhost:3000/auth/verify#error=access_denied&error_code=403&error_description=Email+link+is+invalid+or+has+expired

import { useRouter } from 'vue-router';
import { useEmailStore } from '#imports';

const router = useRouter();

onMounted(async () => {
    const { fullPath } = router.currentRoute.value;
    console.log(fullPath);

    const success = fullPath.includes('#access_token');

    if (success) {
        console.log('Success');
    } else {
        console.log('Error');
    }

    const token = fullPath.slice(fullPath.indexOf('#access_token=') + 14).split('&')[0];

    console.log(token);

    const emailStore = useEmailStore();

    console.log(emailStore);

    const email = emailStore.email;

    console.log(email);

    const checkToken = await $fetch('http://localhost:3001/auth/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            token
        },
    })

    console.log(checkToken);

    // C'est possible que le hash soit vide si l'user à rentrer manuellement l'url dans le navigateur
    if (hash == '') {
        navigateTo('/')
    }
});
</script>

<template>

</template>