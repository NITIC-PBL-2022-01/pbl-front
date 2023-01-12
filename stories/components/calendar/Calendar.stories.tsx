import React from 'react';
import { Calendar } from '../../../components/Calendar/Index';

export default {
  title: 'Common/Calendar/Calendar',
  component: Calendar,
};

export const Default = () => (
  <Calendar events={[{ title: "This is event", color: "#F00" }]} year={2023} month={2} />
);
