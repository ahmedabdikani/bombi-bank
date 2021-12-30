export default interface Transaction {
  id: string;
  amount: string;
  date: string;
  description: string;
  action: 'withdraw' | 'deposit';
}