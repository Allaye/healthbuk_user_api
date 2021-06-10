# healthbuk_payment_api
a basic user processing api, with minimal features



## How to install and use

<p>Install node if you dont have it already installed, go to <a href="https://nodejs.org/en/download/">Node installation documentation</a></p>
<p>

Clone the repo or download the repo

## Build Setup

make sure you are in the project directory
Note it is assumed mysql server is installed and running 
# install dependencies
run <b>npm install</b> command

# serve with hot reload at localhost:9000
run <b>npm run dev</b> command

# using the api
the api has been tested using just postman

# register endpoint
go to endpoint http://localhost:9000/register to create an account, passing to the body json file email, name, password and age

# login endpoint
go to endpoint http://localhost:9000/login to login into the created account, passing to the body json file email and password 

# profile endpoint
go to endpoint http://localhost:9000/profile after login pass the jwt recieved to this endpoint as a bearer token

# profile endpoint result
this endpoint render a template view in the form of a dashboard, disolaying the name and email of the authenticated user,
the view can be viewed using postman # preview feature



# Thanks .............

