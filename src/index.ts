import eventData from "./lib/getEventData";

const interestingEventId = 574;

(async () => {
  const data = await eventData({ event_id: interestingEventId });

  console.log(data[0].data && data[0].data[0]?.data);
})();
