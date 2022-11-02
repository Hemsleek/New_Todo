import React from "react";
import { useParams } from "react-router-dom";

const ABC = () => {
  const params = useParams();
  console.log(params);
  return <div>the parameter passed to this component is {params.bde}</div>;
};

export default ABC;
