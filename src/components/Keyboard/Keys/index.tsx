import * as React from 'react';
import './Keys.css';

export interface KeysProps {
  symbol: string | number,
  clicked: any
}

export function Keys(props: KeysProps) {
  const hasEmptyValue = props.symbol === '' ? true : false;
  const { symbol, clicked } = props;

  const handleClick = (e: any) => {
    const value = e.target.value;
    clicked(value);
  }

  return (
    <React.Fragment>
      <input type="button" className="keys-btn" onClick={handleClick} value={symbol} />
    </React.Fragment>
  );
}
