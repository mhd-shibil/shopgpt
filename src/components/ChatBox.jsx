import React, { useState } from 'react';
import { ReactComponent as AttatchmentIcon } from '../assets/attachment.svg';
import { ReactComponent as SendIcon } from '../assets/send.svg';
import classNames from 'classnames';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import { List } from './list/List';
import { cardsArray } from '../constants/dummy-data';

export const ChatBox = () => {
  const [text,setText]=useState('')
  const [isFocused, toggleFocus] = useState(false);

  return (
    <div
      className={classNames(
        'p-6 fixed bottom-10 left-60 right-60 bg-background rounded-xl shadow-[0px_0px_100px_5px_#0000001A] border border-[#9747FF] flex flex-col justify-end z-20',
        {
          'bg-[#EEE8F5]': isFocused
        }
      )}
    >
      {isFocused&&<IconButton sx={{
        position: 'absolute',
        right: '20px',
        top: '20px',
      }} onClick={() => toggleFocus(false)}>
        <Close/>
      </IconButton>}

      <div
        className={classNames('transition-all h-0 w-full duration-500 flex-grow overflow-hidden', {
          'h-[70vh]': isFocused
        })}
      >
        <List cards={cardsArray}/>
      </div>

      <div className="bg-white p-2 w-full rounded-[30px] flex items-center border border-border">
        <div className="p-1 bg-accent rounded-full size-11">
          <AttatchmentIcon />
        </div>
        <input
          onFocus={() => toggleFocus(true)}
          onChange={(e)=>setText(e.target.value)}
          value={text}
          placeholder="Start typing here..."
          className="w-full h-full ml-4 outline-none"
        />
        <button>
        <SendIcon />
        </button>
      </div>
    </div>
  );
};
