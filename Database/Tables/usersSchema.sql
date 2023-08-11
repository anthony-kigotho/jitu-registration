BEGIN 
TRY
    CREATE TABLE usersTable(
        id VARCHAR(200) PRIMARY KEY,
        firstname VARCHAR(200) NOT NULL,
        lastname VARCHAR(200) NOT NULL,
        email VARCHAR(200) UNIQUE NOT NULL,
        cohort VARCHAR(200) NOT NULL,
        password VARCHAR(500) NOT NULL,
    )
END TRY
BEGIN CATCH
    THROW 50002, 'Table already exists', 1;
END CATCH



SELECT * FROM usersTable;

