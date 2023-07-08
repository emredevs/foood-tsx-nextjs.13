"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.css";
export default function FoodInput() {
  const [searchFood, setSearchFood] = useState<string>("");
  const router = useRouter();
  const formSubmit = (e: any) => {
    e.preventDefault();
    router.push(`${searchFood}`);
  };
  return (
    <form onSubmit={formSubmit} className={styles.foodInput}>
      <input
        type="text"
        placeholder="Food Name"
        onChange={(e) => setSearchFood(e.target.value)}
      />
    </form>
  );
}
