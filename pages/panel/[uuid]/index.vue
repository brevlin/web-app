<script lang="ts">
import {useRoute} from "vue-router";

export default {
  setup() {
    const tokenStore = useToken()
    const route = useRoute()

    console.log('tokenStore:', tokenStore.token)

    const userId = route.params.uuid as string

    if (tokenStore.token == '' || userId == '') {
      navigateTo('/auth')
      return
    }

    const verifyToken = async () => {
      try {
        const response = await $fetch('http://localhost:3002/auth/verify-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: tokenStore.token,
            uid: userId,
          }),
        }) as any

        console.log('response:', response)

        if (response.error) {
          navigateTo('/auth')
        }

        console.log('response:', response)
      } catch (error) {
        console.error('Error verifying token:', error)
      }
    }

    const unitConfigured = async () => {
      try {
        const response = await $fetch('http://localhost:3002/database/select-specific-row', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            tableName: 'SchoolMod',
            columnName: 'isUnitConfigured',
            rowName: 'uid',
            rowValue: userId,
          })
        }) as any

        console.log('response:', response)

        if (response) {
          navigateTo('/auth')
        }
      } catch (error) {
        console.error('Error verifying token:', error)
      }
    }

    onMounted(async () => {
      await verifyToken()
      await unitConfigured()
    })
  }
}
</script>

<template>

</template>

<style scoped>

</style>