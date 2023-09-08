const serializeObject = (obj: { [k: string | number]: any }) => {
  let str = [];
  for (const p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};
export default serializeObject;
