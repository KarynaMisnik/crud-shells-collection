# crud-shells-collection

👉 General info

Track the collection of shells 🐚☀️🌊

👉 Technologies

JS;

REACT.js;

Express.js;

MySQL(Workbench);

HTML;

CSS;

👉 Setup

Database:

📁 crud/backend/shells_db.sql

In MySQL workbench 

"Create a new SQL tab for executing queires": 

1️⃣ 

CREATE DATABASE crud_shells;

2️⃣ 

USE  crud_shells;
CREATE TABLE shells_db(
id int,   
name varchar(100), 
species varchar(100), 
description tinytext, 
color varchar(100), 
finder_name varchar(100), 
place varchar(100),
PRIMARY KEY( id )
);

Use locally in your web browser

cd client
npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

Custom styles:
📁 crud/client/src/style.css

