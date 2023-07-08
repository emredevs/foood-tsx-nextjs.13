import FoodListContainer from "@/container/foods-list";
import React, { FunctionComponent } from "react";

interface IParams {
  params: { id: string };
}

const CategoryPage: FunctionComponent<IParams> = ({ params }) => {
  return (
    <div>
      <FoodListContainer params={params.id} />
    </div>
  );
};
export default CategoryPage;
