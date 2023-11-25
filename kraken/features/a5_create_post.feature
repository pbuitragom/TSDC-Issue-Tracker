Feature: Funcionalidad de creación de Posts - Sin título y con contenido

@user1 @web
Scenario: Como usuario Quiero crear un post para compartirlo
  Given I navigate to page "http://localhost:2368/ghost/#/signin"
  And I wait for 2 seconds
  When I enter email "<USERNAME>"
  And I wait
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click next "escenario1"
  And I wait for 1 seconds
  And I click on feature post "escenario1"
  And I wait for 1 seconds
  And I click on new post
  And I wait for 1 seconds
  And I set the post content "<POST_CONTENT>"
  And I wait for 1 seconds
  Then I can NOT save or update posts
  And I navigate to page "http://localhost:2368/ghost/#/posts"
  And I wait for 1 seconds
  And I click on recently created post "escenario3"
  And I wait for 1 seconds
  And I click on post settings "escenario3_step_4.png"
  And I wait for 1 seconds
  And I click on delete "escenario3"
  And I wait for 1 seconds
  And I confirm delete "escenario3"


  Examples:
  | USERNAME | PASSWORD | POST_CONTENT |
  | pmbtgun@gmail.com | QAZwsx01@2023| This is a content |