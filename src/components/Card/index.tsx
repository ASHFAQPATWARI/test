import React from 'react';

interface ICard extends React.HTMLAttributes<HTMLDivElement> {}

function Card({
  children,
  className = '',
  ...rest
}: React.PropsWithChildren<ICard>) {
  const classes = 'bg-white shadow-card rounded-2xl p-6 ' + className;
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

export default Card;
