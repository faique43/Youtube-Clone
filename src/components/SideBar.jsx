import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/constants';

const SideBar = (selectedCategory, setSelectedCategory) => {
  
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "92vh" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => selectedCategory.setSelectedCategory(category.name)}
          style={{
            background:
              category.name === selectedCategory.selectedCategory && "#FC1503",
            color: "white",
          }}
          key={category.name}
        >
          <span
            style={{
              color:
                category.name === selectedCategory.selectedCategory
                  ? "white"
                  : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity:
                category.name === selectedCategory.selectedCategory
                  ? "1"
                  : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );};

export default SideBar
