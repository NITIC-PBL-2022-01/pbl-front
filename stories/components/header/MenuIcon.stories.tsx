import React from 'react';

import { MenuIcon } from '../../../components/Header/MenuIcon';

export default {
  title: 'Common/Header/MenuIcon',
  component: MenuIcon
};

export const Default = () => (
  <MenuIcon onClick={() => console.log('test')} />
);
