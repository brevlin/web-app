import { defineStore } from 'pinia';

export const useNameStore = defineStore('name', {
    state: () => ({
        name: '',
    }),
    actions: {
        setName(newName: string) {
            this.name = newName;
        },
        clearName() {
            this.name = '';
        },
    },
    persist: {
        storage: persistedState.localStorage
    }
});
