/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Paper } from '@mui/material';
import Link from 'next/link';

import capitalizeText from '@/utils/capitalize';
import formatDataToPT from '@/utils/formatDataToPT';

import { ReportType } from '../../types/dataType';
import { classNames } from '../utils/css';

interface Props {
  report: ReportType;
}

export default function ReportMainMenu({ report }: Props) {
  return (
    <Paper className="w-full rounded-2xl p-4 hover:bg-gray-200">
      <Link href={{ pathname: `/report/${report._id}` }} passHref>
        <div className="grid grid-cols-2 items-center justify-between">
          <div className="text-4xl font-semibold">
            {capitalizeText(report.windfarm.Name ?? '')}
          </div>
          {report.date && (
            <div className="place-self-end text-2xl font-semibold">
              {formatDataToPT(new Date(report.date))}
            </div>
          )}
          {report.subject && (
            <div className="my-1 text-xl font-semibold">{report.subject}</div>
          )}
          {report.severity !== 'Low' && (
            <div
              className={classNames(
                report.severity === 'High' && 'text-red-500 text-4xl',
                report.severity === 'Medium' && 'text-[#663AFE] text-3xl',
                'place-self-end',
              )}
            >
              {report.severity}
            </div>
          )}
        </div>
        <div className="divide-y text-xl">{report.text}</div>
        {report.owner && (
          <div className="text-lg font-bold">{report.owner.toString() || ''}</div>
        )}
      </Link>
    </Paper>
  );
}
