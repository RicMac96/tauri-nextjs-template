'use client';

/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from 'react';

import ProcedureForm from '@/components/ProcedureForm';
import { getData, getItem } from '@/utils/dataRequests';

import { ProcedureType, TagType, WindfarmType } from '../../../../types/dataType';

const Index = ({ params }: { params: { id: string } }) => {
  const [windfarms, setWindfarms] = useState<WindfarmType[]>();
  const [tags, setTags] = useState<TagType[]>();
  const [procedure, setProcedure] = useState<ProcedureType>();

  useEffect(() => {
    async function loadInfo() {
      try {
        const data: WindfarmType[] = await getData<WindfarmType[]>('/getWindfarms');
        setWindfarms(data);
        const dataTags: TagType[] = await getData<TagType[]>('/getTags');
        setTags(dataTags);
        const dataProcedure: ProcedureType = await getItem<ProcedureType>(
          '/getProcedure',
          params.id,
        );
        setProcedure(dataProcedure);
      } catch (error) {
        console.error(error);
      }
    }
    loadInfo(); // Invoke the function inside the useEffect
  }, [params.id]);

  if (!params.id) {
    return <div>{`No procedure found with the id ${params.id}`} </div>;
  }

  if (!procedure || !windfarms?.length || !tags?.length)
    return <div>{`Results not found for ${params.id}`}</div>;

  return (
    <ProcedureForm
      windfarms={windfarms}
      title="Update Report"
      buttonText="Update"
      tags={tags}
      procedure={procedure}
    />
  );
};

export default Index;
