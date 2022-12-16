CREATE DATABASE crud_shells;

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