# Student Database App

[Github](https://github.com/00014932/student-db-app) || [Deployed on Heroku](https://student-db-app.herokuapp.com/)

## About the app.
This app is a full-stack web application developed with **Express** and **MongoDB**.
The application is a student database, where the user can :
- View the list of all students;
- Create a new student;
- Update the info of students;
- Delete a student from a list;

## Instructions.

### To run this app:
Install all the dependencies
`
npm instal
`l
### Run the app locally:
`
npm start
`
	and follow the link in the console. E.g. http://localhost:8000
### List of dependencies:

- **Express** : 4.17.3
- **Mongoose** : 6.2.9
- **DotEnv** : 16.0.0
- **Body-Parser** : 1.19.2
- **EJS** : 3.1.6
- **Morgan** : 1.10.0
- **Nodemon** : 2.0.15

## Project Structure.

/application
	app.js
	/node-modules
  /assets
	  /css
		  style.css
  	/js
	  	index.js
	/server
		connection.js
		controller.js
		model.js
		render.js
		router.js
	/view
		/templates
			theHeader.ejs
			theFooter.ejs
    index.ejs		
    createStudent.ejs
		updateStudent.ejs

This structure was applied due to its convenience in locating various parts of the project. The server folder here contains all the code that is responsible for building the server side of the application. All the files contain the corresponding to its title code.
