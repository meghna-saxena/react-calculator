import * as React from 'react';
import './DisplayScreen.css'

export interface DisplayScreenProps {
  output: number | null
}

export function DisplayScreen(props: DisplayScreenProps) {
  const { output } = props;

  return (
    <h1 className="display-screen">{output}</h1>
  );
}
