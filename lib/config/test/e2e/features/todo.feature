Feature: Example feature
  As a user of TODO app
  I want to be able to see initial todo list

  Scenario: Displaying sigle todo
    Given one todo exists
    And I am on homepage
    Then I should see 1 todo

  Scenario: Displaying two todos
    Given two todos exists
    And I am on homepage
    Then I should see 2 todo