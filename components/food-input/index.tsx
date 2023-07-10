"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./styles.module.css";
export default function FoodInput() {
  const [searchFood, setSearchFood] = useState<string>("");
  const router = useRouter();
  const submitBtn = () => {
    if (!searchFood) {
      return;
    }
    router.push(`/${searchFood}`);
    setSearchFood("");
  };
  const formSubmit = (e: any) => {
    e.preventDefault();
    submitBtn();
  };
  return (
    <form onSubmit={formSubmit} className={styles.foodInput}>
      <input
        value={searchFood}
        type="text"
        placeholder="Food Name"
        onChange={(e) => setSearchFood(e.target.value)}
      />
      <SearchIcon
        style={{ cursor: "pointer" }}
        sx={{ color: "rgb(255, 124, 0)" }}
        fontSize="large"
        onClick={submitBtn}
      />
    </form>
  );
}
