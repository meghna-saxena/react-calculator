import * as React from 'react';
import './DisplayScreen.css'

export interface DisplayScreenProps {
  input: string | number
}

export function DisplayScreen(props: DisplayScreenProps) {
  const { input } = props;

  return (
    <h1 className="display-screen">{input}</h1>
  );
}
