import React from "react";

export default function CategoryItem({ category, onSelectCategory }) {
  return (
          <div className="col-md-3">
          <div
            className="bg-dark text-white p-3 rounded text-center "
            style={{ cursor: "pointer" }}
            onClick={() => onSelectCategory(category)}
          >
            <h5>{category}</h5>
          </div>
        </div>
  );
}
