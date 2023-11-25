Feature: Funcionalidad de creación de Posts - Esceneario título y contenido faker - Caracteres especiales

@user4 @web
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
  And I set the post title "$name_post_title" "escenario1"
  And I wait for 1 seconds
  And I set the post content "$name_post_content"
  And I wait for 1 seconds
  And I click on publish post "escenario1"
  And I wait for 1 seconds
  And I click on Continue, final review "escenario1"
  And I wait for 1 seconds
  And I click on Push Now "escenario1"
  And I wait for 1 seconds
  Then I should see text "$$name_post_title" "escenario1"
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
  | USERNAME   | PASSWORD   |
  | pmbtgun@gmail.com      | QAZwsx01@2023      |