
import { Router } from "express";
import fs from "fs";
import Handlebars from "handlebars";
const router = Router();

function LatexFormat() {
  const template = fs.readdirSync("../src/template/resume_template.tex");
  const complied = Handlebars.compile(template);
  const output = complied(data);
  fs.writeFileSync("../src/template/edited.tex", output);
}

router.post("/", async (req, res) => {
  const data = req.body.formData;
  data.experiences = data.experiences[0];
  data.projects = data.projects[0];
  console.log(data);
   res.status(200).json({ message: "sent" });
});

export default router;
