<script>
import { ElNotification } from 'element-plus'

const open = () => {
  ElNotification.success({
    title: 'Vérification',
    message: 'Un email de confirmation vous a été envoyé',
    showClose: false,
  })
}

export default {
  name: "Main",
  props: {
    name: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
};
</script>

<script setup>
const isRegistering = ref(false);
const isPasswordVisible = ref(false);

const toggleForm = () => {
  isRegistering.value = !isRegistering.value;
};

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const username = ref('');
const email = ref('');
const password = ref('');

const authentification = async () => {
    try {
        if (isRegistering.value) {
            // Register
            // const response = await axios.post('http://localhost:3001/register', {
            //     username: username.value,
            //     email: email.value,
            //     password: password.value,
            // });
            // alert('Registration successful');

            const res = await $fetch('http://localhost:3001/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username.value,
                    email: email.value,
                    password: password.value,
                }),
            });

            console.log(res);

            if (res) {
                open();
            }
        } else {
            // Login
            // const response = await axios.post('http://localhost:3001/login', {
            //     email: email.value,
            //     password: password.value,
            // });
            // const token = response.data.token;
            // // Save the token to localStorage or a cookie
            // localStorage.setItem('token', token);
            // alert('Login successful');

            const res = await $fetch('http://localhost:3001/auth/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email.value,
                    password: password.value,
                }),
            });

            console.log(res);
        }
    } catch (error) {
        console.error(error);
        alert('Authentication failed');
    }
};
</script>

<template>
  <form @submit.prevent="authentification()">
    <div
      class="d-flex flex-wrap gap-xl-6 gap-4 align-items-center justify-content-center mt-6"
    >
      <MainAuthFormOauth
        path="/auth/google"
        image="/svg/google.svg"
        name="Google"
      />
      <MainAuthFormOauth
        path="/auth/linkedin"
        image="/svg/linkedin.svg"
        name="Linkedin"
      />
    </div>
    <div class="mt-8" v-if="isRegistering" data-aos="zoom-in">
      <label class="clr-neutral-80 mb-2">Nom d'utilisateur</label>
      <input
        v-model="username"
        type="text"
        name="#0"
        class="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-neutral-4 placeholder-50 focus-bg-none"
        placeholder="Entrez votre nom d'utilisateur"
      />
    </div>

    <div class="mt-8">
      <label class="clr-neutral-80 mb-2">Email</label>
      <input
        v-model="email"
        type="email"
        name="#0"
        class="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-neutral-4 placeholder-50 focus-bg-none"
        placeholder="Entrez votre adresse mail"
      />
    </div>

    <div class="mt-8">
      <label class="clr-neutral-80 mb-2">Mot de passe</label>
      <div class="pass-field-area">
        <input
            v-model="password"
          :type="isPasswordVisible ? 'text' : 'password'"
          name="#0"
          class="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-neutral-4 placeholder-50 focus-bg-none"
          placeholder="Entrez votre mot de passe"
        />
        <button
          type="button"
          class="bg-transparent border-0 pass-eye"
          @click="togglePasswordVisibility"
        >
          <svg
            v-if="!isPasswordVisible"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            class="eye-off"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 6.362A9.707 9.707 0 0 1 12 5c6.307 0 9.367 5.683 9.91 6.808c.06.123.06.261 0 .385c-.352.728-1.756 3.362-4.41 5.131M14 18.8a9.93 9.93 0 0 1-2 .2c-6.307 0-9.367-5.683-9.91-6.808a.44.44 0 0 1 0-.386c.219-.452.84-1.632 1.91-2.885m6 .843A3 3 0 0 1 14.236 14M3 3l18 18"
            />
          </svg>
          <svg
            v-if="isPasswordVisible"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 1024 1024"
            class="eye-on"
          >
            <path
              fill="currentColor"
              d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3c7.7-16.2 7.7-35 0-51.5M512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258s279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766m-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176m0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112s112 50.1 112 112s-50.1 112-112 112"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      class="d-flex flex-wrap align-items-center justify-content-between mt-8"
    >
      <div class="form-check check-box check-box check-box-neutral-30 gap-1">
        <input
          class="form-check-input clr-white my-auto border-0 bg-neutral-17 cursor-pointer"
          type="checkbox"
          id="n30dash"
        />
        <label class="form-check-label clr-neutral-80 fs-12 ps-1" for="n30dash">
          Se souvenir de moi
        </label>
      </div>
      <NuxtLink
        to="/auth/recovery"
        class="link clr-neutral-80 fs-12 :clr-primary-key"
        >Mot de passe oublié</NuxtLink
      >
    </div>

    <button
      type="submit"
      class="link d-inline-flex justify-content-center align-items-center gap-2 py-4 px-6 border border-primary-key bg-primary-key rounded-1 fw-bold clr-white border-0 w-100 mt-8 :arrow-btn"
    >
      <span>Se connecter</span>
    </button>

    <p class="mb-0 clr-neutral-80 text-center mt-8">
      <ElButton type="primary" text @click="toggleForm">
        {{ isRegistering ? "Se connecter" : "Créer un compte" }}
      </ElButton>
    </p>

    <div class="text-center mt-6">
      <NuxtLink
        to="/"
        class="link d-inline-flex justify-content-center align-items-center gap-2 py-2 px-4 border border-primary-key bg-primary-key :bg-primary-30 rounded-pill fs-14 fw-bold text-center clr-white"
      >
        <span class="d-block"> Accueil </span>
      </NuxtLink>
    </div>
  </form>
</template>

<style scoped>
#n30dash {
  margin-left: unset;
}

#n30dash:checked + label {
  color: #fff;
}
</style>
