{
  "functions": {
    "api/index.js": {
      "runtime": "nodejs18.x"
    }
  },
  "routes": [
    {
      "src": "/api/generate-config",
      "dest": "/api/index.js",
      "methods": ["POST", "OPTIONS"]
    }
  ]
}
