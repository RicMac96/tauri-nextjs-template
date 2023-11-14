/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import { useEffect, useState } from 'react';

import ProcedureForm from '@/components/ProcedureForm';
import { getData } from '@/utils/dataRequests';

import { TagType, WindfarmType } from '../../../types/dataType';

const Index = () => {
  const [windfarms, setWindfarms] = useState<WindfarmType[]>();
  const [tags, setTags] = useState<TagType[]>();
  useEffect(() => {
    async function loadInfo() {
      try {
        const data: WindfarmType[] = await getData<WindfarmType[]>('/getWindfarms');
        setWindfarms(data);
        const dataTags: TagType[] = await getData<TagType[]>('/getTags');
        setTags(dataTags);
      } catch (error) {
        console.error(error);
      }
    }
    loadInfo(); // Invoke the function inside the useEffect
  }, []);

  if (!tags) {
    return <div>Not found tags list</div>;
  }
  if (!windfarms) {
    return <div>Not found Windfarms List</div>;
  }
  return (
    <ProcedureForm
      windfarms={windfarms}
      title="Create Procedure"
      tags={tags}
      buttonText="Save"
    />
  );
};
export default Index;
