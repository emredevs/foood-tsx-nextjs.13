import FoodList from "@/components/foods-list";
import React, { FunctionComponent } from "react";
interface IParams {
  params: string;
}

const FoodListContainer: FunctionComponent<IParams> = ({ params }) => {
  return (
    <div>
      <FoodList params={params} />
    </div>
  );
};
export default FoodListContainer;
