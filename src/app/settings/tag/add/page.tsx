/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'

import { Paper } from '@mui/material'
import { useState } from 'react'
import { TagType } from 'types/dataType'

import { postData } from '@/utils/dataRequests'

const AddTag = () => {
  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState<string[]>([])
  const handleEnterPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      setInputValue('')
      setList([...list, inputValue.trim()])
    }
  }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const SaveTags = async () => {
    try {
      const data: TagType[] = await postData<TagType[]>(
        '/uploadTags',
        list.map((tag) => ({ tag })),
      )
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="text-center text-3xl p-3">Add tag</div>
      <Paper className="p-7">
        <input
          className="border border-3 border-black text-center"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleEnterPress}
          placeholder="input"
        />
        {list.length && (
          <div className="grid items-center align-middle">
            <ul key="tagList" className="p-3">
              {list.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => {
                      setList(list.slice(0, index).concat(list.slice(index + 1)))
                    }}
                  >{`${item} X`}</button>
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
  )
}

export default AddTag
