Feature: Funcionalidad de creación de Pages

@user1 @web
Scenario: Como usuario Quiero crear una page para compartirlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click next "escenario4"
  And I wait for 1 seconds
  And I click on feature pages
  And I wait for 1 seconds
  And I click on new page
  And I wait for 1 seconds
  And I set the page title "<POST_TITLE>"
  And I wait for 1 seconds
  And I set the page content "<POST_CONTENT>"
  And I wait for 1 seconds
  And I click on publish "escenario4"
  And I wait for 1 seconds
  And I click on Continue, final review "escenario4"
  And I wait for 1 seconds
  And I click on Push Now
  And I wait for 1 seconds
  Then I should see text "<POST_TITLE>"
  