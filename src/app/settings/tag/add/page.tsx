/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';

import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Paper } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { TagType } from 'types/dataType';

import { postData } from '@/utils/dataRequests';

const AddTag = () => {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();
  const [list, setList] = useState<string[]>([]);
  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      setInputValue('');
      setList([...list, inputValue.trim()]);
    }
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const SaveTags = async () => {
    try {
      const data: TagType[] = await postData<TagType[]>(
        '/uploadTags',
        list.map((tag) => ({ tag })),
      );
      if (data.length > 0) {
        router.replace('/settings/tag');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="text-center text-3xl p-3">Add tag</div>
      <Paper className="p-7">
        <div className="flex flex-row">
          <input
            className="border border-3 border-black text-center mr-3"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleEnterPress}
          />
          <div className="text-2xl">↵</div>
        </div>
        {list.length > 0 && (
          <div className="grid items-center align-middle">
            <ul key="tagList" className="p-3">
              {list.map((item, index) => (
                <li key={index}>
                  {item}
                  <button
                    onClick={() => {
                      setList(list.slice(0, index).concat(list.slice(index + 1)));
                    }}
                  >
                    <FontAwesomeIcon icon={faDeleteLeft} className="ml-2 p-0" />
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="bg-green p-3 rounded-full w-full font-semibold"
              onClick={SaveTags}
            >
              Save
            </button>
          </div>
        )}
      </Paper>
    </div>
  );
};

export default AddTag;
