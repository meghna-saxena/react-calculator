import * as React from 'react';
import './Keys.css';

export interface KeysProps {
  symbol: string | number,
  clicked: Function
}

export function Keys(props: KeysProps) {
  const { symbol, clicked } = props;
  const hasEmptyValue = symbol === '' ? true : false;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = (event.target as HTMLButtonElement).dataset;

    clicked(value);
  }

  return (
    <React.Fragment>
      <button className="keys-btn" onClick={handleClick} disabled={hasEmptyValue} data-value={symbol}>{symbol}</button>
    </React.Fragment>
  );
}
