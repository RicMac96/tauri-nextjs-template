'use client';

import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TagType } from 'types/dataType';

import { deleteItem } from '@/utils/dataRequests';

interface Props {
  tag: TagType;
}

const deleteItemTag = async (tag: TagType) => {
  try {
    if (confirm(`Eliminate ${tag.tag} ?`)) {
      const data: TagType = await deleteItem<TagType>('/deleteTag', tag._id.toString());
      console.log(data);
    }
  } catch (error) {
    console.error(error);
  }
};

const TagItem = ({ tag }: Props) => {
  return (
    <div className="flex items-center text-lg">
      {tag.tag}
      <button className="p-3" onClick={() => deleteItemTag(tag)}>
        <FontAwesomeIcon icon={faDeleteLeft} />
      </button>
    </div>
  );
};

export default TagItem;
