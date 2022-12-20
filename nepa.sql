DROP DATABASE Nepa;
CREATE DATABASE Nepa;
USE Nepa;
CREATE TABLE Ikedc(
Id int auto_increment primary key,
Relationship_Manager varchar(180) not null,
City varchar(180) not null,
treet varchar(180) not null,
House_Number int(180) not null,
Meter_type varchar(180) not null,
Createdat date,
Updatedat date
);
Select * From Ikedc
