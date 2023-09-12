export default function getRootDomainFromUrl(url: string) {
  // Create a URL object from the input URL
  const urlObject = new URL(url);

  // Get the hostname, which includes the domain and subdomain
  const hostname = urlObject.hostname;

  // Split the hostname by dots
  const hostnameParts = hostname.split(".");

  // Check if the hostname has at least two parts (e.g., "example.com")
  if (hostnameParts.length >= 2) {
    // Get the last two parts of the hostname
    const rootDomain = hostnameParts.slice(-2).join(".");
    return rootDomain;
  } else {
    // The URL might not be valid, or it might be an IP address
    return null;
  }
}
