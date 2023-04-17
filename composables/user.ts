export const useLogin = () => useState(() => false);
export const useFoo = () => {
  return useState("foo", () => "bar");
};
