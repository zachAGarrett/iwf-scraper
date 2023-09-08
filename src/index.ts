import getEventResults from "./lib/getEventResults";
import getEventsDetails from "./lib/getEventsDetails";

const interestingEventId = 574;

(async () => {
  try {
    const [allMatchedEvents, matchedEventResults] = await Promise.all([
      getEventsDetails(),
      getEventResults({ event_id: interestingEventId }),
    ]);
    const matchedEventDetails = allMatchedEvents.find((event) =>
      event.resultsLink.includes(`event_id=${interestingEventId}`)
    );

    const eventProfile = {
      ...matchedEventDetails,
      results: matchedEventResults,
    };

    /// insert the data somewhere
    console.log(eventProfile);
  } catch (error) {
    console.error(error);
  }
  return;
})();
