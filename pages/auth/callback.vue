<script lang="ts">
console.log('Hello from callback page');
export default {
  setup() {
    const route = useRoute();
    const isLoading = ref(true);
    const token = ref('');
    const callbackIsSuccess = ref(false);
    const emailStore = useEmailStore();
    const userTokenStore = useToken();
    const passwordStore = usePasswordStore();

    let userId = '';

    const fetchTokenData = async (token: string) => {
      try {
        const checkToken = await $fetch('http://localhost:3002/auth/verify', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: {token},
        }) as any;

        console.log('checkToken:', checkToken)

        if (checkToken) {
          emailStore.setEmail(checkToken.email);
          // userTokenStore.setToken(checkToken.session.refresh_token);
          callbackIsSuccess.value = true;
          userId = checkToken.id

          const loginUser = await $fetch('http://localhost:3002/auth/signin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: emailStore.email,
              password: passwordStore.password,
            }),
          }) as any

          userTokenStore.setToken(loginUser.session.data.session.access_token)

          const createUser = await $fetch('http://localhost:3002/database/insert-and-select', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              tableName: 'User',
              data: {
                full_name: useNameStore().name,
                type: 'schoolMod',
                email: emailStore.email,
                is_premium: false,
              }
            }),
          }) as any

          if (createUser.error) {
            callbackIsSuccess.value = false;
          }

          const createSchoolMod = await $fetch('http://localhost:3002/database/insert-and-select', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              tableName: 'SchoolMod',
              data: {
                User: createUser.uid,
                role: 'admin',
                isUnitConfigured: false,
              }
            }),
          }) as any

          if (createSchoolMod.error) {
            return callbackIsSuccess.value = false;
          }

          return callbackIsSuccess.value = true;
        } else {
          console.log('Error verifying token:', checkToken)
          callbackIsSuccess.value = false;
        }
      } catch (error) {
        console.error('Error verifying token:', error);
        callbackIsSuccess.value = false;
      } finally {
        isLoading.value = false;
      }
    };

    console.log('callbackIsSuccess:', callbackIsSuccess.value);

    const extractToken = () => {
      const fullPath = route.fullPath;
      if (fullPath.indexOf('#access_token=') !== -1) {
        const tokenValue = fullPath.slice(fullPath.indexOf('#access_token=') + 14).split('&')[0];
        if (tokenValue) {
          token.value = tokenValue;
          fetchTokenData(tokenValue);
        } else {
          navigateTo('/')
        }
      } else {
        callbackIsSuccess.value = false;
      }
    };

    console.log('callbackIsSuccess:', callbackIsSuccess.value);

    onMounted(() => {
      extractToken();
    });

    watch(() => route.fullPath, () => {
      extractToken();
    });

    console.log('callbackIsSuccess:', callbackIsSuccess.value);

    watch(callbackIsSuccess, (newValue) => {
      console.log('callbackIsSuccess:', newValue);
    });

    const pageData = computed(() => {
      if (callbackIsSuccess.value) {
        return {
          title: 'Bienvenue !',
          description: 'Faites vos premiers pas sur Brevlin, créez votre espace personnel et configurez votre compte dès maintenant',
          buttonText: 'C\'est parti !',
          img: '/bg/auth/success.png',
          link: `/panel/${userId}`,
          bgClass: 'c-bg-success'
        };
      } else {
        return {
          title: 'Erreur',
          description: 'Erreur lors de la création de votre compte.',
          buttonText: 'Retourner à l\'accueil',
          img: '/bg/auth/error.png',
          link: '/',
          bgClass: 'c-bg-error'
        };
      }
    });

    return {
      isLoading,
      pageData
    };
  }
}
</script>

<template>
  <div class="full" :class="pageData.bgClass">
    <DashboardAuthSignup v-if="!isLoading"
     :title="pageData.title"
     :description="pageData.description"
     :buttonText="pageData.buttonText"
     :img="pageData.img"
     :link="pageData.link"
     :is-loading="isLoading"
    />
  </div>
</template>

<style src="/assets/css/dashboard.bundle.css"></style>
<style scoped>
.c-bg-success {
  background: linear-gradient(-60deg, rgb(138, 185, 255) 50%, rgb(69, 103, 178) 50%);
}

.c-bg-error {
  background: linear-gradient(-60deg, rgb(255, 138, 138) 50%, rgb(178, 69, 69) 50%);
}

.full {
  height: 100vh;
}
</style>