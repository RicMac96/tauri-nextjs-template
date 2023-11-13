import ProcedureForm from '@/components/ProcedureForm';
import { getTags, getWindfarms } from '@/utils/dataRequests';

import { TagType, WindfarmType } from '../../../types/dataType';

const index = async () => {
  const windfarmList: WindfarmType[] = await getWindfarms();
  const tags: TagType[] = await getTags<TagType[]>();
  return (
    <ProcedureForm
      windfarmList={windfarmList}
      title="Create Procedure"
      tags={tags}
      buttonText="Save"
    />
  );
};
export default index;
