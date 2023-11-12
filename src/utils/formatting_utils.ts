export const toBRL = (price: number): string => (
  price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).replace(/\s+/g, '')
);