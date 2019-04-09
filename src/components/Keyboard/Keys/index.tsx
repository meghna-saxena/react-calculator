import * as React from 'react';
import './Keys.css';

export interface KeysProps {
  content: string | number
}

export function Keys(props: KeysProps) {
  const hasEmptyValue = props.content === '' ? true : false;

  return (
    <React.Fragment>
      <button className="keys-btn" disabled={hasEmptyValue}>
        {props.content}
      </button>
    </React.Fragment>
  );
}
