{
  "version": 2,
  "functions": {
    "api/index.js": {
      "runtime": "nodejs24.x"
    }
  },
  "routes": [
    {
      "src": "/api/generate-config",
      "dest": "/api/index.js",
      "methods": ["POST", "OPTIONS", "GET"]
    },
    {
      "src": "/api/(.*)",
      "dest": "/api/index.js"
    }
  ]
}
