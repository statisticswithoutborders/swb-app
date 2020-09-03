# **Statistics Without Borders API**

### About

###### The Statistics Without Borders (SWB) api is the backend database for the SWB website. SWB is a volunteer organization from within the American Statistical Association that uses statistics and data science to support regions across the world where resources are limited, promoting welfare and the proper application of accumulated data.

###### SWB website front-end link: https://swbapp.netlify.app

### Technologies/Dependencies

- ###### Python
- ###### Django
- ###### PostgreSQL
- ###### Psycopg2-binary
- ###### Django Rest Framework

### Setup

###### 1. Make sure you have Python 3, postgreSQL and pipenv installed on your computer

###### 2. Clone the Repository:

```
git clone git@github.com:statisticswithoutborders/swb-app.git
```

###### 3. If you don't have the swb database set up skip to step 4. If you already have an swb database, open a termianl and run:

```
psql
DROP DATABASE swb;
DROP USER swb_user;
```

###### 4. Either exit out of psql or in another terminal window `cd` into `swb-app/api`.

###### 5. To set up your virtual environment and install all dependencies run:

```
pipenv install
```

###### 6. To enter your virtual environment run:

```
pipenv shell
```

###### 7. To set up the database in postresql run:

```
psql -U postgres -f settings.sql
```

###### 8. To translate models into the schema for the database run:

```
python3 manage.py makemigrations
python3 manage.py migrate
```

###### 9. To seed the database with data from the fixture file (still from within your virtual environment) run:

```
python3 manage.py loaddata swb.json
```

###### 10. To view database in localhost:8000/admin create superuser by running and filling out the prompts provided:

```
python3 manage.py createsuperuser
```

###### 11. To run the server:

```
python3 manage.py runserver
```

###### 12. In your browser go to localhost:8000/admin and type in the log in information you entered when creating the superuser.

###### 13. To view the database as an api with full crud functionality, in your browser use paths:

```
localhost:8000/projects
localhost:8000/services
localhost:8000/members
localhost:8000/contacts
localhost:8000/volunteers
localhost:8000/new_projects
localhost:8000/blogs
```

### Models

#### _Project_

###### **Description:** The Project model represents the information found on an individual project page from the website. The project_service field is linked to the Service model.

###### **Fields:**

- ###### project_title
- ###### project_location
- ###### photo_urlOne
- ###### photo_urlTwo
- ###### photo_urlThree
- ###### project_description
- ###### project_services

#### _Service_

###### **Description:** The Service model represents the service tags found on project pages.

###### **Fields:**

- ###### service_name

#### _Member_

###### **Description:** The Member model represents information about each current member found on the member cards on the about us page.

###### **Fields:**

- ###### member_name
- ###### member_picture_url
- ###### member_role
- ###### member_about

#### _Contact_

###### **Description:** The Contact model represents information entered in the contact us form.

###### **Fields:**

- ###### contact_name
- ###### contact_email
- ###### contact_organization
- ###### contact_subject
- ###### contact_message

#### _Volunteer_

###### **Description:** The Volunteer model represents information entered in the volunteer form.

###### **Fields:**

- ###### volunteer_name
- ###### volunteer_email
- ###### volunteer_organization
- ###### volunteer_subject
- ###### volunteer_message

#### _NewProject_

###### **Description:** The NewProject model represents information entered in the new project form.

###### **Fields:**

- ###### new_project_name
- ###### new_project_email
- ###### new_project_organization
- ###### new_project_subject
- ###### new_project_message

#### _Blog_

###### **Description:** The Blog model represents information found on the blog cards under the blog section of the home page.

###### **Fields:**

- ###### blog_title
- ###### blog_date
- ###### blog_body

##### **Recommended next step:**

###### Apply authentication to the api so that only authenticated users can access full CRUD functions.

##### Authors:

###### _Anthony Maddox and Jennifer Houck_
