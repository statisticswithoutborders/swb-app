CREATE DATABASE swb;
CREATE USER swb_user WITH PASSWORD 'swb';
GRANT ALL PRIVILEGES ON DATABASE swb TO swb_user;

--instructions

--to create swb database in psql run:
--psql -U postgres -f settings.sql

--to seed database cd into api and into virtual environment and run:
--python3 manage.py loaddata swb.json

--to view database in localhost:8000/admin create superuser:
--python3 manage.py createsuperuser