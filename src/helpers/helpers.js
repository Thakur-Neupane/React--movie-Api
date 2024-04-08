export const randmonChar = () => {
  const str = "qwertyuioplkjhgfdsazxcvbnm";
  return str[Math.floor(Math.random() * str.length)];
};
