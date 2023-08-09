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
    <div className='info-container'>
      <h6>Nome: Stephany Catariny de Amorim Freitas</h6>
      <h6>Idade: 25</h6>
      <h6>E-Mail: {email}{' '}</h6>

      <CopyToClipboard text={email} onCopy={handleCopy}>
          <span className='tooltip'>
            <Tooltip title={copied ? 'E-mail copiado' : 'Copiar e-mail'} trigger="mouseenter">
              <HiClipboardCopy style={{cursor: 'pointer'}} />
            </Tooltip>
          </span>
      </CopyToClipboard>
    </div>
  );
};

export default Info;
