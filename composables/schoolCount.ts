export const useSchoolCount = (val: number) => {
    if (val > 1000) {
        return Math.floor(val / 100) * 100 + "+";
    } else {
        return val.toString();
    }
}
  