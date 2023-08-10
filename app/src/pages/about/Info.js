/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState } from 'react';
import { HiClipboardCopy } from 'react-icons/hi';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';
import './AboutStyle.css';

const Info = () => {
  const [copied, setCopied] = useState(false);
  const email = 'stepfreitas1998@gmail.com';

  const handleCopy = () => {
    setCopied(true);
  };

  return (
    <>
    <div className='info-container'>
      <div className='name-and-years-container'>
        <h6>Nome: Stephany Catariny de Amorim Freitas</h6>
        <h6>Idade: 25</h6>
      </div>
      <div className='email-container'>
        <h6>E-Mail: {email}{' '}</h6>

        <CopyToClipboard text={email} onCopy={handleCopy}>
            <span className='tooltip'>
              <Tooltip title={copied ? 'E-mail copiado' : 'Copiar e-mail'} trigger="mouseenter">
                <HiClipboardCopy style={{cursor: 'pointer'}} />
              </Tooltip>
            </span>
        </CopyToClipboard>
      </div>
    </div>
    
    <div className='description-info-container'>
      <h3 className='description-info-header'>Jornada e Trajetória</h3>
      <p>
       Minha trajetória no curso iniciou com HTML e CSS, fundamentos do desenvolvimento web. Avancei para a lógica de programação, aprimorando resolução de problemas. No JavaScript intermediário, desenvolvi interações avançadas e manipulação de dados. O ápice foi o React, construindo interfaces interativas e componentes reutilizáveis. A jornada incluiu um projeto prático, criando uma loja de perfumes com React e TypeScript, consolidando meu aprendizado e inspirando meu futuro no desenvolvimento web.
      </p>
    </div>
    </>
  );
};

export default Info;
