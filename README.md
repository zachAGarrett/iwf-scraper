# iwf-scraper

## This package will scrape data from all events on iwf.sport

The process for scraping data is:

1. Visit the events listing at https://iwf.sport/results/results-by-events/ and get all events for the specified filters. If no filters are set, it will get all events from the calendar year. After getting the data, create all competitions in the database.
2. Navigate to the competition results page and create or update (by linking to the competition) all the athletes from the totals tab.
3. Get the detailed results from both of the detailed results tabs, link the athlete to the event, and add all attempts
