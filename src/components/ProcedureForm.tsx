/* eslint-disable @typescript-eslint/no-unsafe-return */
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
import { ProcedureType, TagType, WindfarmType } from 'types/dataType';

import Field from '@/components/forms/Field';
import capitalizeText from '@/utils/capitalize';
import { postData, updateData } from '@/utils/dataRequests';

interface Props {
  windfarms: WindfarmType[];
  procedure?: ProcedureType;
  title: string;
  buttonText: string;
  tags: TagType[];
}

const ProcedureForm = ({ windfarms, procedure, title, buttonText, tags }: Props) => {
  const router = useRouter();
  const methods = useForm({
    defaultValues: {
      title: '',
      windfarm: [''],
      tags: [''],
      severity: '',
      subject: '',
      date: new Date().toLocaleString(),
      text: '',
    },
  });

  async function onSubmit(data: any) {
    try {
      const arrangeData = {
        ...data,
        windfarm: data.windfarm.filter((n: any) => n.length > 0),
        tags: data.tags.filter((n: any) => n.length > 0),
      };
      const response: any = procedure
        ? await updateData('/uploadProcedure', { id: procedure._id, ...arrangeData })
        : await postData('/postProcedure', arrangeData);

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
    if (procedure) {
      reset({
        windfarm: procedure.windfarm.map((item) => item._id?.toString()),
        tags: procedure.tags.map((item) => item._id.toString()),
        severity: procedure.severity,
        subject: procedure.subject ?? '',
        date: procedure.date,
        text: procedure.text,
      });
    }
  }, [procedure]);

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
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-3 grid gap-6">
          <div className="grid grid-cols-3 gap-6"></div>
          <Field topLabel name="title" label="Title" required={true} type="text" />
          <Field
            topLabel
            name="text"
            label="Body"
            required={true}
            type={'textarea'}
            multiline={7}
          />
          <Field
            topLabel
            name="tags"
            label="Tags"
            required={true}
            type="text"
            multiple={true}
            options={tags.map((tag) => (
              <MenuItem value={tag._id.toString()} key={tag._id.toString()}>
                {tag.tag}
              </MenuItem>
            ))}
          />
          <Field
            topLabel
            name="windfarm"
            label="Windfarms Names - Optional"
            multiple={true}
            type="text"
            options={windfarms.map((windfarm, index) => (
              <MenuItem value={windfarm._id?.toString()} key={index}>
                {capitalizeText(windfarm.Name ?? '')}
              </MenuItem>
            ))}
          />

          <Field
            topLabel
            name="severity"
            label="Severity - Optional"
            required={true}
            type="text"
            options={[
              <MenuItem value="" key="0"></MenuItem>,
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
export default ProcedureForm;
