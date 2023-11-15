import NextLink, { LinkProps } from 'next/link';
import React from 'react';

interface ILink extends LinkProps {
  type?: 'blue' | 'green' | 'yellow';
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

function Link({
  children,
  type = 'green',
  className = '',
  size = 'medium',
  ...rest
}: React.PropsWithChildren<ILink & React.RefAttributes<HTMLAnchorElement>>) {
  const defaultClasses = 'text-white rounded-full px-6 py-2 text-sm font-bold';
  const color =
    type === 'blue'
      ? 'bg-primary-500'
      : type === 'green'
        ? 'bg-secondary-500'
        : 'bg-yellow';
  const sizeClass =
    size === 'medium'
      ? 'px-5 py-2'
      : size === 'large'
        ? 'px-6 py-3'
        : 'px-4 py-2';
  const classes = [defaultClasses, color, sizeClass, className].join(' ');
  return (
    <NextLink className={classes} {...rest}>
      {children}
    </NextLink>
  );
}

export default Link;
