Feature: Funcionalidad de creación de Posts

@user1 @web
Scenario: Como usuario Quiero Eliminar el Post Anterior
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds  
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click next
  And I wait for 1 seconds
  And I click on feature pages
  And I wait for 1 seconds
  And I click on recently created page
  And I wait for 1 seconds
  And I click on member settings
  And I wait for 1 seconds
  And I click on delete page
  And I wait for 1 seconds
  And I confirm delete
  


