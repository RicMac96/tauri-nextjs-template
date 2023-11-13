/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import { MenuItem, Paper } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Field from '@/components/forms/Field';
import capitalizeText from '@/utils/capitalize';
import { postData, updateData } from '@/utils/dataRequests';

import { ReportType, WindfarmType } from '../../types/dataType';

interface Props {
  windfarmList: WindfarmType[];
  report?: ReportType;
  title: string;
  buttonText: string;
}

const ReportForm = ({ windfarmList, report, title, buttonText }: Props) => {
  const router = useRouter();
  const methods = useForm({
    defaultValues: {
      windfarm: '',
      severity: 'Low',
      subject: '',
      date: new Date().toLocaleString(),
      text: '',
    },
  });

  async function onSubmit(data: any) {
    try {
      const response: any = report
        ? await updateData('/uploadReport', { id: report._id, ...data })
        : await postData('/postReport', data);

      if (response.ok) {
        router.push('/');
      } else {
        // Handle errors here
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (report) {
      reset({
        windfarm: report.windfarm._id?.toString(),
        severity: report.severity,
        subject: report.subject ?? '',
        date: report.date,
        text: report.text,
      });
    }
  }, [report]);

  //* remove anoying error with still ongoing correction from devs
  const error = console.error;
  console.error = (...args: any) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };

  return (
    <Paper className="p-6 sm:p-7 lg:p-10 min-w-[80%]" elevation={3}>
      <div className="text-xl font-semibold">{title}</div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 grid gap-6">
          <div className="grid grid-cols-3 gap-6">
            <Field
              topLabel
              name="windfarm"
              label="Windfarm Name"
              required={true}
              type="text"
              options={windfarmList.map((windfarm, index) => (
                <MenuItem value={windfarm._id?.toString()} key={index}>
                  {capitalizeText(windfarm.Name ?? '')}
                </MenuItem>
              ))}
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Field
              topLabel
              name="severity"
              label="Severity"
              required={true}
              type="text"
              options={[
                <MenuItem value="Low" key="0">
                  Low
                </MenuItem>,
                <MenuItem value="Medium" key="1">
                  Medium
                </MenuItem>,
                <MenuItem value="High" key="2">
                  High
                </MenuItem>,
              ]}
            />
            <Field topLabel name="date" label="Date" required={true} type="text" />
          </div>
          <Field
            topLabel
            name="subject"
            label="Subject - Optional"
            required={true}
            type="text"
          />
          <Field
            topLabel
            name="text"
            label="Report"
            required={true}
            type={'textarea'}
            multiline={3}
          />
          <button
            className="bg-green text-lg font-semibold h-10 rounded-2xl hover:bg-[#32f41046]"
            type="submit"
          >
            {buttonText}
          </button>
        </form>
      </FormProvider>
    </Paper>
  );
};
export default ReportForm;
