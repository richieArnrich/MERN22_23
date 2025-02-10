import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Footer() {
  return (
    <div>
      <Card style={{ backgroundColor: "#FFF8DC" }}>
        <Card.Body>
          <Card.Title>Get In touch</Card.Title>
          <Card.Text>Subscribe to our newsletters.</Card.Text>
          <Button variant="primary">Subscribe</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Footer;
