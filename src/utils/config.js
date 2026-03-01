const isLocalhost =
  typeof window !== "undefined" &&
  (window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1");

const config = {
  // Use local API during local development, fallback to deployed API otherwise
  serverURL: isLocalhost
    ? "http://localhost:5000"
    : "https://hiretrack-server.onrender.com",
};

export default config;
