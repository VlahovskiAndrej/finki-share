import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardComponent.module.css';
import {useState} from "react";
import CardDetails from "./CardDetails";

function CardComponent(props) {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (clicked)
            setClicked(false);
        else
            setClicked(true);
    };

    return (
        <Card style={{ width: '', margin: "10px 0"} }>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                    <p>Семестар: {props.term}</p>
                </Card.Text>
                <Button variant={clicked ? "success" : "secondary"} onClick={handleClick}>Земи предмет!</Button>
                <CardDetails></CardDetails>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;