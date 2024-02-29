import { useEffect, useState } from "react";

function useAuthStatus() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const response = await fetch('http://localhost:8080/check-login', {
                    method: 'GET',
                    credentials: 'include'
                });
                if (response.ok) {
                    const resultObject = await response.json();
                    if (resultObject["authenticated"]) {
                        setUsername(resultObject["user"]["username"]);
                        setIsLoggedIn(resultObject["authenticated"]);
                    } else {
                        setIsLoggedIn(resultObject["authenticated"]);
                    }
                }
            } catch (error) {
                console.error('Error checking login status:', error);
            }
        };
        checkLoginStatus();
    }, []);

    return { isLoggedIn, username };
}

export default useAuthStatus;