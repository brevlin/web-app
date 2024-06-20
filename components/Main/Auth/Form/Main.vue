<script lang="ts">
import { ElNotification } from 'element-plus';

const errorNotification = async () => {
  ElNotification.error({
    title: 'Erreur',
    message: 'Une erreur est survenue lors de l\'authentification. Veuillez réessayer.',
    showClose: false,
    duration: 3500,
  });
};

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

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useEmailStore, useProcessStore } from '#imports';

console.log(1);

const isRegistering = ref(false);
const isPasswordVisible = ref(false);

const toggleForm = () => {
  isRegistering.value = !isRegistering.value;
};

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const processBackgroundProcess = () => {
  const processBackgroundLoading = ElLoading.service({
    lock: true,
    background: 'rgba(0, 0, 0, 0.7)',
  })

  if (!isProcessing.value) {
    processBackgroundLoading.close();
  }
}

const username = ref('');
const email = ref('');
const password = ref('');

const usernameIsTooShort = ref(false);
const emailIsInvalid = ref(false);
const passwordIsInvalid = ref(false);
const passwordIsTooWeak = ref(false);
const isProcessing = ref(false);

const authentification = async () => {
  usernameIsTooShort.value = false;
  emailIsInvalid.value = false;
  passwordIsInvalid.value = false;
  passwordIsTooWeak.value = false;

  try {
    if (isRegistering.value) {
      // const res = await auth('signup', username.value, email.value, password.value);
      console.log(1);
      
      if (username.value.length < 3) {
        usernameIsTooShort.value = true;
      }

      const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);

      if (!emailIsValid) {
        emailIsInvalid.value = true;
      }

      const passwordIsValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password.value);

      if (!passwordIsValid) {
        passwordIsInvalid.value = true;
      }

      if (usernameIsTooShort.value || emailIsInvalid.value || passwordIsInvalid.value) {
        return errorNotification();
      }

      const processing = useProcessStore();
      // processing.setProcessStatus(true);
      processing.isOnProcess = true

      console.log('PROCESS STATUS :', processing.isOnProcess);
      
      
      isProcessing.value = true;

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
      }) as any

      if (res && res.name == 'AuthWeakPasswordError') {
        passwordIsTooWeak.value = true;
        isProcessing.value = false;
        return errorNotification();
      }

      if (res) {
        const emailStore = useEmailStore();
        emailStore.clearEmail();
        emailStore.setEmail(email.value);
        console.log('EMAIL :', emailStore.email);
        isProcessing.value = false;

        // alert('Regardes tes mails pour valider ton compte !') ! REMPLACER PAR LA REDIRECTION VERS UNE AUTRE PAGE
      }

      processing.clearProcessStatus();
    } else {
      // Login
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

onMounted(() => {
  console.log(2);
  // You can call authentification() here if needed, but it doesn't seem necessary based on your initial code
  // authentification();
});

</script>


<template>
  <form @submit.prevent="authentification">
    <div class="position-absolute left-0 w-100 z-3" data-aos="zoom-in" v-if="isProcessing">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="position-relative top-50pt w-100 h-100">
        <g stroke="white">
          <circle cx="12" cy="12" r="9.5" fill="none" stroke-linecap="round" stroke-width="0.9">
            <animate attributeName="stroke-dasharray" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0 150;42 150;42 150;42 150"/>
            <animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0;-16;-59;-59"/>
          </circle>
          <animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
        </g>
      </svg>
    </div>
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
    <p class="mb-0 clr-neutral-80 text-center mt-8">
      {{ isRegistering ? "J'ai déjà un compte" : "Vous n'avez pas de compte ?" }}
      <br>
      <ElLink type="primary" :underline="false" @click="toggleForm">
        {{ isRegistering ? "Se connecter" : "Créer un compte" }}
      </ElLink>
    </p>
    <div class="mt-8" v-if="isRegistering" data-aos="zoom-in">
      <ElTooltip
        content="Votre nom complet doit contenir au moins 3 caractères"
        placement="top-start"
        v-if="usernameIsTooShort"
        >
        <label class="clr-neutral-80 mb-2">
          Nom complet
          <span v-if="usernameIsTooShort">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128"><g fill="#A7001E"><path d="M68.97 31.66c-.64-.49-1.38-.85-2.24-1.05c-.85-.19-1.75-.3-2.72-.3c-.97 0-1.88.1-2.74.3c-.87.19-1.61.55-2.26 1.05c-.64.49-1.14 1.14-1.51 1.95c-.36.81-.55 1.83-.55 3.04c0 1.19.19 2.19.55 3.02c.37.81.87 1.48 1.51 1.97s1.39.85 2.26 1.06c.86.21 1.77.32 2.74.32c.96 0 1.87-.11 2.72-.32c.86-.21 1.6-.57 2.24-1.06c.64-.49 1.15-1.16 1.53-1.97c.38-.83.57-1.83.57-3.02c0-1.22-.19-2.24-.57-3.04c-.38-.81-.89-1.46-1.53-1.95M57.52 48.94h12.97v47.51H57.52z"/><path d="M64 .41C28.93.41.41 28.93.41 64c0 35.06 28.52 63.59 63.58 63.59S127.58 99.07 127.58 64C127.59 28.93 99.06.41 64 .41m0 118C34 118.41 9.6 94 9.6 64C9.6 34 34 9.59 64 9.59S118.41 34 118.41 64.01C118.4 94 93.99 118.41 64 118.41"/></g></svg>
          </span>
        </label>
      </ElTooltip>
      <label class="clr-neutral-80 mb-2" v-if="!usernameIsTooShort">
        Nom complet
      </label>
      <input
        v-model="username"
        type="text"
        name="#0"
        class="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-neutral-4 placeholder-50 focus-bg-none"
        placeholder="Jean Dupont"
        :class="{ 'border-danger-10': usernameIsTooShort }"
      />
    </div>

    <div class="mt-8">
      <ElTooltip
        content="L'adresse mail renseignée n'est pas correcte"
        placement="top-start"
        v-if="emailIsInvalid"
        >
      <label class="clr-neutral-80 mb-2">
        Adresse mail
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128"><g fill="#A7001E"><path d="M68.97 31.66c-.64-.49-1.38-.85-2.24-1.05c-.85-.19-1.75-.3-2.72-.3c-.97 0-1.88.1-2.74.3c-.87.19-1.61.55-2.26 1.05c-.64.49-1.14 1.14-1.51 1.95c-.36.81-.55 1.83-.55 3.04c0 1.19.19 2.19.55 3.02c.37.81.87 1.48 1.51 1.97s1.39.85 2.26 1.06c.86.21 1.77.32 2.74.32c.96 0 1.87-.11 2.72-.32c.86-.21 1.6-.57 2.24-1.06c.64-.49 1.15-1.16 1.53-1.97c.38-.83.57-1.83.57-3.02c0-1.22-.19-2.24-.57-3.04c-.38-.81-.89-1.46-1.53-1.95M57.52 48.94h12.97v47.51H57.52z"/><path d="M64 .41C28.93.41.41 28.93.41 64c0 35.06 28.52 63.59 63.58 63.59S127.58 99.07 127.58 64C127.59 28.93 99.06.41 64 .41m0 118C34 118.41 9.6 94 9.6 64C9.6 34 34 9.59 64 9.59S118.41 34 118.41 64.01C118.4 94 93.99 118.41 64 118.41"/></g></svg>
      </label>
      </ElTooltip>
      <label class="clr-neutral-80 mb-2" v-if="!emailIsInvalid">
        Adresse mail
      </label>
      <input
        v-model="email"
        type="email"
        name="#0"
        class="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-neutral-4 placeholder-50 focus-bg-none"
        placeholder="jean.dupont.pro@gmail.com"
        :class="{ 'border-danger-10': emailIsInvalid }"
      />
    </div>

    <div class="mt-8">
      <ElTooltip
        :content="passwordIsInvalid ? 'Le mot de passe renseigné doit contenir au moins 8 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial' : 'Le mot de passe renseigné est considéré comme trop faible et peut être facilement deviné, veuillez en choisir un plus robuste'"
        placement="top"
        v-if="passwordIsInvalid || passwordIsTooWeak"
        >
        <label class="clr-neutral-80 mb-2" v-if="passwordIsInvalid">
          Mot de passe
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128"><g fill="#A7001E"><path d="M68.97 31.66c-.64-.49-1.38-.85-2.24-1.05c-.85-.19-1.75-.3-2.72-.3c-.97 0-1.88.1-2.74.3c-.87.19-1.61.55-2.26 1.05c-.64.49-1.14 1.14-1.51 1.95c-.36.81-.55 1.83-.55 3.04c0 1.19.19 2.19.55 3.02c.37.81.87 1.48 1.51 1.97s1.39.85 2.26 1.06c.86.21 1.77.32 2.74.32c.96 0 1.87-.11 2.72-.32c.86-.21 1.6-.57 2.24-1.06c.64-.49 1.15-1.16 1.53-1.97c.38-.83.57-1.83.57-3.02c0-1.22-.19-2.24-.57-3.04c-.38-.81-.89-1.46-1.53-1.95M57.52 48.94h12.97v47.51H57.52z"/><path d="M64 .41C28.93.41.41 28.93.41 64c0 35.06 28.52 63.59 63.58 63.59S127.58 99.07 127.58 64C127.59 28.93 99.06.41 64 .41m0 118C34 118.41 9.6 94 9.6 64C9.6 34 34 9.59 64 9.59S118.41 34 118.41 64.01C118.4 94 93.99 118.41 64 118.41"/></g></svg>
        </label>
      </ElTooltip>
      <label class="clr-neutral-80 mb-2" v-if="!passwordIsInvalid">
        Mot de passe
      </label>

      <div class="pass-field-area">
        <input
          v-model="password"
          :type="isPasswordVisible ? 'text' : 'password'"
          name="#0"
          class="form-control border border-neutral-17 clr-neutral-90 :focus-clr-current rounded-2 py-4 px-4 bg-neutral-4 placeholder-50 focus-bg-none"
          placeholder="Mot de passe robuste"
          :class="{ 'border-danger-10': passwordIsInvalid || passwordIsTooWeak }"
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

    <!-- <button
      type="submit"
      class="link d-inline-flex justify-content-center align-items-center gap-2 py-4 px-6 border border-primary-key bg-primary-key rounded-1 fw-bold clr-white border-0 w-100 mt-8 :arrow-btn"
    >
      <span v-if="isRegistering">
        <p v-if="!isProcessing">Créer un compte</p>
        <span v-if="isProcessing">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g stroke="currentColor"><circle cx="12" cy="12" r="9.5" fill="none" stroke-linecap="round" stroke-width="3"><animate attributeName="stroke-dasharray" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0 150;42 150;42 150;42 150"/><animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0;-16;-59;-59"/></circle><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></g></svg>
        </span>
      </span>
      <span v-else>
        Se connecter
        <span v-if="isProcessing">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g stroke="currentColor"><circle cx="12" cy="12" r="9.5" fill="none" stroke-linecap="round" stroke-width="3"><animate attributeName="stroke-dasharray" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0 150;42 150;42 150;42 150"/><animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0;-16;-59;-59"/></circle><animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></g></svg>
        </span>
      </span>
    </button> -->

    <div class="width-100">
      <SnippetButtonAuth class="link d-inline-flex justify-content-center align-items-center gap-2 py-4 px-6 border border-primary-key rounded-1 fw-bold clr-white border-0 w-100 mt-8"
        :name="isRegistering ? 'Créer un compte' : 'Se connecter'"
      />
    </div>

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

.top-50pt {
  top: 50%
}

.left-0 {
  left: 0;
}
</style>
