-- NOTE: I figured we'd want this for the section on SQL
PRAGMA foreign_keys;

-- NOTE: For the SQL assignment, we could have them normalize
-- this database farther. Perhaps they can learn about SERIAL and
-- then go implement a way to change a room_name without losing
-- references by using a FOREIGN KEY into a rooms table with an 
-- int primary key.
CREATE TABLE songs (
	id int NOT NULL PRIMARY KEY,
	song_title text NOT NULL,
	notes varchar NOT NULL
);

INSERT INTO songs (id, song_title, notes) 
VALUES (1, 'Ode to Joy (Dubstep Remix)', 'E4 E4 F4 G4 G4 F4 E4 D4 C4 C4 D4 E4 E4 D4 D4');

INSERT INTO songs (id, song_title, notes)
VALUES (4, 'Basic March', 'G4 G4 Gb4 G4 E4 E4 E4 Eb4 E4 C4 C4 C4 E4 D4 C4 D4 D4 D4 F4 E4 D4 C4 E4 C4');

INSERT INTO songs (id, song_title, notes)
VALUES (5, 'Sailor Moon', 'A3 D4 F4 A4 A4 G4 G4 F4 E4 G4 A3 Db4 E4 G4 G4 F4 F4 E4 D4 F4 A3 D4 F4 A4 A4 G4 G4 A4 C5 Bb4 Bb4 A4 G4 A4 G4 F4 E4 D4');

INSERT INTO songs (id, song_title, notes)
VALUES (6, 'Megalovania Intro', 'D3 D3 D4 A3 Ab3 G3 F3 F3 F3 G3 C3 C3 D4 A3 Ab3 G3 F3 F3 F3 G3 B2 B2 D4 A3 Ab3 G3 F3 F3 F3 G3 Bb2 Bb2 D4 A3 Ab3 G3 F3 F3 F3 G3');

INSERT INTO songs (id, song_title, notes)
VALUES (7, 'Megalovania Bassline', 'F2 F2 F2 F2 F2 F2 F2 F0 E2 E2 E2 E2 E2 E2 E2 E0 D2 D2 D2 D2 D2 D2 D2 D0 Db2 Db2 Db2 E2 E2 E2 E2 E0');