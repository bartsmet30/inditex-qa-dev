# Inditex QA Dev Technical Challenge

## Part 1: User Interface Automation

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
- [Cucumber-js](https://github.com/cucumber/cucumber-js) easy implementation of steps.
- [Gherkin](https://cucumber.io/docs/gherkin/reference/) for a friendly scenarios definition.
- [`jest-extended`](https://github.com/jest-community/jest-extended) for more complex and easy to use expectations.
- [Allure](https://docs.qameta.io/allure) as reporter

### 🔨 Installation

1. In the root directory install the package dependencies:
   ```shell
   yarn install
   ```

### ▶️ Execute tests in local

Once all the dependencies are installed you are allowed to execute the tests in different ways:

- Run whole test suite in non-headless mode:
  ```shell
  yarn test:execute
  ```
- Run specific tests defined by custom
  tags ([cucumber tag expressions](https://cucumber.io/docs/cucumber/api/#tag-expressions)). Useful to work with
  the `@wip` tag:
  ```shell
  yarn test:wip
  ```

### 📈 Reports

After executing the tests, run the following command to display the results (screenshots are attached in the report):

- Generation
  ```shell
  yarn utils:report:generate
  ```
- Visualization
  ```shell
  yarn utils:report:open
  ```
