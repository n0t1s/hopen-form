import React from "react";
import Link from "next/link";

const Menu = () => {
  const categories = [
    { id: 1, name: "About Us" },
    { id: 2, name: "Platform" },
    { id: 3, name: "Resources" },
    { id: 4, name: "Solution" },
    { id: 5, name: "Pricing" },
  ];
  return (
    <ul className="hidden md:flex items-center gap-3 text-black">
      {categories.map((c, id) => {
        return (
          <Link key={id} href={`/category/${c.name}`}>
            <li className={`h-12 flex justify-between items-center px-3`}>
              {c.name}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default Menu;
