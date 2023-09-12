export default function getTargetComponentFromUrl(
  url: string,
  targetComponent: string
) {
  const urlSearchParams = new URLSearchParams(url.split("?")[1]);
  const componentValue = urlSearchParams.get(targetComponent);

  return componentValue;
}
