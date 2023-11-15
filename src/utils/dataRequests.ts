/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */

const BACKEND_URL = 'http://localhost:3000';

const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(`${BACKEND_URL}/api${url}`, {
    cache: 'no-cache',
  });
  return await response.json();
};

/* const getReports = async () => {
  const response = await fetch(`${BACKEND_URL}/api/getReports`, {
    cache: 'no-cache',
  });
  const data = await response.json();
  return data.sort(
    (a: ReportTypeLoaded, b: ReportTypeLoaded) =>
      Date.parse(b.date) - Date.parse(a.date),
  );
}; */

const getItem = async <T>(url: string, id: string): Promise<T> => {
  const response = await fetch(`${BACKEND_URL}/api${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(id),
    cache: 'no-cache',
  });
  return await response.json();
};

const postData = async <T>(url: string, data: any): Promise<T> => {
  const response = await fetch(`/api${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

const deleteItem = async <T>(url: string, data: any): Promise<T> => {
  const response = await fetch(`/api${url}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

const updateData = async <T>(url: string, data: any): Promise<T> => {
  const response = await fetch(`/api${url}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
};

export { deleteItem, getData, getItem, postData, updateData };
