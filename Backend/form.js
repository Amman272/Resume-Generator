import { Router } from "express";
import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname, join } from "path";
import Handlebars from "handlebars";
const router = Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function LatexFormat() {
  const template = fs.readdirSync("../src/template/resume_template.tex");
  const complied = Handlebars.compile(template);
  const output = complied(data);
  fs.writeFileSync("../src/template/edited.tex", output);
}

function userLatex() {
  const name = Date.now();
  //paths
  const src = path.join(__dirname, "template", "resume_template.tex");
  const destDir = path.join(__dirname, "template", "userLatex");
  const dest = path.join(destDir, `${name}.tex`);

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  fs.copyFileSync(src, dest);

  console.log("copied");
  return name;
}
function editLatex(name, data) {
  let latex = fs.readFileSync(
    path.join(__dirname, "template", "userLatex", `${name}.tex`),
    "utf8"
  );
  if (data.companyName_3 == "") {
    latex = latex.replace(/%START-E2[\s\S]*?%END-E2/g, "");
  }
  if (data.companyName_2 == "") {
    latex = latex.replace(/%START-E3[\s\S]*?%END-E3/g, "");
  }

  //
  if (data.projectName_2 == "") {
    latex = latex.replace(/%START-PROJECT-2[\s\S]*?%END-PROJECT-2/g, "");
  }
  if (data.projectName_3 == "") {
    latex = latex.replace(/%START-PROJECT-3[\s\S]*?%END-PROJECT-3/g, "");
  }
  //
  if (data.organizationName_2 == "") {
    latex = latex.replace(/%START-A2[\s\S]*?%END-A2/g, "");
  }
  if (data.organizationName_3 == "") {
    latex = latex.replace(/%START-A3[\s\S]*?%END-A3/g, "");
  }

  fs.writeFileSync(
    path.join(__dirname, "template", "userLatex", `${name}.tex`),
    latex,
    "utf8"
  );
}
//////////////////////////////
function insertData(name, data) {
  let latex = fs.readFileSync(
    path.join(__dirname, "template", "userLatex", `${name}.tex`),
    "utf8"
  );
  const compile = Handlebars.compile(latex);
  const filled = compile(data);
  fs.writeFileSync(
    path.join(__dirname, "template", "userLatex", `${name}.tex`),
    filled,
    "utf8"
  );
}

router.post("/", async (req, res) => {
  const data = req.body.formData;
  // data.experiences = data.experiences[0];
  //data.projects = data.projects[0];
  // console.log(data);
  res.status(200).json({ message: "sent" });

  try {
    const name = userLatex();
    editLatex(name, data);
    insertData(name, data);
  } catch (error) {
    console.log(error);
  }
});

export default router;
