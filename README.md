### OOP-Team Profile Generator
https://github.com/omssma/oop-team-profile-generator/lib/index.html

  ### Description
  This projects is concerned with creating a professional profile for team using Node.js commandline application that allows users to enter information about their team and then generate and html webpage to display the inserted information.

  ## Video Demo
  https://www.youtube.com/watch?v=ZkYTem-E_lY
  
  ### Table of Cotents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)

  ### Installation:
  Need to install Jest so as to perform tests on the __test__ js files. Start by using npm init -y, npm inquirer, npm test, then node index.js to start the testing and prompting users to start creating the team profile.
  You will need to have Node installed on your computer. Begin by cloning this repository to your local machine. Once you have done that, navigate to the root directory of the project in your terminal and run the following commands:-

  <!-- install dependencies -->

  npm install inquirer
  npm install --save-dev jest

  <!-- start app -->

  npm start       <!-- node index will also work -->

  ### Usage:
  Invoke the applicaton with the command

  node app.js

  Answer the prompts that appear in the command line. You will be asked to add a manager, engineer, and/or intern. From there, you may enter each employee's email, Id, and role within the team. After completing these steps, this message will appear in the terminal: "A file containing your roster has been generated!" If there is an error in generating this file, an error message will appear in the terminal.

  An HTML file will then be generated based on user input and should appear in the 'output' folder. Open the HTML file in a browswer to view your teams generated roster.

  ### Credits
  Studied GitHub forums, Firefox Developer Tools, Stackoverflow and freecodecamp.

  ### License:
  This project is licensed under the MIT license.
  [![License badge](https://img.shields.io/badge/license-MIT-<COLOR>.svg)](#license)
  
  ### Features:
  Dynamic, noncollapsing website that stack team information together when page is minimized. 

  ### Contributing:
  You can contribute by asking first for permission then work on the repo to make it even better.

  ### Tests:
  Jest test
  npm test
  ### Questions:
  If you have any questions about this repo, please visit [GitHub](https://github.com/omssma) or contact Omar at omar@email.com
