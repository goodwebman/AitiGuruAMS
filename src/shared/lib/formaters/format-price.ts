export const formatPrice = (price: number) => {
  const [rub, kop] = price.toFixed(2).split('.');

  const formattedRub = new Intl.NumberFormat('ru-RU').format(Number(rub));

  return {
    rub: formattedRub,
    kop,
  };
};
