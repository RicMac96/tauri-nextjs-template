import ReportForm from '@/app/components/ReportForm'
import { getWindfarms } from '@/utils/dataRequests'

import { WindfarmType } from '../../../types/dataType'

const index = async () => {
  const windfarmList: WindfarmType[] = await getWindfarms()
  return (
    <ReportForm windfarmList={windfarmList} title="Create Report" buttonText="Save" />
  )
}
export default index
