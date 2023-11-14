/* eslint-disable @typescript-eslint/no-floating-promises */
'use client';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Paper } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { TagType } from 'types/dataType';

import TagItem from '@/components/TagItem';
import { getData } from '@/utils/dataRequests';

const Tag = () => {
  const [tagList, setTagList] = useState<TagType[]>();
  useEffect(() => {
    async function loadInfo() {
      try {
        const data = await getData<TagType[]>('/getTags');
        setTagList(data);
      } catch (error) {
        console.error(error);
      }
    }
    loadInfo(); // Invoke the function inside the useEffect
  }, []);

  if (!tagList) {
    return <div>Tag list not found</div>;
  }
  return (
    <div>
      <div className="text-3xl flex p-3 items-center">
        <div>Tags</div>
        <Link className="ml-3" href="/settings/tag/add" passHref>
          <FontAwesomeIcon icon={faPlusCircle} />
        </Link>
      </div>
      <Paper className="p-7">
        <div className="grid">
          {tagList.map((item) => (
            <div key={item._id.toString()}>
              <TagItem tag={item} />
            </div>
          ))}
        </div>
      </Paper>
    </div>
  );
};

export default Tag;
