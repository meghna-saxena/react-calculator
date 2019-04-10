import * as React from 'react';
import './Keys.css';

export interface KeysProps {
  symbol: string | number,
  clicked: Function
}

export function Keys(props: KeysProps) {
  //const hasEmptyValue = props.symbol === '' ? true : false;
  const { symbol, clicked } = props;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = (event.target as HTMLButtonElement).dataset;

    clicked(value);
  }

  return (
    <React.Fragment>
      <button className="keys-btn" onClick={handleClick} data-value={symbol}>{symbol}</button>
    </React.Fragment>
  );
}
