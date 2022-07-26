import React from 'react';
import { MatchTitleWrapper } from '../../styled';

interface IComponentProps {
  title: string;
}

const MatchTitle: React.FC<IComponentProps> = ({ title }: IComponentProps): JSX.Element => {
  return <MatchTitleWrapper>{title}</MatchTitleWrapper>;
};

export default MatchTitle;
