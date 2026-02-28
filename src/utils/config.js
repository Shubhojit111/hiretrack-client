const config = {
  // Use local API during local development, fallback to deployed API otherwise
  serverURL: isLocalhost
    ? "http://localhost:5000"
    : "https://hiretrack-server.onrender.com",
};

export default config;
