/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ReportForm from '@/components/ReportForm';
import { getReport, getWindfarms } from '@/utils/dataRequests';

import { ReportType, WindfarmType } from '../../../../types/dataType';

const Index = async ({ params }: { params: { id: string } }) => {
  const windfarmList: WindfarmType[] | undefined = await getWindfarms();
  const report: ReportType | undefined = await getReport(params.id);
  if (!report || !windfarmList.length)
    return <div>{`Results not found for ${params.id}`}</div>;
  return (
    <ReportForm
      windfarmList={windfarmList}
      title="Update Report"
      buttonText="Update"
      report={report}
    />
  );
};

export default Index;
