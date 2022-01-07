const express = require("express");
const res = require("express/lib/response");
const app = express();
app.use(express.json());

const { addMessege, showMessege } = require("./user");
app.listen(4000, () => console.log("server started"));

app.get("./user", async (req, res) => {
  // let obj={messege:"successfull"};
  // res.json(obj);

  let list = await showMessege();
  res.json(list);
});
app.post("/add-user", async (req, res) => {
  const messege = req.body;
  await addMesseg(messege);
  res.json({ messege: "messege added successfully,,..!!" });
});
