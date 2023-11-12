Feature: Funcionalidad de creación de Posts

@user1 @web
Scenario: Como usuario Quiero Actualizar el Post Anterior
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds  
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click next
  And I wait for 1 seconds
  And I click on feature post
  And I wait for 1 seconds
  And I click on recently created post
  And I wait for 1 seconds
  And I click on post settings
  And I wait for 1 seconds
  And I set the post title "<POST_TITLE_UPDATED>" 
  And I wait for 1 seconds
  And I click on update
