import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardComponent.module.css';
import {useState} from "react";
import CardDetails from "./CardDetails";

function replaceProgramNames(str) {
    str = str.replaceAll("Примена на информациски технологии", "ПИТ");
    str = str.replaceAll("Софтверско инженерство и информациски системи", "СИИС");
    str = str.replaceAll("Интернет, мрежи и безбедност", "ИМБ");
    str = str.replaceAll("Software engineering and information systems", "SEIS");
    str = str.replaceAll("Компјутерски науки", "КН");
    str = str.replaceAll("Компјутерско инженерство", "КИ");
    str = str.replaceAll("Информатичка едукација", "ИЕ");
    str = str.replaceAll("Стручни студии за програмирање", "ССП");
    str = str.replaceAll("Управување во информатички технологии", "УИТ");
    str = str.replaceAll("Биоинформатика", "БИ");
    str = str.replaceAll("Безбедност, криптографија и кодирање", "БКК");
    str = str.replaceAll("Статистика и аналитика на податоци", "САП");
    str = str.replaceAll("Софтверско инженерство", "СИ");
    str = str.replaceAll("Пресметување во облак", "ПО");

    str = str.replaceAll(",", "");
    const characters = str.split(" ");
    const uniqueCharacters = new Set(characters);
    return Array.from(uniqueCharacters).join(', ');
}

function CardComponent(props) {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if (clicked)
            setClicked(false);
        else
            setClicked(true);
    };

    return (
        <Card style={{ height: '200px', margin: "10px 0"} }>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>{props.subject['name']}</Card.Title>
                <Card.Text>
                    {props.subject['Код']}
                    <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{replaceProgramNames(props.subject['Студиска програма'])}</p>
                </Card.Text>
                <Button variant={clicked ? "success" : "secondary"} onClick={handleClick}>Земи предмет!</Button>
                <CardDetails subject={props.subject}></CardDetails>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;