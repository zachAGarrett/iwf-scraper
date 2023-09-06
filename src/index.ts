import eventData from "./lib/getEventData";

const interestingEventId = 574;

(async () => {
  const data = await eventData({ event_id: interestingEventId });

  console.log(data);
})();
