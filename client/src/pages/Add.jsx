import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
    const [shell, setShell] = useState({
        name: "",
        species: "",
        description: "",
        color: "",
        finder_name: "",
        place: "",
    });
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setShell((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/shells", shell);
            navigate("/");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    return (
        <div className="form">
            <h1>Add New Shell</h1>
            <input
                type="text"
                placeholder="Shell name"
                onChange={handleChange}
                name="name"
            />
            <input
                type="text"
                placeholder="Shell species"
                onChange={handleChange}
                name="species"
            />
            <textarea
                className="shell_desc"
                rows={5}
                placeholder="Shell description"
                onChange={handleChange}
                name="description"
            />
            <input
                type="text"
                placeholder="Shell color"
                onChange={handleChange}
                name="color"
            />
            <input
                type="text"
                placeholder="Shell finder"
                onChange={handleChange}
                name="finder_name"
            />
            <input
                type="text"
                placeholder="Shell place"
                onChange={handleChange}
                name="place"
            />
            <button className="formButton" onClick={handleClick}>
                Add
            </button>
            {error && "Something went wrong"}
            <Link className="all_shells-view" to="/">
                See All Shells
            </Link>
        </div>
    );
};

export default Add;
