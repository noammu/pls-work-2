import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import espeonImage from "../assets/espeon.png";

export const ReactBootstrap = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={espeonImage} alt="Espeon" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
