import React from "react";
import { listData } from "../../lib/dummyData";
import Card from "../card/card";
import "./list.css";

const list = () => {
  return (
    <div className="list">
      {listData.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default list;
