CREATE OR ALTER PROCEDURE registerUserPROC(@id VARCHAR(200), @firstname  VARCHAR(200), @lastname VARCHAR(200), @email VARCHAR(200), @cohort VARCHAR(200), @password VARCHAR(200))
AS
BEGIN
    INSERT INTO usersTable(id, firstname, lastname, email, cohort, password) VALUES (@id, @firstname, @lastname, @email, @cohort, @password)
END

SELECT * FROM usersTable


