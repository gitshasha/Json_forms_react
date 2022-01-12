# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Before you start running our app make sure to install node modules. cd into app directory and run `npm install` or `npm i` in the teminal

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Files and Folders

After extracting the folder and running npm install in your teminal ,you will most likely see the following folders/files
node_modules
public
src
db.json
package-lock-json
package.json

### src folder

For now lets ignore the remaining folders and jump into src folder.
These are the Files/Folders you'll see
Components
Styles
App.css
App.js
FormContext.js
index.css
index.js
Formdetails.json
reportWebvitals.js

### App.js

Open App.js this is where we write our code . All the components which are to be rendered should be used here. Basically, App.js is your whole website .
We import the required components from Component folder

### Component Folder

This folder contains all the components required/used in App.js file .This is not manditory ,we can store the components files in src folder also just to maintain a good code this folder is used.
All the components required in our case Home.js and Text.js. Each component file can return one or more than one component . Here home.js return a single component Home ,whereas Text.js Returns multiple components like Select ,Text ,Password .
If you had to make changes in any input fields you may make changes in this file.

### index.js

We don't use this file much ,but this is an important file as is wraps the whole App.js file into a single component and passes to index.html in pubic folder.

### FormContext.js

It is a React context Api ,don't wprry about it ,basically it makes the process of passing functions to components easy, you can ignore this file for now.

### Formdetails.json

This is the json file in which the details of the form is mentioned. Give your desired values to the respected fields in this file and execute the app you can see the changes .
These are all the files/folders you should look after in src folder

### package.json

It is just stores the packages installed in our app and few other script tags ,you can ignore this file.

### db.json

This is the React-json Server ,whenever you fill the form and try to submit it ,that will be posted to this server and db.json stores the values in json format .

### `npm run server`

In order to see db.json in working you have to start the server ,it's not a big deal .
Just cd into app directory and open up a new teminal (DO NOT TERMINATE PREVIOUS TERMINAL WHERE OUR APP IS RUNNING) run the command `npm run server`. The server gets running and now you can submit form and see changes in db.json file or you can visit http://localhost:5000 .
