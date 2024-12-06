import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export function Button({ children, className, variant = 'primary', ...rest }: ButtonProps) {
  const baseStyles = 'px-8 py-3 text-lg font-semibold rounded-lg shadow-lg transition-all hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  const variantStyles =
    variant === 'primary'
      ? 'bg-purple-600 text-white hover:bg-purple-700 focus-visible:outline-purple-600'
      : 'bg-orange-500 text-white hover:bg-orange-600 focus-visible:outline-orange-500';

  return (
    <button
      {...rest}
      className={clsx(baseStyles, variantStyles, className)}
    >
      {children}
    </button>
  );
}
