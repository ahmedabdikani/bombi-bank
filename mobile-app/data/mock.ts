import Transaction from "../types/transaction";

const transactions: Transaction[] = [
  {
    id: '1',
    description: 'Transfer to eBay',
    amount: '83.43',
    date: '2019-01-01',
    action: 'withdraw',
  },
  {
    id: '2',
    description: 'Received DOGE',
    amount: '100.00',
    date: '2020-01-01',
    action: 'deposit',
  },
  {
    id: '3',
    description: 'Sent USDT',
    amount: '52.00',
    date: '2014-05-23',
    action: 'withdraw',
  },
  {
    id: '4',
    description: 'Transfer to eBay',
    amount: '73.43',
    date: '2020-02-01',
    action: 'withdraw',
  },
  {
    id: '5',
    description: 'Transfer to eBay',
    amount: '43.43',
    date: '2020-03-31',
    action: 'withdraw',
  },
  {
    id: '6',
    description: 'Transfer to eBay',
    amount: '83.43',
    date: '2019-01-01',
    action: 'withdraw',
  },
  {
    id: '7',
    description: 'Received DOGE',
    amount: '100.00',
    date: '2020-01-01',
    action: 'deposit',
  },
  {
    id: '8',
    description: 'Sent USDT',
    amount: '52.00',
    date: '2014-05-23',
    action: 'withdraw',
  },
  {
    id: '9',
    description: 'Transfer to eBay',
    amount: '73.43',
    date: '2020-02-01',
    action: 'withdraw',
  },
  {
    id: '10',
    description: 'Transfer to eBay',
    amount: '43.43',
    date: '2020-03-31',
    action: 'withdraw',
  },
];

const wallets = [
  {
    id: '1',
    name: 'Pupipay',
    balance: '932',
    currency: 'PPY',
    description: 'Trading Wallet',
  },
  {
    id: '2',
    name: 'Bombi',
    balance: '2.323',
    currency: 'RMB',
    description: 'Shopping',
  },
  {
    id: '3',
    name: 'Zupcoin',
    balance: '4.877',
    currency: 'ZUP',
    description: 'Savings',
  },
];

const cryptocurrencies = [
  {
    id: '1',
    name: 'Ethereum',
    balance: '40.2819321',
    currency: 'ETH',
    icon: require('../assets/images/ethereum.png'),
  },
  {
    id: '2',
    name:'Dogecoin',
    balance: '98,488.19',
    currency: 'DOGE',
    icon: require('../assets/images/doge.png'),
  },
  {
    id: '3',
    name: 'Bitcoin',
    balance: '31,988.19',
    currency: 'BTC',
    icon: require('../assets/images/bitcoin.png'),
  },
  {
    id: '4',
    name: 'Litecoin',
    balance: '18,11.00',
    currency: 'LTC',
    icon: require('../assets/images/litecoin.png'),
  },
  {
    id: '5',
    name:'Zupcoin',
    balance: '4.877',
    currency: 'ZUP',
    icon: require('../assets/images/zupcoin.png'),
  },{
    id: '6',
    name: 'Pupipay',
    balance: '932',
    currency: 'PPY',
    icon: require('../assets/images/pupipay.png'),
  },
  {
    id: '7',
    name:'Bankbitcoin',
    balance: '1,000,000',
    currency: 'BKB',
    icon: require('../assets/images/bankbitcoin.png'),
  },
  {
    name:'Binance',
    balance: '1,000,000',
    currency: 'BNB',
    icon: require('../assets/images/binance.png'),  
  } 
  
]as const


const notifications = [
  {
    title: 'New',
    data: [
      {
        id: '1',
        title: 'Delayed Payment',
        message: 'Shopping payments for Tiktok',
        date: '11/7/16',
        image: require('../assets/images/payment.png'),
      },
      {
        id: '2',
        title: 'Delayed Payment',
        message: 'Shopping payments for Tiktok',
        date: '11/7/16',
        image: require('../assets/images/netflix.png'),
      },
      {
        id: '3',
        title: 'Delayed Payment',
        message: 'Shopping payments for Tiktok',
        date: '11/7/16',
        image: require('../assets/images/adobe.png'),
      },
    ],
  },

  {
    title: 'Old',
    data: [
      {
        id: '4',
        title: 'Delayed Payment',
        message: 'Shopping payments for Tiktok',
        date: '11/7/16',
        image: require('../assets/images/zupapp.png'),
      },
    ],
  },
];

const countries = [
  {
    name: 'United States',
    code: 'US',
  },
  {
    name: 'Canada',
    code: 'CA',
  },
  {
    name: 'Australia',
    code: 'AU',
  },
  {
    name: 'United Kingdom',
    code: 'UK',
  },
  {
    name: 'Germany',
    code: 'DE',
  },
  {
    name: 'France',
    code: 'FR',
  },
  {
    name: 'Italy',
    code: 'IT',
  },
  {
    name: 'Japan',
    code: 'JP',
  },
  {
    name: 'Spain',
    code: 'ES',
  },
  {
    name: 'Brazil',
    code: 'BR',
  },
  {
    name: 'China',
    code: 'CN',
  },
  {
    name: 'Russia',
    code: 'RU',
  },
  {
    name: 'India',
    code: 'IN',
  },
  {
    name: 'Mexico',
    code: 'MX',
  },
  {
    name: 'South Korea',
    code: 'KR',
  },
  {
    name: 'Turkey',
    code: 'TR',
  },
  {
    name: 'Indonesia',
    code: 'ID',
  },
  {
    name: 'Nigeria',
    code: 'NG',
  },
  {
    name: 'Saudi Arabia',
    code: 'SA',
  },
  {
    name: 'Switzerland',
    code: 'CH',
  },
  {
    name: 'Australia',
    code: 'AU',
  },
  {
    name: 'Malaysia',
    code: 'MY',
  },
  {
    name: 'Singapore',
    code: 'SG',
  },
  {
    name: 'Hong Kong',
    code: 'HK',
  },
  {
    name: 'New Zealand',
  }
]

export {
  transactions,
  wallets,
  cryptocurrencies,
  countries,
  notifications
}