import React from "react";
import { Link } from "react-router-dom";

function Groups() {
  const group_ids = [1, 2, 3, 4, 5];

  return (
    <div>
      {group_ids.map((group_id) => (
        <div>
          <Link to={`/group_${group_id}`}>모임{group_id}</Link>
        </div>
      ))}
    </div>
  );
}

export default Groups;
