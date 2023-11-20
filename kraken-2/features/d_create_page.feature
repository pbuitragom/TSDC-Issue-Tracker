Feature: Funcionalidad de creación de Pages

@user1 @web
Scenario: Como usuario Quiero crear una page para compartirlo
  Given I navigate to page "http://ec2-18-191-54-169.us-east-2.compute.amazonaws.com:2368/ghost/#/signin"
  And I wait for 1 seconds
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
  And I set the page title "<POST_TITLE>" "escenario4_step_3.png"
  And I wait for 1 seconds
  And I set the page content "<POST_CONTENT>" "escenario4"
  And I wait for 1 seconds
  And I click on publish page "escenario4"
  And I wait for 1 seconds
  And I click on Continue, final review page "escenario4"
  And I wait for 1 seconds
  Then I should see page published "escenario4"
  