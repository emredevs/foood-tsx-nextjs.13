"use client";
import { Categories, Category } from "@/types/food-category-list/type";
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";
export default function FoodCategoryList() {
  const [cateList, setCateList] = useState<Category[]>([]);
  useEffect(() => {
    axios
      .get<Categories>(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => setCateList(res.data.categories));
  }, []);
  console.log(cateList);
  return (
    <div className={styles.foodCateListContainer}>
      {cateList.map((cate) => (
        <div className={styles.foodCateListContainerBox} key={cate.idCategory}>
          <Link href={`/category/${cate.strCategory}`}>
            <img
              style={{ borderRadius: "20px" }}
              src={cate.strCategoryThumb}
              alt={cate.strCategory}
            />
            <div>{cate.strCategory}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}
