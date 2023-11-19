import React, { useState } from 'react';

import HomeRoute from 'routes/HomeRoute';
import './App.scss';
import topics from 'mocks/topics';
import photos from 'mocks/photos';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const toggleModal = () => {
    setShowModal(!showModal)
  }
  return (
    <div className="App">
      <HomeRoute topics={topics} photos={photos} toggleModal={toggleModal} setSelectedPhoto={setSelectedPhoto} />
      {showModal && <PhotoDetailsModal toggleModal={toggleModal} selectedPhoto={selectedPhoto} />} {/* If showModal is true, display modal */}
    </div>
  );
};

export default App;
