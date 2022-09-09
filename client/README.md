# Welcome to the Github page for PhlecTravels

We are a small team of 5 students doing the capstone project for the subject IT Project COMP30022.

_Pretend that this sentence is a really good intro to the team and the about this project stuff_

# Repository structure/layout and coding guidelines:

> (Structure learnt in subject INFO30005 Web Information Technologies)\
> Note - Description of structure is based of memory and is not official definitions  
> Official definitions here: https://developer.mozilla.org/en-US/docs/Glossary/MVC

- **controllers**: Handles interactions with the database and the user, and other logic needed for a specific page
- **models**: Stores the schema/structure of our databases
- **public**: Stores the css (other uses or this folder was not taught)
- **routes**: Instructs how the server should redirect users whenever they click a link or submit a form
- **views**: Stores the front-end webpages (other uses or this folder was not taught)
- **app.js**: The web app server that will listen for user requests, (after completing the prerequisites below) start
  the server locally using the command **node app.js** and navigate to: http://localhost:3000/

## Coding guidelines:

> Best practices for javascript code learnt from: https://www.w3schools.com/js/js_conventions.asp \
> "House rules" for the team can be discussed in Discord

Brief overview of coding conventions:

- **Variable naming**: Variables and functions will be typed in camelCase and start with letters only
- **Indentation**: Code blocks will be indented with **4** spaces
- **Line length**: Line length must be <= 120 characters (This is the default in VS code)
- **Whitespaces**: Always have a space between operators (eg: 1 + 1 = 2)
- **JSON objects**:
  - Place the opening bracket on the same line as the object name.
  - Use colon plus one space between each property and its value.
  - Do not add a comma after the last property-value pair.
  - Place the closing bracket on a new line, without leading spaces.
  - Always end an object definition with a semicolon.

```
    Example:
    const schema = new mongoose.Schema({
        name: {type: String, required: true},
        username: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        profile_picture: String,
        role: {type:String, required:true}
    });
```

## Documentation and commenting

As each member of the team is dedicated mainly to either the front-end or the back-end, communication between the two
roles will be crucial. Hence, each public function must have documentation of what the function does, private/helper
functions is encouraged to be documented for debugging purposes.

Each major codeblock within a function should have a comment that summarises what the code does, it should be placed
**above** each codeblock. This will help promote code reuse whenever another team member plans to write a similar
function.

# Prerequisites needed to use the code

1. To use node.js (our back-end tool) (Instructions provided by INFO30005 Web information technologies):

   Setting up Node.js
   You'll do this work at your command prompt.

   - a. Check to see whether you already have node installed: **node -v**.
   - b. If you already have it installed, move on to step 4. Otherwise, install node first.
   - c. Download and install Node: https://nodejs.org/en/download/ . - In Linux, install using **sudo apt install nodejs npm** or equivalent commands.
   - d. Verify the installation with **node -v** and **npm -v**.
   - e. Install node dependencies using **npm init** . - Accept all the defaults given in the prompt (just press Enter)
   - f. Install the Express framework using **npm install express**.

   f. If you are having trouble, contact your nearest Discord teammate.

2. To use the database: Must have a .env file with the following line:
   MONGO_URL="super secret database url that was shared in a secure environment"

3. To be continued...

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
