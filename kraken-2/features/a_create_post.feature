Feature: Funcionalidad de creación de Posts


@user1 @web
Scenario: Como usuario Quiero crear un post para compartirlo
  Given I navigate to page "http://ec2-18-191-54-169.us-east-2.compute.amazonaws.com:2368/ghost/#/signin"
  And I wait for 1 seconds
  When I enter email "<USERNAME>"
  And I wait for 1 seconds
  And I enter password "<PASSWORD>"
  And I wait for 1 seconds
  And I click next "escenario1"
  And I wait for 1 seconds
  And I click on feature post "escenario1"
  And I wait for 1 seconds
  And I click on new post
  And I wait for 1 seconds
  And I set the post title "<POST_TITLE>" "escenario1"
  And I wait for 1 seconds
  And I set the post content "<POST_CONTENT>"
  And I wait for 1 seconds
  And I click on publish post "escenario1"
  And I wait for 1 seconds
  And I click on Continue, final review "escenario1"
  And I wait for 2 seconds
  And I click on Post Push Now "escenario1"
  And I wait for 1 seconds
  Then I should see "escenario1"
  