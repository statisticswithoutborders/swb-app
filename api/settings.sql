CREATE DATABASE swb;
CREATE USER swb_user WITH PASSWORD 'swb';
GRANT ALL PRIVILEGES ON DATABASE swb TO swb_user;

--instructions:

-- if you already have an swb database run:
--DROP DATABASE swb;
--DROP USER swb_user;

--Then, to create swb database in psql run inside top level api directory:
--psql -U postgres -f settings.sql

--In your virtual environment (pipenv shell) translate the models into the schema for our database, run:
--python3 manage.py makemigrations
--python3 manage.py migrate

--To seed database still inside virtual environment, run:
--python3 manage.py loaddata swb.json

--to view database in localhost:8000/admin create superuser:
--python3 manage.py createsuperuser

--to run the server:
--python3 manage.py runserver

--API!!!!!!

--to view projects and services as api with crud use:
--localhost:8000/projects 
--localhost:8000/services

