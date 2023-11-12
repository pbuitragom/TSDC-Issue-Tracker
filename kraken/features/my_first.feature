Feature: Funcionalidad de creación de Posts

@user1 @web
Scenario: Como usuario Quiero crear un post para compartirlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds  
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click next
  And I wait for 1 seconds
  And I click on feature post
  And I wait for 1 seconds
  And I click on new post
  And I wait for 1 seconds
  And I set the post title "<POST_TITLE>"
  And I wait for 1 seconds
  And I set the post content "<POST_CONTENT>"
  And I wait for 1 seconds
  And I click on publish
  And I wait for 1 seconds
  And I click on Continue, final review
  And I wait for 1 seconds
  And I click on Push Now
  And I wait for 1 seconds
  Then I should see text "<POST_TITLE>"
  Then I send a signal to user 2 containing "post_created"

@user2 @web
Scenario: Como usuario Quiero Eliminar el Post Anterior
  Given I wait for a signal containing "post_created" for 60 seconds
  And I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
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
  Then I send a signal to user 3

@user3 @web
Scenario: Como usuario Quiero Eliminar el Post Anterior
  Given I wait 
  And I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 5 seconds
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
  And I click on delete
  And I wait for 1 seconds
  And I confirm delete
  


