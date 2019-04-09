import * as React from 'react';
import './Keys.css';

export interface KeysProps {
  content: number
}

export function Keys(props: KeysProps) {
  return (
    <React.Fragment>
      <button className="keys-btn">
        {props.content}
      </button>
    </React.Fragment>

  );
}
