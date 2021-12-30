import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import dayjs from 'dayjs';

import { useThemeColors } from '../../hooks/useThemeColor';
import Transaction from '../../types/transaction';
import Card from '../shared/Card';
import { BodyEmphasized, Caption } from '../shared/typography';
import View from '../shared/View';

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const { action, amount, date, description } = transaction;
  const isWithdraw = action === 'withdraw';
  const {
    error,
    success,
    tint: { primary, secondary },
  } = useThemeColors();
  return (
    <View direction='row' justify='space-between' align='center' mb='m'>
      <View direction='row' align='center'>
        <Card size={48} place='center' mr='m'>
          {isWithdraw ? (
            <Ionicons name='arrow-down' size={24} color={secondary} />
          ) : (
            <Ionicons name='arrow-up' size={24} color={primary} />
          )}
        </Card>
        <View>
          <BodyEmphasized mb='s'>{description}</BodyEmphasized>
          <Caption>{dayjs(date).format('MMMM, DD YYYY')}</Caption>
        </View>
      </View>
      <BodyEmphasized color={isWithdraw ? error : success}>
        {isWithdraw ? '-' : '+'}
        {amount}
        <Caption color='gray'> USD</Caption>
      </BodyEmphasized>
    </View>
  );
};
export default TransactionItem;
