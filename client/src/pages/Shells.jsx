import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Shells = () => {
    const [shells, setShells] = useState([]);

    useEffect(() => {
        const fetchAllShells = async () => {
            try {
                const res = await axios.get("http://localhost:8800/shells");
                setShells(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllShells();
    }, []);

    console.log(shells);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/shells/${id}`);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <h1>Shells Collection</h1>
            <div className="shells">
                {shells.map((shell) => (
                    <div className="shell" key={shell.id}>
                        <p>
                            <b>Shell name: </b>
                            {shell.name}
                        </p>

                        <p>
                            <b>Species: </b>
                            {shell.species}
                        </p>

                        <p>
                            <b>Description: </b>
                            {shell.description}
                        </p>

                        <p>
                            <b> Color: </b>
                            {shell.color}
                        </p>

                        <p>
                            <b>Finder: </b>
                            {shell.finder_name}
                        </p>

                        <p>
                            <b>Place: </b>
                            {shell.place}
                        </p>

                        <button className="delete" onClick={() => handleDelete(shell.id)}>
                            Delete
                        </button>
                        <button className="update">
                            <Link
                                style={{ textDecoration: "none" }}
                                to={`/update/${shell.id}`}
                            >
                                Update
                            </Link>
                        </button>
                    </div>
                ))}
            </div>

            <button className="addHome">
                <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
                    Add new shell
                </Link>
            </button>
        </div>
    );
};

export default Shells;
