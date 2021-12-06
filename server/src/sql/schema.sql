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
VALUES (6, 'Megalovania Intro', 'D4 D4 D5 A4 Ab4 G4 F4 F4 F4 G4 C4 C4 D5 A4 Ab4 G4 F4 F4 F4 G4 B3 B3 D5 A4 Ab4 G4 F4 F4 F4 G4 Bb3 Bb3 D5 A4 Ab4 G4 F4 F4 F4 G4');

INSERT INTO songs (id, song_title, notes)
VALUES (7, 'Megalovania 2nd part Primary', 'D0 D5 A4 Ab4 G4 F4 F4 F4 G4 C0 D5 A4 Ab4 G4 F4 F4 F4 G4 B0 D5 A4 Ab4 G4 F4 F4 F4 G4 Bb0 D5 A4 Ab4 G4 F4 F4 F4 G4');

INSERT INTO songs (id, song_title, notes)
VALUES (8, 'Megalovania 2nd part Bassline', 'F3 F3 F3 F3 F3 F3 F3 F0 E3 E3 E3 E3 E3 E3 E3 E0 D3 D3 D3 D3 D3 D3 D3 D0 Db3 Db3 Db3 E3 E3 E3 E3 E0');

-- INSERT INTO songs (id, song_title, notes) 
-- VALUES (10, 'A Chord Test', '[A2, E2, A3, Db2]');

INSERT INTO songs (id, song_title, notes)
VALUES(9, 'Canon', 'A5 F#5 G5 A5 F#5 G5 A5 A4 B4 C#5 D5 E5 F#5 G5 F#5 D5 E5 F#5 F#4 G4 A4 B4 A4 G4 A4 F#4 G4 A4 F#4 B4 A4 G4 F#4 E4 F#4 E4 D4 E4 F#4 G4 A4 B4 G4 B4 
A4 B4 C#5 D5 A4 B4 C#5 D5 E5 F#5 G5 A5 F#5 D5 E5 F#5 E5 D5 E5 C5 D5 E5 F#5 E5 D5 C5 D5 B4 C#5 D5 D4 E4 F#4 G4 F#4 E4 F#4 D5 C#5 D5 B4 D5 C#5 B4 A4 G4 A4 G4 F#4 
G4 A4 B4 C#5 D5');

INSERT INTO songs (id, song_title, notes)
VALUES (11, 'Mario Theme','E4 E4 E4 C4 E4 G4 G3 C4 G3 E3 F3 B3 Bb3 A3 G3 E4 G4 A4 F4 G4 E4 C4 D4 B3');