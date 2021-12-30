import React from 'react';

import Transaction from '../../types/transaction';
import { FlatList } from '../shared/list';
import { HeadingEmphasized } from '../shared/typography';
import TransactionHeader from './TransactionHeader';
import TransactionItem from './TransactionItem';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <FlatList
      data={transactions}
      ListHeaderComponent={TransactionHeader}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ paddingHorizontal: 8 }}
    >
      {({ item }) => <TransactionItem transaction={item} />}
    </FlatList>
  );
};
export default TransactionList;
