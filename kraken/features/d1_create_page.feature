Feature: Funcionalidad de creación de Pages

@user1 @web
Scenario: Como usuario Quiero crear una page para compartirlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click next "escenario4"
  And I wait for 1 seconds
  And I click on feature pages "escenario4"
  And I wait for 1 seconds
  And I click on new page
  And I wait for 1 seconds
  And I set the page title "<PAGE_TITLE>" "escenario4"
  And I wait for 1 seconds
  And I set the page content "<PAGE_CONTENT>" "escenario4"
  And I wait for 1 seconds
  And I click on publish page "escenario4"
  And I wait for 1 seconds
  And I click on Continue, final review "escenario4"
  And I wait for 1 seconds
  And I click on Push Now "escenario4"
  And I wait for 1 seconds
  Then I should see text "<PAGE_TITLE>" "escenario4"
  And I navigate to page "http://localhost:2368/ghost/#/pages"
  And I wait for 1 seconds
  And I click on recently created page "escenario6"
  And I wait for 1 seconds
  And I click on member settings
  And I wait for 1 seconds
  And I click on delete page
  And I wait for 1 seconds
  And I confirm delete "escenario6" 

Examples:
  | USERNAME   | PASSWORD | PAGE_TITLE    | PAGE_CONTENT    |
  | pmbtgun@gmail.com      | QAZwsx01@2023  | This is a title| This is a content |
  