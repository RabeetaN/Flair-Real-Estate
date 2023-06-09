import React, { useRef, useState } from "react";
import { Container, Row, Col, Carousel, Card, Button, Modal } from "react-bootstrap";
import "./ImageCarousel.css";

const CardCarousel = ({ listing, imageUrls }) => {
  const carouselRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);

  const handlePrevClick = () => {
    carouselRef.current.prev();
  };

  const handleNextClick = () => {
    carouselRef.current.next();
  };

  const handleImageClick = (imageSrc) => {
    setZoomedImage(imageSrc);
    setShowModal(true);
  };

  const handleThumbnailClick = (index) => {
    carouselRef.current.next(index);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleModalPrevClick = () => {
    const currentImageIndex = listing.slideImages.findIndex(slideImage => {
      const fileId = slideImage[Object.keys(slideImage)[0]];
      return imageUrls[fileId] === zoomedImage;
    });

    if (currentImageIndex === 0) {
      setZoomedImage(imageUrls[listing.slideImages[listing.slideImages.length - 1][Object.keys(listing.slideImages[listing.slideImages.length - 1])[0]]]);
    } else {
      setZoomedImage(imageUrls[listing.slideImages[currentImageIndex - 1][Object.keys(listing.slideImages[currentImageIndex - 1])[0]]]);
    }
  };

  const handleModalNextClick = () => {
    const currentImageIndex = listing.slideImages.findIndex(slideImage => {
      const fileId = slideImage[Object.keys(slideImage)[0]];
      return imageUrls[fileId] === zoomedImage;
    });

    if (currentImageIndex === listing.slideImages.length - 1) {
      setZoomedImage(imageUrls[listing.slideImages[0][Object.keys(listing.slideImages[0])[0]]]);
    } else {
      setZoomedImage(imageUrls[listing.slideImages[currentImageIndex + 1][Object.keys(listing.slideImages[currentImageIndex + 1])[0]]]);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center m-auto p-auto">
        {listing.slideImages.map((slideImage, index) => {
          const fileId = slideImage[Object.keys(slideImage)[0]];
          return (
            <Col md={2} sm={3} xs={4} key={index}>
              <Card className="mb-0" onClick={() => handleThumbnailClick(index)}>
                <div className="thumb-container thumb-card">
                  <Card.Img id="thumb-img"
                    variant="top"
                    src={imageUrls[fileId]}
                    alt={Object.keys(slideImage)[0]}
                  />
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row>
        <Col>
          <div className="d-flex justify-content-center align-items-center">
            <Button variant="secondary" onClick={handlePrevClick}>
              <i className="feather icon-arrow-left"></i>
            </Button>
            <Carousel ref={carouselRef} controls={false} indicators={false}>
              {listing.slideImages.map((slideImage, index) => {
                const fileId = slideImage[Object.keys(slideImage)[0]];
                return (
                  <Carousel.Item key={index}>
                    <Row>
                      <Col md={12}>
                        <Card className="zoom-card m-1" onClick={() => handleImageClick(imageUrls[fileId])}>
                          <div className="carousel-item-container">
                            <Card.Img
                              variant="top"
                              src={imageUrls[fileId]}
                              alt={Object.keys(slideImage)[0]}
                            />
                          </div>
                        </Card>
                      </Col>
                    </Row>
                  </Carousel.Item>
                );
              })}
            </Carousel>
            <Button variant="secondary" onClick={handleNextClick}>
              <i className="feather icon-arrow-right"></i>
            </Button>
          </div>
        </Col>
      </Row>
      <Modal show={showModal} onHide={handleCloseModal} centered size="lg">
        <Modal.Body>
          <img id="modal-img" src={zoomedImage} alt="Zoomed" style={{ width: "100%" }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleModalPrevClick}>
            Prev
          </Button>
          <Button variant="primary" onClick={handleModalNextClick}>
            Next
          </Button>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default CardCarousel;