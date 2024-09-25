import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import "./Product-card.css";

const CARD_SIZE = "200px";

function ProductCard({ title, image, product_spec }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Convert product_spec array into key-value pairs
  const specifications = product_spec.map(spec => {
    const [item, value] = spec.split(/:(.+)/); // Split each spec into key and value
    return { item: item.trim(), value: value.trim() }; // Trim whitespace
  });

  return (
    <>
      <Card style={{ width: CARD_SIZE }} onClick={handleShow}>
        <Card.Img variant="top" src={image} width={CARD_SIZE} height={CARD_SIZE}/>
        <Card.Body className="product_card_body">
          <Card.Title className="w-100 text-center">{title}</Card.Title>
        </Card.Body>
      </Card>

      <Modal fullscreen={'md-down'} size={'xl'} centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="w-100 text-center">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex flex-row'>
          <div className="Modal_body_image">
            <img src={image} alt="Product Image" />
          </div>
          <div className="Modal_body_text">
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

export default ProductCard