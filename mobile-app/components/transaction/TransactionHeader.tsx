import React from 'react';
import { HeadingEmphasized } from '../shared/typography';

interface TransactionHeaderProps {}

const TransactionHeader: React.FC<TransactionHeaderProps> = () => {
  return <HeadingEmphasized my='m'>Recent Activity</HeadingEmphasized>;
};
export default TransactionHeader;
