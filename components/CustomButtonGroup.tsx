

import React from 'react';
import Button1 from './CustomButton'


type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonGroupProps {
  size: ButtonSize,
  disabled?: boolean
}

const ButtonGroup1: React.FC<ButtonGroupProps> = ({ size, disabled }) => {
  return (
    <>
      <Button1 variant='contained' disabled={disabled} size={size} />
      <Button1 variant="outlined" disabled={disabled} size={size} />
      <Button1 variant="text" disabled={disabled} size={size} />

    </>


  );
};

export default ButtonGroup1;