const express = require("express");
const path = require("path");

const app = express();

// (opcional) servir estáticos si tienes /public
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("VASPRATO Business Online ✅");
});

const PORT = Number(process.env.PORT || 3000);
const HOST = "0.0.0.0";

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});


