import Card from 'react-bootstrap/Card';

const InformationCard = ({imgPath, organizationName}) => {

    return (
        <Card
            style={{width: '18rem', borderRadius: '2em', height: '18rem'}}
            className="mb-2"
        >
            <Card.Header>

            </Card.Header>
            <Card.Img variant="top" src={imgPath} className="w-50 mx-auto mt-2"/>
            <Card.Body className="text-center">
                <Card.Title
                >{organizationName}</Card.Title>

            </Card.Body>
            <Card.Footer>
                <small className="text-muted"> Tap to see more details</small>
            </Card.Footer>
        </Card>
    );
}
export default InformationCard;