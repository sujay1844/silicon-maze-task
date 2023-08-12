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
    //
    // Password should contain atleast 1 Capital letter,1 Small letter, 1 Symbol, 1 Number.
    // First Name and Last Name should start with capital Letter
    // Validate input of email field for valid email Id.


    const validateForm = () => {
        // first name validation
        if (FirstName === "") {
            setErrorMessage("Invalid first name");
            return;
        }
        if (FirstName[0] !== FirstName[0].toUpperCase()) {
            setErrorMessage("Invalid first name");
            return;
        }
        // last name validation
        if (LastName === "") {
            setErrorMessage("Invalid last name");
            return;
        }
        if (LastName[0] !== LastName[0].toUpperCase()) {
            setErrorMessage("Invalid last name");
            return;
        }
        // password validation
        if (Password === "") {
            setErrorMessage("Invalid password");
            return;
        }
        if (!Password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{4,}$/)) {
            setErrorMessage("Invalid password");
            return;
        }
        // email validation
        if (EmailId === "") {
            setErrorMessage("Invalid email address");
            return;
        }
        if (!EmailId.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
            setErrorMessage("Invalid email address");
            return;
        }
        setErrorMessage("");
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
