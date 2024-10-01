import React, { useEffect, useRef, useState } from "react";
import { Card, Modal, Table, Button } from 'react-bootstrap';
import "./ProductCard.css"; 

const ProductCard = ({ title, image, short_description, long_description, product_spec }) => {
  const [show, setShow] = useState(false);
  const cardImgRef = useRef(null); // Reference to the card image
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const cardImgElement = cardImgRef.current;

    // IntersectionObserver callback
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When the image comes into view
          cardImgElement.classList.add('visible'); // Apply visible class
          cardImgElement.classList.add('zoom-in'); // Apply zoom-in class
        } else {
          // When the image goes out of view
          cardImgElement.classList.remove('visible'); // Remove visible class
          cardImgElement.classList.remove('zoom-in'); // Remove zoom-in class
        }
      });
    };

    // Set up the observer
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1 // Trigger when 10% of the card is visible
    });

    if (cardImgElement) {
      observer.observe(cardImgElement); // Observe the image element
    }

    // Cleanup observer on component unmount
    return () => {
      if (cardImgElement) {
        observer.unobserve(cardImgElement);
      }
    };
  }, []);

  // Ensure product_spec is defined and is an array
  const specifications = (product_spec || []).map(spec => {
    const [item, value] = spec.split(/:(.+)/); // Split each spec into key and value
    return { item: item.trim(), value: value.trim() }; // Trim whitespace
  });

  return (
    <>
      <Card style={{ width: "200px" }} onClick={handleShow}>
        <Card.Img
          className="card_img"
          variant="top"
          src={image}
          width="200px"
          height="200px"
          ref={cardImgRef} // Assign the ref to the image
        />
        <Card.Body className="product_card_body">
          <Card.Title className="w-100 text-center">{title}</Card.Title>
        </Card.Body>
      </Card>

      <Modal fullscreen={'sm-down'} size={'lg'} centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-column flex-md-row align-items-center'>
          <div className="Modal_body_image">
            <img src={image} alt="Product" />
          </div>
          <div className="Modal_body_text">

            {/* Render short description if it exists*/}
            {short_description && (
              <div className="short_description mb-3">
                <p>{short_description}</p>
              </div>
            )}

            {/*Render long description if it exists and is an array*/}
            {Array.isArray(long_description) && long_description.length > 0 && (
              <div className="long_description mb-3">
                <ul>
                  {long_description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            )}
                {/*Render product specifications if no descriptions exits*/}
            {!short_description && (!long_description || long_description.length === 0) && (
              <div className="product_spec">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Specification</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specifications.map((spec, index) => (
                      <tr key={index}>
                        <td>{spec.item || "N/A"}</td>
                        <td>{spec.value || "N/A"}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProductCard;
