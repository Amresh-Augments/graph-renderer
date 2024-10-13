import { ButtonHTMLAttributes } from 'react';

type ButtonTheme = 'primary' | 'secondary';

export default function Button({
  children,
  type,
  theme,
}: Readonly<{
  children: React.ReactNode;
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  theme: ButtonTheme;
}>) {
  const themeClasses = {
    primary: 'bg-teal-600 hover:bg-teal-700 border-teal-700',
    secondary: 'bg-gray-600 hover:bg-gray-700 border-gray-700',
  };

  return (
    <button className={`${themeClasses[theme]} border-2 text-white font-bold py-2 px-4 rounded transition-colors`} type={type}>
      {children}
    </button>
  );
}
