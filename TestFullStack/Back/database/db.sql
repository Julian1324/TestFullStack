/* Se debe ejecutar por bloques*/

CREATE DATABASE ciatDB;

/*USE ciatDB;*/

----------------------------------------------------------------------------
CREATE TABLE headquarters(
    id INT(11) NOT NULL,
    headquarter VARCHAR(3) NOT NULL,
    acronym VARCHAR(10) NOT NULL,
    name VARCHAR(45) NOT NULL,
    location VARCHAR(32) NOT NULL
)

----------------------------------------------------------------------------

ALTER TABLE headquarters
    ADD PRIMARY KEY (id);

ALTER TABLE headquarters
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

----------------------------------------------------------------------------

CREATE TABLE branch(
    id INT(11) NOT NULL,
    headquarter VARCHAR(3) NOT NULL,
    acronym VARCHAR(10) NOT NULL,
    name VARCHAR(45) NOT NULL,
    location VARCHAR(32) NOT NULL
)

----------------------------------------------------------------------------

ALTER TABLE branch
    ADD PRIMARY KEY (id);

ALTER TABLE branch
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

----------------------------------------------------------------------------

CREATE TABLE partners(
    id INT(11) NOT NULL,
    id_headquarter INT(11) NOT NULL,
    id_branch INT(11) NOT NULL
)

----------------------------------------------------------------------------

ALTER TABLE partners
    ADD PRIMARY KEY (id);

ALTER TABLE partners
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

ALTER TABLE partners
    ADD FOREIGN KEY (id_headquarter) REFERENCES headquarters(id);

ALTER TABLE partners
    ADD FOREIGN KEY (id_branch) REFERENCES branch(id);

----------------------------------------------------------------------------

CREATE TABLE users(
    id INT(11) NOT NULL,
    name VARCHAR(16) NOT NULL,
    password VARCHAR(16) NOT NULL
)

----------------------------------------------------------------------------

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1;

----------------------------------------------------------------------------

INSERT INTO headquarters (headquarter,acronym,name,location) VALUES ('Yes','CIAT','Centro Internacional de Agricultura Tropical','Palmira, Colombia');
INSERT INTO headquarters (headquarter,acronym,name,location) VALUES ('Yes','CIP','Centro Internacional de la Papa','Lima, Perú');
INSERT INTO headquarters (headquarter,acronym,name,location) VALUES ('Yes','IFPRI','Internacional Food Policy Research Institute','Washington DC, United States');




/*
CONSTRAINT fk_headquarter FOREIGN KEY (id_headquarter) REFERENCES headquarters(id);
CONSTRAINT fk_branch FOREIGN KEY (id_branch) REFERENCES branch(id);*/