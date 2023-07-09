import "./form.css";
import { useState } from "react";

export default function Form() {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Password, setPassword] = useState("");
    const [EmailId, setEmailId] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // give "Invalid first name" error message if first name is not valid
    // give "Invalid last name" error message if first name is not valid
    // give "Invalid password" error message if password is not valid
    // give "Invalid email address" error message if email address is not valid

    const validateForm = () => {

    };


    return (
        <main>
            <div className="form">
                {errorMessage && <div className="error">{errorMessage}</div>}
                <div className="inputContainer">
                    <label htmlFor="fname">First name:</label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        className="input"
                        value={FirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="lname">Last name:</label>
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        className="input"
                        value={LastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="input"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="input"
                        value={EmailId}
                        onChange={(e) => setEmailId(e.target.value)}
                    />
                </div>
                <button className="button" onClick={validateForm}>
                    Submit
                </button>
            </div>
        </main>
    );
}
