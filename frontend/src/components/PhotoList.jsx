import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { photos, favourite, setFavourite} = props;
  const photo = photos.map((details) => {
    return <PhotoListItem 
      key={details.id}
      data={details}
      favourite={favourite}
      setFavourite={setFavourite}
    />;
  });
  return <ul className="photo-list">{photo}</ul>
};

export default PhotoList;
