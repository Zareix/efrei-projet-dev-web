CREATE TABLE `RESPONSABLES` (
    `idres` INT AUTO_INCREMENT,
    `nomres` VARCHAR(42),
    `prenomres` VARCHAR(42),
    `loginres` VARCHAR(42),
    `motdepasseres` VARCHAR(200),
    PRIMARY KEY (`idres`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE `ETUDIANTS` (
    `idetu` INT AUTO_INCREMENT,
    `nometu` VARCHAR(42),
    `prenometu` VARCHAR(42),
    PRIMARY KEY (`idetu`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE `MATERIELS` (
    `codebarre` VARCHAR(42),
    `nommat` VARCHAR(42),
    `descriptionmat` VARCHAR(42),
    `dateachatmat` VARCHAR(42),
    `prixachatmat` INT,
    `fournisseurmat` VARCHAR(42),
    PRIMARY KEY (`codebarre`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

CREATE TABLE `PRETS` (
    `idetu` INT,
    `codebarre` VARCHAR(42),
    `datedebutpret` VARCHAR(42),
    `datefinpret` VARCHAR(42),
    `idres` INT,
    PRIMARY KEY (`idetu`, `codebarre`, `datedebutpret`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8;

ALTER TABLE
    `PRETS`
ADD
    FOREIGN KEY (`codebarre`) REFERENCES `MATERIELS` (`codebarre`);

ALTER TABLE
    `PRETS`
ADD
    FOREIGN KEY (`idetu`) REFERENCES `ETUDIANTS` (`idetu`);