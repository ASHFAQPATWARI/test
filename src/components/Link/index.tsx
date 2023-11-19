import { Link as NextIntlLink } from '@/navigation';
import { LinkProps } from 'next/link';
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
  locale,
  ...rest
}: React.PropsWithChildren<ILink & React.RefAttributes<HTMLAnchorElement>>) {
  const defaultClasses = 'text-white rounded-full px-6 py-2 text-sm font-bold';
  const color =
    type === 'blue'
      ? 'bg-primary-500 hover:bg-primary-700'
      : type === 'green'
        ? 'bg-secondary-500 hover:bg-secondary-700'
        : 'bg-yellow hover:bg-yellow-dark';
  const sizeClass =
    size === 'medium'
      ? 'px-5 py-2'
      : size === 'large'
        ? 'px-6 py-3'
        : 'px-4 py-1 text-xs';
  const classes = [defaultClasses, color, sizeClass, className].join(' ');
  return (
    <NextIntlLink locale={locale as any} className={classes} {...rest}>
      {children}
    </NextIntlLink>
  );
}

export default Link;
