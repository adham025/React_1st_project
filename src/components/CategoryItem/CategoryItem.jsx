import React from "react";

export default function CategoryItem({ category }) {
  return (
    <div key={category.id} className="col-md-3">
      <div className="bg-dark text-white p-3 rounded">
        <h5>
          {category}
        </h5>
      </div>
    </div>
  );
}
