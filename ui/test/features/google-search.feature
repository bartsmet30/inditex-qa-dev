Feature: Automation of a website

  As a QA Dev,
  I want to create an automated test,
  so that I can prove my technical abilities

  Scenario: Search Google and verify Wikipedia information
    Given I navigate to the url https://www.google.es
    And I accept all cookies
    When I type the "automatización" in the search field and hit "search"
    And I open the wikipedia link in the search results
    Then I can see that the first automation process was described in the year "270 a. C."
