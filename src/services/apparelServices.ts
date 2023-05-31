import fs from "fs";
import path from "path";
const filePath = path.join(process.cwd(), "src", "apparel.json");

export const readFile = () => fs.readFileSync(filePath, "utf8");

export const write_File = (data: string) => {
  fs.writeFileSync(filePath, data);
  console.log(filePath);
  console.log(data);
};
