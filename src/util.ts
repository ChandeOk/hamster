export const getImageUrl = (name: string) => new URL(`./assets/${name}.png`, import.meta.url).href;
