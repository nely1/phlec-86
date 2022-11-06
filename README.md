# Welcome to the Github page for PhlecTravels

We are a small team of 5 students doing the capstone project for the subject IT Project COMP30022.

<img src="https://media0.giphy.com/media/BRie5xjBZcHhj06NfL/giphy.gif?cid=ecf05e47vrdv66d5e0h6v869fzqq3i365hcdsbf88hdx92sp&rid=giphy.gif" width="120" height="120" />

# Repository structure/layout and coding guidelines:

> This web app adopts the structure that is commonly used in MERN (MongoDB, Express, React, Node) stacks.

The repository is divided into client and server folders, for the front-end and back-end respectively.
[Overview of how the front end communicates with the back end ->](https://d33wubrfki0l68.cloudfront.net/08d01ed85246d3ece01963408572f3f6dfb49d41/4bc12/assets/images/reduxasyncdataflowdiagram-d97ff38a0f4da0f327163170ccc13e80.gif)

The structure of the client folder

- Subfolder public folder:
  - Stores static images, the phlecTravels icon, and general css styling. The fonts used in the website is pulled from Google Fonts.
- Subfolder src folder:
  - **actions**: Collection of actions that can change the state of the webpage (usually involves calls to the back-end server for data)
  - **api**: Communicates between front-end and back-end servers to execute actions from the front-end
  - **components**: Reuseable parts of front-end code that can piece together a webpage
  - **pages**: Folder containing all the front-end web pages
  - **reducers**: When data is returned from the back-end, the reducer takes the state given and updates it
  - **App.js**: Connects all the paths of the webpages together
  - **Index.js**: Runs the App.js file

The structure of the server folder

- **controllers**: Handles interactions with the database and the user, and other logic needed for a specific page
- **data (models)**: Stores the schema/structure of our databases
- **middleware**: Checks if users are authenticated to perform a certain action
- **routes**: Instructs how the server should redirect users whenever they click a link or submit a form
- **index.js**: The web app server that will listen for API requests from the client/front-end

## Coding guidelines:

> Best practices for javascript code learnt from: https://www.w3schools.com/js/js_conventions.asp \
> "House rules" for the team can be discussed in Discord

Brief overview of coding conventions:

- **Variable naming**: Variables and functions will be typed in camelCase and start with letters only
- **Indentation**: Code blocks will be indented with **2** spaces
- **Line length**: Line length must be <= 120 characters (This is the default in VS code)
- **Whitespaces**: Always have a space between operators (eg: 1 + 1 = 2)
- **JSON objects**:
  - Place the opening bracket on the same line as the object name.
  - Use colon plus one space between each property and its value.
  - Add a comma after the last property-value pair.
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

2. To use the database: Must have a .env file in the server folder with the following line (replace the string with the connection string):
   CONNECTION_URL="<connection string that was from the database cluster>"

3. To install dependencies, use **npm install** (in the client and server folders respectively) to install all the required dependencies to use the app

4. To have communication between front and back end, two separate terminals have to be started. Run **npm start** while in the client and server folders respectively.

# Learn more about creating a MERN app

- Creating a React App docs: https://create-react-app.dev/docs/getting-started
- Full process of building a full stack MERN app: https://www.youtube.com/watch?v=ngc9gnGgUdA
