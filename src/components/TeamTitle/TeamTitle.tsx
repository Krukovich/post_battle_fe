import React from 'react';
import { TitleWrapper } from '../../styled';
import { MATCH_STATUS } from '../../constants';

interface IComponentProps {
  teamTitle: string;
  status: string;
}

const TeamTitle: React.FC<IComponentProps> = ({ teamTitle, status }: IComponentProps): JSX.Element => {
  return <TitleWrapper win={status === MATCH_STATUS.WIN}>{teamTitle}</TitleWrapper>;
};

export default TeamTitle;
