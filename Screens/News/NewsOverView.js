import React from "react";
import DetailsCard from "./DetailsCard";

const NewsOverView = (props) => {
  const { title, description, image_url, content } = props?.route?.params;
  return (
    <DetailsCard
      content={content}
      image_url={image_url}
      title={title}
    ></DetailsCard>
  );
};

export default NewsOverView;
