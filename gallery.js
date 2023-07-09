import React, { useState } from 'react';

const Gallery = () => {
  const images = [
    "images/bash/img1.png",
    "images/bash/img2.png",
    "images/bash/img3.png",
    "images/bash/img4.png",
    "images/bash/img5.png",
    "images/fallmela2022/img6.png",
    "images/fallmela2022/img2.png",
    "images/fallmela2022/img3.png",
    "images/fallmela2022/img4.png",
    "images/fallmela2022/img5.png",
    "images/misc/img1.jpeg",
    "images/misc/img2.jpeg",
    "images/misc/img3.jpeg",
    "images/misc/img4.jpeg",
    "images/misc/img5.jpeg",
    "images/desi-dance-img1.png",
    "images/misc/img6.jpeg",
    "images/misc/img7.jpeg",
    "images/desi-dance-img2.png",
  ];

  const setSizes = [5, 5, 7]; // Number of images in each set
  const setStartIndex = [0, 5, 10]; // Starting index of each set

  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const changeImage = (n) => {
    let newIndex = currentIndex + n;
    if (newIndex < 0) {
      newIndex = images.length - 1;
    } else if (newIndex >= images.length) {
      newIndex = 0;
    }
    setCurrentIndex(newIndex);
  };

  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <p>Click image for slideshow enlarged view</p>
      <div className="imgs">
        {images.map((image, index) => (
          <div className="img-wrapper" key={index}>
            <img
              src={image}
              width="300"
              height="200"
              className="center"
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>
      {modalOpen && (
        <div id="myModal" className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <div className="modal-content">
            <img id="modalImage" src={images[currentIndex]} alt="Modal Image" />
            <a className="prev" onClick={() => changeImage(-1)}>
              <i className="fas fa-chevron-left"></i>
            </a>
            <a className="next" onClick={() => changeImage(1)}>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
