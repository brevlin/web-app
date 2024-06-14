<script lang="ts">
// TODO : Requete à l'API pour voir si il y a une annonce en cours
// Si il y a une annonce en cours, on affiche le composant
// Sinon, on ne fait rien

// Données pour l'exemple
export default {
  data() {
    return {
        isAnnouncement: true,
        title: 'Nouvelle promotion',
        text: 'Obtenez 50% de réduction sur votre prochain achat',
        url: '/pricing'
    }
  }
}
</script>

<template>
    <div class="py-3" v-if="isAnnouncement">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
              <div class="d-flex align-items-center justify-content-center flex-wrap gap-3">
                <span class="d-inline-block py-1 px-2 rounded bg-success ff-1 fs-12 fw-bold flex-shrink-0"> {{ title }} </span>
                  <NuxtLink :to="url" id="strip-link">
                    <span class="d-block text-center text-md-start ff-1 fs-12 fw-semibold clr-white"> {{ text }} </span>
                  </NuxtLink>
              </div>
          </div>
        </div>
      </div>
    </div>
    <span v-else>
        <!-- Nothing to show -->
    </span>
</template>

<style scoped>
#strip-link {
  text-decoration: none
}
</style>