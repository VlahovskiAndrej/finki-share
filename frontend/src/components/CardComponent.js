import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import classes from './CardComponent.module.css';
import {useState} from "react";
import CardDetails from "./CardDetails";
import popover from "bootstrap/js/src/popover";

function replaceProgramNames(str) {
    if (str === undefined)
        return str
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
    const [clicked, setClicked] = useState(props.subject['isTaken']);
    const [formData, setFormData] = useState(props.subject.name);

    const handleClick = () => {
        if (clicked) setClicked(false);
        else setClicked(true);
    };

        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                const response = await fetch('http://localhost:8080/subjects', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) console.log('POST request successful')
                else console.error('POST request failed');

            } catch (error) {
                console.error('Error:', error);
            }
        };

    return (
        <Card style={{ height: '180px', margin: "10px 0", backgroundColor: clicked ? '#c9f8c9' : '' }}>
            <Card.Body>

                <Card.Title style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                }}>{props.subject['name']}</Card.Title>

                <Card.Text>
                    {props.subject['code']}
                    <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>{replaceProgramNames(props.subject['studyProgram'])}</p>
                </Card.Text>

                <CardDetails subject={props.subject}></CardDetails>

                <form onSubmit={handleSubmit} style={{display: "inline-block", marginLeft:"5px"}}>
                        <input type="text" name="name" value={formData.name}  hidden={true}/>
                    <Button type="submit" variant={clicked ? 'danger' : 'secondary'}  onClick={handleClick}>{clicked ? 'Отстрани предмет!' : 'Земи предмет!'}</Button>
                </form>

            </Card.Body>
        </Card>
    );
}

export default CardComponent;