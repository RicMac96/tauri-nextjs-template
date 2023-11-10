"use client"

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useEffect, useState } from "react"

import ReportForm from "@/app/components/ReportForm"
import { getReport, getWindfarms } from "@/utils/dataRequests"

import { ReportType, WindfarmType } from "../../../../types/dataType"

const Index = ({ params }: { params: { id: string } }) => {
  const [windfarmList, setWindfarmList] = useState<WindfarmType[] | undefined>()
  const [report, setReport] = useState<ReportType | undefined>()
  useEffect(() => {
    async function getValues() {
      try {
        const data = await getWindfarms()
        setWindfarmList(data)
        const data2 = await getReport(params.id)
        setReport(data2)
      } catch {
        console.log("error")
      }
    }
    getValues()
  }, [params.id])
  if (!windfarmList && !report) {
    return <div>Loading</div>
  }
  return (
    <ReportForm
      windfarmList={windfarmList}
      title="Update Report"
      buttonText="Update"
      report={report}
    />
  )
}

export default Index
