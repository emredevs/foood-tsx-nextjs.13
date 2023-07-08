import FoodCategoryList from "@/components/food-category-list";
import FoodInput from "@/components/food-input";
import React from "react";

export default function HomeContainer() {
  return (
    <div>
      <FoodInput />
      <FoodCategoryList />
    </div>
  );
}
