export const clients = [...new Array(10)].map((client, index) => ({
  href: `/companies/${index + 1}.png`,
}));
