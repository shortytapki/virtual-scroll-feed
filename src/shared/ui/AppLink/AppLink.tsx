import { Link, LinkProps } from 'react-router-dom';

export const AppLink = (props: LinkProps) => {
  const { to, children, className } = props;
  const appLinkClassName = `${className} inline-block text-white bg-black px-4 py-2 basis-0 hover:scale-[1.2] active:scale-95 transition-transform`;
  return (
    <Link to={to} className={appLinkClassName}>
      {children}
    </Link>
  );
};
