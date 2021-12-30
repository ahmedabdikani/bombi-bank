import { wallets } from "../data/mock";

const currencyConverter = (currency:typeof wallets[number]['currency'] , amount: number) => {
  switch (currency) {
    case 'ETH':
      return amount * 0.0012;
    case 'DOGE':
      return amount * 0.0012;
    case 'BTC':
      return amount * 0.0012;
    case 'LTC':
      return amount * 0.0012;
    default:
      return amount;
  }
}

export default currencyConverter;