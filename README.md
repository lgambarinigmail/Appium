Installation:
Make sure you have Node.js and npm installed on your system. You can download and access them from the official Node.js website.
   - https://nodejs.org/en/download
   
Make sure you have Cypress installed on your system. You can download and install them from the official Cypress website
- https://download.cypress.io/desktop
  - Install the file cypress.exe
- Or you can type this command in CMD
   - npm install cypress --save-dev

If you have any questions about installation, there is complete documentation on the subject:
- https://docs.cypress.io/guides/getting-started/installing-cypress

Execution:
- 1 - Clone or download this repository on your local machine:
  - Open CMD and type - git clone https://github.com/lgambarinigmail/Hostfully.git

- 2 - Navigate to the project directory:
  - /Hostfully

  - In this folder you need to see some files, like a folder with name cypress, a file with the name README, a file with the name cypress.config.js, a file with the name package and some others files and folders. 

- 3 – Test Execution
  - To run the tests, select the IDE you like, navigate to your project folder and run one of the following command:

- npx cypress open (if you want to see the tests running with a visual report)
  - Select E2E testing (Should appear a texto "Configured")
  - Select the browser you want (I recomend Chrome)
  - Select Start E2E testing in chrome
  - A folder with this name should be displayed: cypress\e2e
  - select the file spec.cy.js
- Or you can try this another method
  - npx cypress run (if you want to see the tests running in headless mode)

If you have any questions about running the automation, there is complete documentation on the subject:
 - https://docs.cypress.io/guides/getting-started/opening-the-app
