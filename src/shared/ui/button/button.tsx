'use client';

import { ButtonSize, ButtonView } from './types';
import styles from './button.module.css';

type ButtonProps = {
  view?: ButtonView;
  size?: ButtonSize;
  text: string;
  title?: string;
  onClick?: () => void;
  extClassName?: string;
};

export const Button = ({
  view = 'filled',
  size = 'm',
  text,
  title,
  onClick,
  extClassName,
}: ButtonProps) => {
  let elementStyles = styles.button + ' ' + extClassName;

  switch (view) {
    case 'action':
      elementStyles += ` ${styles['view_action']}`;
      break;
    case 'filled':
      elementStyles += ` ${styles['view_filled']}`;
      break;
    case 'outlined':
      elementStyles += ` ${styles['view_outlined']}`;
      break;
    case 'flat':
      elementStyles += ` ${styles['view_flat']}`;
      break;
  }

  switch (size) {
    case 's':
      elementStyles += ' ' + styles['size_s'];
      break;
    case 'm':
      elementStyles += ' ' + styles['size_m'];
      break;
    case 'l':
      elementStyles += ' ' + styles['size_l'];
      break;
    case 'xl':
      elementStyles += ' ' + styles['size_xl'];
      break;
  }

  elementStyles += ' ' + extClassName;

  return (
    <button
      type="button"
      className={elementStyles}
      onClick={onClick}
      title={title ? title : ''}
    >
      {text}
    </button>
  );
};
