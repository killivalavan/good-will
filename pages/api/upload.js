import uploadFile from "../../utils/s3";

import multer from "multer";
const upload = multer({ dest: "upload/" });

export default async function handler(req, res) {
  const file = req.file;
  console.log(file);
  const result = await uploadFile(file);
  console.log(result);
  const description = req.body.description;
  res.send("Desc");

  //   res.status(200).json({ name: "John Doe" });
}
