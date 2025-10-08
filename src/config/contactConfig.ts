// Contact form configuration.
// Set CONTACT_ENDPOINT to your server endpoint that accepts JSON POST requests.
// Example server payload: { name, contactNo, email, message }
// If CONTACT_ENDPOINT is empty, the form will fallback to opening the user's mail client.
export const CONTACT_ENDPOINT = ""; // e.g. "https://api.example.com/contact"

export default {
  CONTACT_ENDPOINT,
};
