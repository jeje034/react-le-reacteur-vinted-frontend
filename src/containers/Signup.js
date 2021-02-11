import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Signup = ({ setTokenInMemoryAndInCookie }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    const handleToken = async () => {
        let newToken = "";
        try {
            const response = await axios.post(
                "http://localhost:3000/user/signup",
                {
                    username: username,
                    email: email,
                    password: password,
                }
            );
            newToken = response.data.token;
            if (newToken) {
                setTokenInMemoryAndInCookie(newToken);
                history.push("/");
            } else {
                setTokenInMemoryAndInCookie(newToken);
            }
        } catch (error) {
            console.log("An error occured : ", error);
            setTokenInMemoryAndInCookie(newToken);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleToken();
    };

    const handleUsernameChange = (event) => {
        const value = event.target.value;
        setUsername(value);
    };
    const handleEmailChange = (event) => {
        const value = event.target.value;
        setEmail(value);
    };

    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
    };

    return (
        <div>
            <div>S'inscrire</div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Nom d'utilisateur"
                    value={username}
                    onChange={handleUsernameChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <button type="submit" className="signup-button">
                    S'inscrire
                </button>
            </form>
        </div>
    );
};

export default Signup;
