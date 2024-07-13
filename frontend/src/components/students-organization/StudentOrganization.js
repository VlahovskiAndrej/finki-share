import Card from 'react-bootstrap/Card';

export default function StudentOrganization({ imgPath, organizationName }) {

    return (
        <Card
            style={{ width: '18rem', borderRadius: '2em' }}
            className="mb-2"
        >
            <Card.Img variant="top" src={imgPath} style={{ width: '50%', alignSelf: 'center' }} />
            <Card.Body>
                <Card.Title
                style={{textAlign:'center'}}
                >{organizationName}</Card.Title>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    );
}