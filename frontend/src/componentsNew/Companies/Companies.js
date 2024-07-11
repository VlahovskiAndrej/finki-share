import Card from 'react-bootstrap/Card';
import ReactCardFlip from 'react-card-flip';
import StudentOrganization from '../StudentsOrganization/StudentOrganization';
import { useState } from 'react';
export default function Companies(imgPath, organizationName, content) {

    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard() {
        setIsFlipped(!isFlipped);
    }

    return (
        <>
            <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
                <div onClick={flipCard}>
                    <StudentOrganization
                        imgPath={imgPath}
                        organizationName={organizationName}></StudentOrganization>
                </div>
                <div onClick={flipCard}>
                    <div>
                        {content}
                    </div>
                </div>
            </ReactCardFlip>
        </>
    );
}