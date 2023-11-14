/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import { useEffect, useState } from 'react';

import ReportForm from '@/components/ReportForm';
import { getData } from '@/utils/dataRequests';

import { WindfarmType } from '../../../types/dataType';

const Index = () => {
  const [windfarms, setWindfarms] = useState<WindfarmType[]>();
  useEffect(() => {
    async function loadInfo() {
      try {
        const data: WindfarmType[] = await getData('/getWindfarm');
        setWindfarms(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadInfo();
  }, []);
  if (!windfarms?.length) {
    return <div>No windfarm list </div>;
  }
  return <ReportForm windfarms={windfarms} title="Create Report" buttonText="Save" />;
};
export default Index;
