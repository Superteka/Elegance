/* eslint-disable prefer-const */
interface FormData {
  name: string;
  email: string;
  phone: string;
}

let formDataArray: FormData[] = [];

export const addFormData = (data: FormData): any => {
  formDataArray.push(data);
};

export const getFormDataArray = (): any => {
  return formDataArray;
};