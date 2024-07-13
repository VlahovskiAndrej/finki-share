import { useState, useEffect } from "react";

const useTakenSubjects = () => {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const url = 'http://localhost:8080/subjects/taken';
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setSubjects(data);
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return subjects;
}

export default useTakenSubjects;
