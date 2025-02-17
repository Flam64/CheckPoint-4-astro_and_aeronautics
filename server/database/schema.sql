CREATE TABLE role (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  is_Admin BOOLEAN
);

CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role_id INT NOT NULL,
  CONSTRAINT FOREIGN KEY(role_id) REFERENCES role(id)
 
);


CREATE TABLE category (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(100) 
);

CREATE TABLE article (
  id INT  PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  picture VARCHAR(255) NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  user_id INT NOT NULL,
  category_id INT NOT NULL,
  is_published BOOLEAN,
  views INT,
  CONSTRAINT FOREIGN KEY (user_id) REFERENCES user(id),
  CONSTRAINT FOREIGN KEY (category_id) REFERENCES category(id)
);


CREATE TABLE usefull_link (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(40) NOT NULL,
  url VARCHAR(255) NOT NULL
);

INSERT INTO role (id,is_admin )
VALUES (1,TRUE);

INSERT INTO user (id,firstname, lastname, email, password, role_id)
VALUES (1,"sesam","Larue","sesame.larue@exemple.fr","Arthur1234!", 1 );

INSERT INTO category (id, title)
VALUES (1,"Aeronautique");

INSERT INTO article (id, title, content, picture, user_id, category_id)
VALUES 
(1,"Télescope Sky-Watcher 114900", "La réalité virtuelle autorise aujourd’hui tous les possibles, dont celui de faire découvrir l’espace au plus grand nombre. Mais avant d’être un outil promotionnel, c’est aussi un moyen de former des astronautes.","https://www.cieletespace.fr/media/default/0001/26/RV_NASA_160-679c.jpeg", 1,1), 
(2,"Monture équatoriale Sky-Watcher NEQ3-2", "La réalité virtuelle autorise aujourd’hui tous les possibles, dont celui de faire découvrir l’espace au plus grand nombre. Mais avant d’être un","https://www.telescopes-et-accessoires.fr/Files/131989/Img/19/SW0456-2.jpg", 1,1),
(3,"Monture équatoriale Sky-Watche", "La réalité virtuelle autorise aujourd’hui tous les possibles, dont celui de faire découvrir l’espace au plus grand nombre. Mais avant d’être un","https://www.telescopes-et-accessoires.fr/Files/131989/Img/19/SW0456-2.jpg", 1,1), 
(4,"Monture équatoriale Sky-Watcher NEQ3-2", "Les possibles, dont celui de faire découvrir l’espace au plus grand nombre. Mais avant d’être un","https://www.telescopes-et-accessoires.fr/Files/131989/Img/19/SW0456-2.jpg", 1,1); 
