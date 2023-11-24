import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { onClosePhotoDetailsModal, updateToFavPhotoIds, state, onPhotoSelect, photos } = props;

  /* initialSimilarPhoto will only work for viewing similar_photos. Will return undefined/null onClick due to the passing of the similar_photo object. */
  const initialSimilarPhotos = Object.values(state.selectedPhoto.similar_photos);
  // Solution is to .map just the photo.ids into new array
  const similarPhotosId = initialSimilarPhotos.map((photo) => photo.id);
  // Then filter photos (photoData) for the photo.ids of the similar_photos 
  const filteredSimilarPhotos = photos.filter((photo) => similarPhotosId.includes(photo.id) );

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => onClosePhotoDetailsModal()}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      {/* Photo Details */}
      <div className="photo-details-modal__images">
        <PhotoFavButton updateToFavPhotoIds={() => updateToFavPhotoIds(state.selectedPhoto)}/>
         {/* Because updateToFavPhotoIds is wrapped in arrow function, it does not immediatly call function, sending it on endless loop */}
        <img src={state.selectedPhoto.urls.full} alt="Larger version of photo" className="photo-details-modal__image" />
        {/* Photographer Details */}
        <div className='photo-details-modal__photographer-details'>
          <img src={state.selectedPhoto.user.profile} alt="Profile picture" className="photo-details-modal__photographer-profile" />
          <div className="photo-details-modal__photographer-info">
            <div className="photo-details-modal__photographer-name">
              {state.selectedPhoto.user.name}
            </div>
            <div className="photo-details-modal__photographer-location">
                {state.selectedPhoto.location.city}, {state.selectedPhoto.location.country}
            </div>
          </div>
        </div>
      </div>
      {/* Similar Photos */}
      <div className="photo-details-modal__images">
        <h2 className="photo-details-modal__header">Similar Photos:</h2>
      </div>
      {/* Replace the photos object in PhotoList with just the similar_photos. Use Object.values to iterate over the object's properties */}
      <PhotoList photos={filteredSimilarPhotos}updateToFavPhotoIds={updateToFavPhotoIds} onPhotoSelect={onPhotoSelect} />
    </div>
  )
};

export default PhotoDetailsModal;
