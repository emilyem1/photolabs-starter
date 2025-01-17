import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from 'components/PhotoFavButton';

const PhotoListItem = (props) => {
  const { data, updateToFavPhotoIds, onPhotoSelect, favourite } = props;

  return (
  <div className="photo-list__item">
    <PhotoFavButton updateToFavPhotoIds={updateToFavPhotoIds} data={data} favourite={favourite} />
    <img src={data.urls.regular} alt="Photo" className="photo-list__image" onClick={() => onPhotoSelect(data)} />

    <div className="photo-list__user-details">

      <img src={data.user.profile} alt="Profile" className="photo-list__user-profile" />

      <div className="photo-list__user-info">
        <div className="photo-list__user-username">
          {data.user.name}
        </div>
        <div className="photo-list__user-location">
          {data.location.city}, {data.location.country}
        </div>
      </div>
    </div>
  </div>
  );
};

export default PhotoListItem;