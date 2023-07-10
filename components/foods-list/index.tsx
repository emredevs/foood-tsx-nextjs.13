"use client";
import { FoodList, Meal } from "@/types/foods-list/type";
import React, { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import Link from "next/link";
interface IParam {
  params: string;
}
const FoodList: FunctionComponent<IParam> = ({ params }) => {
  const [foods, setFoods] = useState<Meal[]>([]);
  useEffect(() => {
    axios
      .get<FoodList>(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params}`
      )
      .then((res) => setFoods(res.data.meals));
  }, []);
  console.log(foods);
  return (
    <div className={styles.foodListContainer}>
      {foods &&
        foods.map((food) => (
          <div className={styles.foodListContainerBox} key={food.idMeal}>
            <Link href={`/${food.strMeal}`}>
              <img
                className={styles.FoodImg}
                src={food.strMealThumb}
                alt={food.strMeal}
              />
              <div>{food.strMeal}</div>
            </Link>
          </div>
        ))}
    </div>
  );
};
export default FoodList;
