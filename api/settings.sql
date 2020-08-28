CREATE DATABASE swb;
CREATE USER swb_user WITH PASSWORD 'swb';
GRANT ALL PRIVILEGES ON DATABASE swb TO swb_user;

--psql -U postgres -f settings.sql