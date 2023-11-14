/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from 'react';

import ReportForm from '@/components/ReportForm';
import { getData, getItem } from '@/utils/dataRequests';

import { ReportType, WindfarmType } from '../../../../types/dataType';

const Index = ({ params }: { params: { id: string } }) => {
  const [windfarms, setWindfarms] = useState<WindfarmType[]>();
  const [report, setReport] = useState<ReportType>();

  useEffect(() => {
    async function loadInfo() {
      const dataWindfarms: WindfarmType[] =
        await getData<WindfarmType[]>('/getWindfarms');
      setWindfarms(dataWindfarms);
      const dataReport: ReportType = await getItem<ReportType>('/getReport', params.id);
      setReport(dataReport);
    }
    loadInfo();
  }, [params.id]);

  if (!params.id) {
    return <div>No params id defined</div>;
  }

  if (!report || !windfarms?.length)
    return <div>{`Results not found for ${params.id}`}</div>;
  return (
    <ReportForm
      windfarms={windfarms}
      title="Update Report"
      buttonText="Update"
      report={report}
    />
  );
};

export default Index;
