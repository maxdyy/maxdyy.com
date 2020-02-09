export const hasSessionStorage = () => {
  return !!sessionStorage;
};

export const setStorage = (key: string, obj: object) => {
  sessionStorage.setItem(key, JSON.stringify(obj));
};

export const getStorage = (key: string) =>
  JSON.parse(sessionStorage.getItem(key));
