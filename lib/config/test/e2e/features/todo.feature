Feature: Example feature
  As a user of TODO app
  I want to be able to see initial todo list

  Scenario: Displaying sigle todo
    Given I am on homepage
    And one todo exists
    Then I should see 1 todo

  Scenario: Displaying two todos
    Given I am on homepage
    And two todos exists
    Then I should see 2 todo