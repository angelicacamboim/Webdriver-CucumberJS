Feature:
	When I go to the Google search page, and search for an item
	Then I expect to see some reference to that item in the result summary.

Scenario: search the webdriver
	Given that I have gone to the Google page
	When I add "webdriver" to the search box and click the Search Button
	Then "Selenium WebDriver" should be mentioned in the results
