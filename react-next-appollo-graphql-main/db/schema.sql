CREATE TABLE IF NOT EXISTS tasks (
    id INT UNSIGNED AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    task_status VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
)

INSERT INTO tasks (title, task_status) VALUES ("Learning Typescript", "active");

-- docker exec -i task-manager-mysql-1 sh -c 'mysql -uroot -p"$MYSQL_ROOT_PASSWORD" $MYSQL_DATABASE' < db/schema.sql
-- mysql -h 127.0.0.1 -u root -p
