export default function getEventIdFromUrl(url: string) {
  const urlSearchParams = new URLSearchParams(url.split("?")[1]);
  const event_id = urlSearchParams.get("event_id");

  return event_id;
}
