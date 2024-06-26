import { defineStore } from 'pinia';

export const usePasswordStore = defineStore('password', {
    state: () => ({
        password: '',
    }),
    actions: {
        setPassword(newPassword: string) {
            this.password = newPassword;
        },
        clearPassword() {
            this.password = '';
        },
    },
    persist: {
        storage: persistedState.localStorage
    }
});
