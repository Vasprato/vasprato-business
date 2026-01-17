const express = require("express");
const path = require("path");

const app = express();

// Servir estáticos
app.use(express.static(path.join(__dirname, "public")));

// Home
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = Number(process.env.PORT || 3000);
app.listen(PORT, "0.0.0.0", () => console.log("Running on", PORT));

