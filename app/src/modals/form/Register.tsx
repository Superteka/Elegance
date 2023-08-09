import React, { useEffect, useState } from "react";
import Modal from 'react-modal';
import { useForm, SubmitHandler, DeepMap, FieldError } from "react-hook-form";
import Input from "../../components/input/Input";
import './RegisterStyle.css'

interface IRegister {
  isOpen: boolean;
}

const RegisterModal: React.FC<IRegister> = ({ isOpen }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  });

  const name = watch("name");

  const inputRules = {
    name: {
      required: 'Obrigatório',
    },
    email: {
      required: 'Obrigatório',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Endereço de email inválido',
      },
    },
  };
  
  const closeModalAfterDelay = (): void => {
    setTimeout(() => {
      setModalIsOpen(false);
      setSuccessMessage('');
      setValue("name", '');
      setValue("email", '');
      setValue("phone", '');
    }, 2000);
  };

  const onSubmit: SubmitHandler<{ name: string; email: string; phone: string; }> = () => {
    if (errors.name || errors.email) {
      setSuccessMessage('');
    } else {
      setSuccessMessage(`${name}, seu cadastro foi realizado com sucesso`);
      closeModalAfterDelay();
    }
  };


  useEffect(() => {
    if (isOpen) {
      setModalIsOpen(true)
    }
  }, [isOpen])

  const closeModal = (): void => {
    setModalIsOpen(false);
    setSuccessMessage('');
    setValue("name", '');
    setValue("email", '');
    setValue("phone", '');
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Modal de Cadastro"
      style={{
        content: {
          width: '50%',
          height: '40%',
          maxWidth: '400px',
          margin: 'auto',
          backgroundColor: 'rgb(14, 11, 0)',
        },
        overlay: {
          backgroundColor: 'rgb(35, 31, 16)',
          opacity: '0.9',
        },
      }}
    >
      <button onClick={closeModal} className="close-button">
        Fechar
      </button>
      
      <div className="input-container">
        <h2>Cadastro</h2>

        <form>
          <div className="form-input">
            <Input
              name="name"
              label="Nome"
              type="text"
              register={control.register}
              error={errors.name as DeepMap<any, FieldError>} 
              rules={inputRules.name}
            />
          </div>

          <div className="form-input">
            <Input
              name="email"
              label="E-Mail"
              type="text"
              register={control.register}
              error={errors.email as DeepMap<any, FieldError>}
              rules={inputRules.email}
            />
          </div>
          
          <div className="form-input">
            <Input
              name="phone"
              label="Telefone"
              type="text"
              register={control.register}
            />
          </div>

          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
          <button onClick={handleSubmit(onSubmit)} className="form-button">Enviar</button>
        </form>
      </div>
    </Modal>
  );
};

export default RegisterModal;
