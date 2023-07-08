"use client";
import React, { FunctionComponent, useState } from "react";
import "./styles.css";
import HomeIcon from "@mui/icons-material/Home";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { Meal } from "@/types/header-category/type";
interface IProps {
  category: Meal[];
}
const Sidebar: FunctionComponent<IProps> = ({ category }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebarContainer">
      <div>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? <MenuOpenIcon /> : <MenuIcon />}
        </button>
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <ul className="menu">
            <Link href={"/"}>
              <HomeIcon
                sx={{ color: "rgb(255, 124, 0)" }}
                fontSize="large"
                titleAccess="Home"
              />
            </Link>
            {category.map((category, index) => (
              <li key={index}>
                <Link href={`/category/${category.strCategory}`}>
                  {category.strCategory}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
