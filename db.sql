DROP TABLE stats;
DROP TABLE evolution;
DROP TABLE pokemon;
--CREATE TABLE login(username VARCHAR PRIMARY KEY NOT NULL, password VARCHAR NOT NULL)
CREATE TABLE pokemon(name VARCHAR(30) NOT NULL, pokedex SERIAL NOT NULL  PRIMARY KEY, type VARCHAR(40));
CREATE TABLE stats( id SERIAL NOT NULL PRIMARY KEY REFERENCES pokemon(pokedex), hp int NOT NULL, attack int NOT NULL, defense int NOT NULL, sp_attack int NOT NULL, sp_defense int NOT NULL, speed int NOT NULL);
CREATE TABLE evolution(id SERIAL NOT NULL PRIMARY KEY REFERENCES pokemon(pokedex), evolution_num FLOAT NOT NULL, evolve_at char(20));

--INSERT INTO login VALUES ('guest', 'guest');
INSERT INTO pokemon(name, type) VALUES ('Bulbasaur', 'grass/poison');
INSERT INTO pokemon(name, type) VALUES ('Ivysaur', 'grass/poison');
INSERT INTO pokemon(name, type) VALUES ('Venusaur', 'grass/poison');
INSERT INTO pokemon(name, type) VALUES ('Charmander', 'fire');
INSERT INTO pokemon(name, type) VALUES ('Charmeleon', 'fire');
INSERT INTO pokemon(name, type) VALUES ('Charzard', 'fire/flying');
INSERT INTO pokemon(name, type) VALUES ('Squirtle', 'water');
INSERT INTO pokemon(name, type) VALUES ('Wartortle', 'water');
INSERT INTO pokemon(name, type) VALUES ('Blastoise', 'water');


INSERT INTO stats(hp, attack, defense, sp_attack, sp_defense, speed) VALUES (45, 49, 49, 65, 65, 45); --1
INSERT INTO stats(hp, attack, defense, sp_attack, sp_defense, speed) VALUES (60, 62, 63, 80, 80, 60); --2
INSERT INTO stats(hp, attack, defense, sp_attack, sp_defense, speed) VALUES (80, 82, 83, 100, 100, 80); --3
INSERT INTO stats(hp, attack, defense, sp_attack, sp_defense, speed) VALUES (39, 52, 43, 60, 50, 65); --4
INSERT INTO stats(hp, attack, defense, sp_attack, sp_defense, speed) VALUES (58, 64, 58, 80, 65, 80); --5
INSERT INTO stats(hp, attack, defense, sp_attack, sp_defense, speed) VALUES (78, 84, 78, 109, 85, 100); --6
INSERT INTO stats(hp, attack, defense, sp_attack, sp_defense, speed) VALUES (44, 48, 65, 50, 64, 43); --7
INSERT INTO stats(hp, attack, defense, sp_attack, sp_defense, speed) VALUES (59, 63, 80, 65, 80, 58); --8
INSERT INTO stats(hp, attack, defense, sp_attack, sp_defense, speed) VALUES (79, 83, 100, 85, 108, 100); --9


INSERT INTO evolution(evolution_num, evolve_at) VALUES(1.3, 16); -- 1
INSERT INTO evolution(evolution_num, evolve_at) VALUES(2.3, 32);
INSERT INTO evolution(evolution_num) VALUES(3.3);

INSERT INTO evolution(evolution_num, evolve_at) VALUES(1.3, 16); -- 4 char
INSERT INTO evolution(evolution_num, evolve_at) VALUES(2.3, 32);
INSERT INTO evolution(evolution_num) VALUES(3.3);

INSERT INTO evolution(evolution_num, evolve_at) VALUES(1.3, 16); -- 4 squirt
INSERT INTO evolution(evolution_num, evolve_at) VALUES(2.3, 32);
INSERT INTO evolution(evolution_num) VALUES(3.3);