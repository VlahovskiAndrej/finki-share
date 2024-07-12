import Card from 'react-bootstrap/Card';

export default function StudentOrganization({imgPath, organizationName}) {

    return (
        <Card
            style={{width: '18rem', borderRadius: '2em', height: '18rem'}}
            className="mb-2"
        >
            <Card.Img variant="top" src={imgPath} style={{width: '50%', alignSelf: 'center'}}/>
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