import FoodDetail from "@/components/food-detail";
import React, { FunctionComponent } from "react";

interface IParams {
  params: { id: string };
}

const FoodDetailPage: FunctionComponent<IParams> = ({ params }) => {
  return (
    <div>
      <FoodDetail params={params.id} />
    </div>
  );
};
export default FoodDetailPage;
