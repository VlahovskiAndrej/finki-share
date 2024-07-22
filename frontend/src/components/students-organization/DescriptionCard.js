import Card from 'react-bootstrap/Card';
import classes from './Description.module.css'

const DescriptionCard = ({description, redirectLink}) => {
    return (
        <Card
            style={{width: '18rem', borderRadius: '2em', height: '18rem'}}
            className={classes.descriptionCard}
        >
            <Card.Body className="text-center">
                <Card.Title
                >{description.slice(0,180)}...</Card.Title>
            </Card.Body>
            <Card.Footer>
                <a href={redirectLink}>Click to see the full Program</a>
            </Card.Footer>
        </Card>
    );
}
export default DescriptionCard