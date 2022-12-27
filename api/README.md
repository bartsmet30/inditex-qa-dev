# Inditex QA Dev Technical Challenge

## Part 2: API Automation

### Table of content

<!-- TOC -->

- [🔧 Requirements](#-requirements)
- [📚 TechStack](#-techstack)
- [🔨 Installation](#-installation)
- [▶️ Execute tests in local](#-execute-tests-in-local)
- [📈 Reports](#-reports)

<!-- TOC -->


### 🔧 Requirements

- Last stable NodeJS LTS version (16).
- At least `yarn 1.22`.


### 📚 TechStack

- [Typescript](https://github.com/microsoft/TypeScript/#readme), like JS, but _kind of_ better.
- [WebdriverIO](https://webdriver.io/) framework runner for automated test.
- [Mocha](https://github.com/mochajs/mocha) simple, flexible, fun javaScript test framework for Node.js
- [Chai](https://github.com/jest-community/jest-extended) for assertions.
- [Mochawesome](https://github.com/adamgruber/mochawesome) as reporter


### 🔨 Installation

1. In the root directory install the package dependencies:
   ```shell
   yarn install
   ```


### ▶️ Execute tests in local

Once all the dependencies are installed you are can execute the tests. Execute the following commands in the root directory (`api`):

- Run whole test suite in headless mode:
  ```shell
  yarn test:execute
  ```


### 📈 Reports

After executing the tests, run the following command to display the results, the requested information in the task is displayed when opening the individual test results. Execute the following commands in the root directory (`api`):

- Generation and visualisation
  ```shell
  yarn utils:report:generate
  ```
