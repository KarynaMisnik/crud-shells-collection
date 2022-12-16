import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Pack_of20Ch1pz",
    database: "crud_shells",
});

app.get("/", (req, res) => {
    res.json("Hello!");
});

app.get("/shells", (req, res) => {
    const q = "SELECT * FROM shells_db";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});

app.post("/shells", (req, res) => {
    const q =
        "INSERT INTO shells_db (`name`, `species`, `description`, `color`, `finder_name`,`place`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.species,
        req.body.description,
        req.body.color,
        req.body.finder_name,
        req.body.place,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.delete("/shells/:id", (req, res) => {
    const shellId = req.params.id;
    const q = "DELETE FROM shells_db WHERE id = ?";

    db.query(q, [shellId], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.put("/shells/:id", (req, res) => {
    const shellId = req.params.id;
    const q =
        "UPDATE shells_db SET `name` = ?, `species` = ?, `description` = ?, `color` = ?, `finder_name` = ?, `place` = ? WHERE id = ?";

    const values = [
        req.body.name,
        req.body.species,
        req.body.description,
        req.body.color,
        req.body.finder_name,
        req.body.place,
    ];

    db.query(q, [...values, shellId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.listen(8800, () => {
    console.log("Connected to backend");
});
