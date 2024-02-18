import classes from "./ButtonTakeSubject.module.css"
import React, { useState } from 'react';

const ButtonTakeSubject = () => {
    const [processing, setProcessing] = useState(false);

    const handleClick = () => {
        setProcessing(true);
        setTimeout(() => {
            setProcessing(false);
        }, 5000);
    };

    return (
        <button
            className={`${classes.submit} ${processing ? classes.process : ''} ${processing ? classes.submitted : ''}`}
            onClick={handleClick}
        >
            {processing ? (
                <>
                    <span className={classes.tick}>&#10004;</span>
                    Processing
                </>
            ) : (
                'Submit'
            )}
        </button>
    );
};

export default ButtonTakeSubject;