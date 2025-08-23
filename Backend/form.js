import { Router } from "express";
import fs from "fs";
import { fileURLToPath } from "url";
import path, { dirname, join } from "path";
import Handlebars from "handlebars";
import { exec } from "child_process";
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

  if (data.projectName_2 == "") {
    latex = latex.replace(/%START-PROJECT-2[\s\S]*?%END-PROJECT-2/g, "");
  }
  if (data.projectName_3 == "") {
    latex = latex.replace(/%START-PROJECT-3[\s\S]*?%END-PROJECT-3/g, "");
  }

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
  console.log("all done succesfullly");
}

/**
 
 * @param {string} text - 
 * @returns {string} 
 */
function escapeLatex(text) {
  if (typeof text !== "string") {
    return text;
  }
  return text
    .replace(/\\/g, "\\textbackslash{}")
    .replace(/&/g, "\\&")
    .replace(/%/g, "\\%")
    .replace(/\$/g, "\\$")
    .replace(/#/g, "\\#")
    .replace(/_/g, "\\_")
    .replace(/{/g, "\\{")
    .replace(/}/g, "\\}")
    .replace(/~/g, "\\textasciitilde{}")
    .replace(/\^/g, "\\textasciicircum{}");
}

function expPDF(name) {
  return new Promise((resolve, reject) => {
    console.log("now in function");
    const userLatexDir = path.join(__dirname, "template", "userLatex");
    const texFilePath = path.join(userLatexDir, `${name}.tex`);
    const pdfFilePath = path.join(userLatexDir, `${name}.pdf`);

    // 2. CONSTRUCT THE COMMAND CORRECTLY
    //    - Use template literals to inject variables.
    //    - Provide both the output directory AND the input file.
const command = `tectonic -X compile "${texFilePath}" --outdir "${userLatexDir}"`;
    try {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Compilation Error: ${stderr}`);
          console.log("now in try block");
          // 3. REJECT THE PROMISE ON FAILURE
          reject(stderr);
          return;
        }
        // 4. RESOLVE THE PROMISE ON SUCCESS
            console.log("PDF compilation successful.");
        resolve(pdfFilePath);

      });
    } catch (error) {
      console.log(error);
    }
  });
}


function PDFsend(name,res){
    const userLatexDir = path.join(__dirname, "template", "userLatex");
    const texFilePath = path.join(userLatexDir, `${name}.tex`);
    const pdfFilePath = path.join(userLatexDir, `${name}.pdf`);
  res.sendFile(pdfFilePath,(err)=>{
    if(err){
      res.status(500).send('Error sending PDF file.');
          console.log(err);
    }

  else{
    console.log("pdf sent sucessfullly");
       fs.unlink(pdfFilePath, () => {}); // Delete PDF
             fs.unlink(path.join(__dirname, "template", "userLatex", `${name}.tex`), () => {});// deletes tex file
   
  }
  })

}
router.post("/", async (req, res) => {
  const data = req.body.formData;
const name = userLatex();

  for (const key in data) {
    data[key] = escapeLatex(data[key]);
  }

  //res.status(200).json({ message: "sent" });

  try {
    
    editLatex(name, data);
    insertData(name, data);
   const pdfPath= await expPDF(name);
   PDFsend(name,res);

  } catch (error) {
    console.log(error);
  }
});

export default router;
