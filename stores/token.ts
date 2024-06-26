import { defineStore } from 'pinia';

export const useToken = defineStore('useToken', {
    state: () => ({
        token: '',
    }),
    actions: {
        setToken(newToken: string) {
            this.token = newToken;
        },
        clearToken() {
            this.token = '';
        },
    },
    persist: {
        storage: persistedState.localStorage
    }
});
