import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";

const app = express();
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("VPN Backend Running 🚀");
});

// Generate VLESS config
app.get("/api/vless", (req, res) => {
  const uuid = uuidv4();

  const config = {
    v: "2",
    ps: "ZentryCloud-VLESS",
    add: "your-server.com",
    port: "443",
    id: uuid,
    aid: "0",
    net: "ws",
    type: "none",
    host: "",
    path: "/vless",
    tls: "tls"
  };

  res.json({
    success: true,
    config: config
  });
});

// Generate VMESS config
app.get("/api/vmess", (req, res) => {
  const uuid = uuidv4();

  const config = {
    v: "2",
    ps: "ZentryCloud-VMESS",
    add: "your-server.com",
    port: "443",
    id: uuid,
    aid: "0",
    net: "ws",
    type: "none",
    host: "",
    path: "/vmess",
    tls: "tls"
  };

  res.json({
    success: true,
    config: config
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
