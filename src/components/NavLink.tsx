import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-[#FA7413] font-medium px-4 py-2.5 transition duration-200 rounded-md hover:bg-orange-50 text-base whitespace-nowrap"
    >
      {children}
    </a>
  );
};

export default NavLink;