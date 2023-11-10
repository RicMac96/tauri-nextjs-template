/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReportTypeLoaded, WindfarmType } from "../../types/dataType"

const BACKEND_URL = "http://localhost:3000"

const getReports = async () => {
  const response = await fetch(`${BACKEND_URL}/api/getReports`, {
    cache: "no-cache",
  })
  const data = await response.json()
  return data.sort(
    (a: ReportTypeLoaded, b: ReportTypeLoaded) =>
      Date.parse(b.date) - Date.parse(a.date),
  )
}

const getReport = async (id: string) => {
  const response = await fetch(`${BACKEND_URL}/api/getReport`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(id),
    cache: "no-cache",
  })
  return await response.json()
}

const getWindfarms = async (): Promise<WindfarmType[]> => {
  const response = await fetch(`${BACKEND_URL}/api/getWindfarms`, {
    cache: "force-cache",
  })
  const data: WindfarmType[] = await response.json()
  return data.sort((a: any, b: any) => a.Name.localeCompare(b.Name))
}

const postReport = async (data: any) => {
  const response = await fetch("/api/postReport", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return await response.json()
}

const updateReport: any = async (data: any) => {
  const response = await fetch("/api/updateReport", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
  return await response.json()
}

export { getReport, getReports, getWindfarms, postReport, updateReport }
