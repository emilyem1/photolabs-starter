import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from '../components/PhotoList';
import TopNavigationBar from '../components/TopNavigationBar';

const HomeRoute = (props) => {
  const { state, onPhotoSelect, onLoadTopic, updateToFavPhotoIds, photos } = props;
  return (
    <div className="home-route">
      <TopNavigationBar onLoadTopic={onLoadTopic} state={state} isFavPhotoExist={state.favourite.length > 0}/>
      <PhotoList 
        onPhotoSelect={onPhotoSelect}
        updateToFavPhotoIds={updateToFavPhotoIds}
        photos={photos}
      />
    </div>
  );
};

export default HomeRoute;