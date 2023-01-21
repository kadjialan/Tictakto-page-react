import React from 'react';
import Button from './Button';
import './Page.css';

export default function Page() {
  return (
    <div className="buttons">
      <Button num={1} />
      <Button num={2} />
      <Button num={3} />
      <Button num={4} />
      <Button num={5} />
      <Button num={6} />
      <Button num={7} />
      <Button num={8} />
      <Button num={9} />
    </div>
  );
}
