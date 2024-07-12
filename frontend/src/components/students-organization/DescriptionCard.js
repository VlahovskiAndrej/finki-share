import Card from 'react-bootstrap/Card';

const DescriptionCard = ({description, redirectLink}) => {
    return (
        <Card
            style={{width: '18rem', borderRadius: '2em', height: '18rem'}}
            className="mb-2"
        >
            <Card.Body className="text-center">
                <Card.Title
                >{description.slice(0,180)}...</Card.Title>
            </Card.Body>
            <Card.Footer>
                {/*<small className="text-muted">Full Program: </small>*/}
                <a href={redirectLink}>Click to see the full Program</a>
            </Card.Footer>
        </Card>
    );
}
export default DescriptionCard