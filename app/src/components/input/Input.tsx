import React from "react";
import { UseFormRegister, DeepMap, FieldError } from "react-hook-form";

interface IInput {
  name: string;
  label: string;
  type: string;
  register: UseFormRegister<any>;
  error?: DeepMap<any, FieldError>;
  rules?: any; 
}

const Input: React.FC<IInput> = ({
  name,
  label,
  type,
  register,
  error,
  rules, 
}) => {
  return (
    <div>
      <label>{label}</label>
          <input type={type} {...register(name, rules)} style={{backgroundColor: 'RGB(35, 31, 16)', color: 'white'}} />
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  );
};

export default Input;
