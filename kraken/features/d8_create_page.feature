Feature: Funcionalidad de creacion de Posts Sin titulo y con contenido

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
  And I click on feature pages "escenario1"
  And I wait for 1 seconds
  And I click on new page
  And I wait for 1 seconds
  And I set the page title "$string_page_title" "escenario5"
  And I wait for 1 seconds
  Then I can NOT save or update pages
  And I wait for 1 seconds
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
  | USERNAME | PASSWORD | 
  | pmbtgun@gmail.com | QAZwsx01@2023|