import { defineStore } from 'pinia';

export const useProcessStore = defineStore('processing', {
  state: () => ({
    isOnProcess: false || true,
  }),
  actions: {
    setProcessStatus(status: boolean) {
      this.isOnProcess = status;
    },
    clearProcessStatus() {
      this.isOnProcess = false;
    },
  },
  persist: {
    storage: persistedState.localStorage
  }
});
