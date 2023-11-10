import { Types } from "mongoose"

export type severity = "Low" | "Medium" | "High"

export interface ReportType {
  windfarm: WindfarmType
  createdAt?: string
  updateAt?: string
  _id?: Types.ObjectId
  owner?: Types.ObjectId
  updater?: Types.ObjectId
  subject?: string
  status?: string
  severity: string
  text: string
  date: string
}

export interface ReportTypeLoaded {
  windfarm: WindfarmType
  /* windfarm?: WindfarmType | Types.ObjectId; */
  createdAt: string
  updateAt: string
  _id: Types.ObjectId
  owner: Types.ObjectId
  updater?: Types.ObjectId
  subject?: string
  status?: string
  severity: string
  text: string
  date: string
}

export interface WindfarmType {
  _id?: Types.ObjectId
  SAP?: string
  Country?: string
  Name?: string
  PI?: string
}
