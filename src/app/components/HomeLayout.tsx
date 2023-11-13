/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client'

import { useEffect, useState } from 'react'

import { useGlobalContext } from '@/utils/context'
import { getReports } from '@/utils/dataRequests'
import searchWithinObject from '@/utils/searchWithin'

import { ReportType } from '../../../types/dataType'
import ReportMainMenu from './reportMainView'

const HomeLayout = () => {
  const { filter } = useGlobalContext()
  console.log(filter)
  const [reports, setReports] = useState<ReportType[] | undefined>()
  const [fullList, setFullList] = useState<ReportType[] | undefined>()

  useEffect(() => {
    async function fetchReports() {
      try {
        console.log('Reports updated')
        const data = await getReports()
        setReports(data)
        setFullList(data)
      } catch (error) {
        console.error('Error fetching reports:', error)
      }
    }
    fetchReports()
  }, [])

  useEffect(() => {
    if (filter) {
      setReports(searchWithinObject(filter, fullList))
    } else {
      setReports(fullList)
    }
  }, [filter, searchWithinObject])

  if (!reports) return <div></div>

  return (
    <div>
      <div className="flex w-full justify-center p-6 text-5xl">Report</div>
      <div className="mx-auto grid w-full content-center gap-6">
        {reports.map((item, index) => (
          <ReportMainMenu report={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default HomeLayout
