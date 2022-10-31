import React from "react";
import { useParams } from "react-router-dom";

const ABC = () => {
  const params = useParams();

  return <div>the parameter passed to this component is {params.abc}</div>;
};

export default ABC;
