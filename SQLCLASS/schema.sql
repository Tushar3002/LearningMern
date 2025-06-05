create table user(
    id varchar(30) primary key,
    username varchar(50) unique,
    email varchar(50) unique not null,
    password varchar(30) not null
);