import React from 'react';

interface IContainer extends React.HTMLAttributes<HTMLDivElement> {}

function Container({
  children,
  className = '',
  ...rest
}: React.PropsWithChildren<IContainer>) {
  const classes = 'bg-white shadow-container rounded-2xl p-6 ' + className;
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

export default Container;
