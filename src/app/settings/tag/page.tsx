import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Paper } from '@mui/material'
import Link from 'next/link'
import { TagType } from 'types/dataType'

import { getTags } from '@/utils/dataRequests'

const Tag = async () => {
  const tagList: TagType[] = await getTags<TagType[]>()
  /*   if (!tagList.length) {
    return <div>No Tags defined</div>
  } */
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
            <div key={item._id?.toString()}>{item.tag}</div>
          ))}
        </div>
      </Paper>
    </div>
  )
}

export default Tag
