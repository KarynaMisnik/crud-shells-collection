import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Update = () => {
    const [shell, setShell] = useState({
        name: "",
        species: "",
        description: "",
        color: "",
        finder_name: "",
        place: "",
    });
    const [error, setError] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const shellId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setShell((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await axios.put(`http://localhost:8800/shells/${shellId} `, shell);
            navigate("/");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    return (
        <div className="form">
            <h1>Update the Shells Collection </h1>
            <input
                type="text"
                placeholder="Shell name"
                name="name"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Shell species"
                name="species"
                onChange={handleChange}
            />

            <textarea
                rows={5}
                type="text"
                placeholder="Shell description"
                name="description"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Shell color"
                name="color"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Shell finder"
                name="finder_name"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Shell place"
                name="place"
                onChange={handleChange}
            />
            <button className="formButton" onClick={handleClick}>
                Update
            </button>
            {error && "Something went wrong!"}
            <Link style={{ textDecoration: "none" }} to="/">
                See all shells
            </Link>
        </div>
    );
};

export default Update;
