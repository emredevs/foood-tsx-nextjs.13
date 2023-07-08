"use client";
import React, { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";
import { FoodDetail, Meal } from "@/types/food-detail/type";
import styles from "./styles.module.css";
interface IParams {
  params: string;
}

const FoodDetail: FunctionComponent<IParams> = ({ params }) => {
  const [detail, setDetail] = useState<Meal[]>([]);

  useEffect(() => {
    axios
      .get<FoodDetail>(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${params}`
      )
      .then((res) => setDetail(res.data.meals));
  }, [params]);
  console.log(detail);
  return (
    <div className={styles.searchList}>
      {detail.map((food) => (
        <div className={styles.searchBox} key={food.idMeal}>
          <img src={food.strMealThumb} alt={food.strMeal} />
          <div>
            <div>Area: {food.strArea}</div>
            <div>Meal: {food.strMeal}</div>
            <div>Category: {food.strCategory}</div>
            Contents:
            {Object.keys(food)
              .filter((key) => key.startsWith("strIngredient"))
              .map((key) => (
                <div key={key}>{food[key as keyof Meal]}</div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default FoodDetail;
