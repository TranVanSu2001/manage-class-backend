const express = require("express");
const db = require("./service/db");
const cors = require("cors");
const router = require('./route');
const { initTable } = require("./service/db");
const { getUserFromToken } = require("./service/user");

getUserFromToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoidHJhbnZhbnN1IiwiaWF0IjoxNjY0MjEyOTIwLCJleHAiOjE2NjQyMTM1MjB9.2z9pY6K8MifvTY9Q_Ygm22RcD2yxlbUceJkN-PM62QE");

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(PORT, async () => {
  await initTable();
  console.log(`🚀 Server running on port: ${PORT}`);
});