import { defineStore } from 'pinia';

export const useConfigStore = defineStore('configuration', {
  state: () => ({
    step: 0,
    accountType: '',
    schoolSiren: 0
  }),
  actions: {
    setData(step: number, accountType: string, schoolSiren: number) {
        this.step = step;
        this.accountType = accountType;
        this.schoolSiren = schoolSiren;
    },
    clearData() {
        this.step = 0;
        this.accountType = '';
        this.schoolSiren = 0;
    },
    increaseStep() {
        this.step++;
    }
  },
  persist: {
    storage: persistedState.localStorage
  }
});
