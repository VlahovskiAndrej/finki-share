import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useState} from "react";
import CardDetails from "../CardDetails";
import useSetSubject from "../../hooks/useSetSubject";


const replaceProgramNames = (str) => {
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

const CardComponent = (props) => {
    console.log(props.subject)
    const [clicked, setClicked] = useState(props.subject['isTaken']);
    const [hover, setHover] = useState(false);
    const formData = props.subject.name;

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleSubmit = useSetSubject();

    return (
        <Card
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                height: '180px',
                margin: '10px 0',
                backgroundColor: hover ? '#814A35' : '#CDC1B6',
                color: hover ? '#FFFADA' : '#28231D',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out, background-color 0.3s ease-in-out',
                transform: clicked ? 'scale(1.02)' : 'scale(1)'
            }}
        >
            <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <div>
                    <Card.Title style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        color: hover ? '#FFFADA' : '#28231D' // Ensure title text is readable
                    }}>{props.subject['name']}</Card.Title>
                    <Card.Text style={{color: hover ? '#FFFADA' : '#28231D'}}>
                        {props.subject['code']}
                        <p style={{
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                        }}>{replaceProgramNames(props.subject['studyProgram'])}</p>
                    </Card.Text>
                </div>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <CardDetails subject={props.subject} setHover={setHover}/>
                    <form onSubmit={(event) => handleSubmit(event, formData)} style={{marginTop: '10px'}}>
                        <input type="text" name="name" value={formData.name} hidden/>
                        <div>
                            <Button type="submit"
                                    variant={clicked ? 'danger' : 'secondary'}
                                    onClick={handleClick}>
                                {clicked ? 'Отстрани го!' : 'Земи предмет!'}
                            </Button>
                        </div>
                    </form>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;