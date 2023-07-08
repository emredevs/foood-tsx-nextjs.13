"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { HeaderCategory, Meal } from "@/types/header-category/type";
import styles from "./styles.module.css";
import Sidebar from "../food-sidebar";
export default function Header() {
  const [category, setCategory] = useState<Meal[]>([]);

  useEffect(() => {
    axios
      .get<HeaderCategory>(
        "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
      )
      .then((res) => setCategory(res.data.meals));
  }, []);
  console.log(category);
  return (
    <div className={styles.headerConatiner}>
      <ul className={styles.headerList}>
        <Link href={"/"}>Home</Link>
        {category.map((category, index) => (
          <li key={index}>
            <Link href={`/category/${category.strCategory}`}>
              {category.strCategory}
            </Link>
          </li>
        ))}
      </ul>
      <Sidebar category={category} />
    </div>
  );
}
