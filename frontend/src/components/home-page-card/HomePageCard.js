import Card from 'react-bootstrap/Card';
import classes from "./HomePageCard.module.css"

const HomePageCard = ({ imgUrl, mainText, subText }) => {
    return (
        <>
            <Card
                bg='light'
                text='dark'
                style={{ width: '18rem', borderRadius: '2em' }}
                className={classes.informationCard}
            >
                <img alt='/' src={imgUrl} style={{ width: '30%', position: 'absolute', right: '85%', top: '-20%' }}></img>
                <Card.Body style={{ minHeight: '200px' }}>
                    <Card.Title
                        style={{ textAlign: 'center' }}
                    >{mainText}</Card.Title>
                    <Card.Text
                        style={{ textAlign: 'center' }}>
                        {subText}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default HomePageCard;