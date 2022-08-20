## Welcome to the Github page for PhlecTravels

We are a small team of 5 students doing the capstone project for the subject IT Project COMP30022.

-Pretend that this sentence is a really good intro to the team and the about this project stuff-

### Repository structure/layout and coding guidelines: 
> (Structure learnt in subject INFO30005 Web Information Technologies)
> Note - Description of structure is based of memory and is not official definitions  
> Official definitions here: https://developer.mozilla.org/en-US/docs/Glossary/MVC
* **controllers**: Handles interactions with the database and the user, and other logic needed for a specific page
* **models**:  Stores the schema/structure of our databases
* **public**:  Stores the css (other uses or this folder was not taught)
* **routes**: Instructs how the server should redirect users whenever they click a link or submit a form
* **views**: Stores the front-end webpages (other uses or this folder was not taught)
* **app.js**: The web app server that will listen for user requests, (after completing the prerequisites below) start 
the server locally using the command **node app.js** and navigate to: http://localhost:3000/

## Coding guidelines:
> Best practices for javascript code learnt from: https://www.w3schools.com/js/js_conventions.asp
> "House rules" for the team can be discussed in Discord
Brief overview of coding conventions:
 * **Variable naming**: Variables and functions will be typed in camelCase and start with letters only
 * **Indentation**: Code blocks will be indented with **4** spaces
 * **Line length**: Line length must be <= 120 characters (This is the default in VS code)
 * **Whitespaces**: Always have a space between operators (eg: 1 + 1 = 2)
 * **JSON objects**: 
    * Place the opening bracket on the same line as the object name.
    * Use colon plus one space between each property and its value.
    * Do not add a comma after the last property-value pair.
    * Place the closing bracket on a new line, without leading spaces.
    * Always end an object definition with a semicolon.

    Example:
    const schema = new mongoose.Schema({ 
        name: {type: String, required: true},
        username: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        profile_picture: String,
        role: {type:String, required:true}
    });

### Prerequisites needed to use the code

1. To use node.js (our back-end tool) (Instructions provided by INFO30005 Web information technologies):

    Setting up Node.js
    You'll do this work at your command prompt.
    * a. Check to see whether you already have node installed: **node -v**.
    * b. If you already have it installed, move on to step 4. Otherwise, install node first.
    * c. Download and install Node: https://nodejs.org/en/download/ .
            - In Linux, install using **sudo apt install nodejs npm** or equivalent commands.
    * d. Verify the installation with **node -v** and **npm -v**.
    * e. Install node dependencies using **npm init** .
            - Accept all the defaults given in the prompt (just press Enter)
    * f. Install the Express framework using **npm install express**. 

    f. If you are having trouble contact your nearest Discord teammate.

2. To use the database: Must have a .env file with the following line:
MONGO_URL="super secret database url that was shared in a secure environment" 
