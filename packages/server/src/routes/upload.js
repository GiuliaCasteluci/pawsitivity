import { Router } from 'express';
import path from "path"
const fileRoutes = Router();


// Set up the file upload endpoint
fileRoutes.post('/upload', (req, res) => {
  try {
    if(!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send('No files were uploaded.');
    }
  
    const file = req.files
    const uploadPath = path.join(__dirname, "../public/uploads/", file.name);
  
    file.mv(uploadPath, (err) => {
      if(err) {
        return res.status(400).json({ error: "No work"})
      }
  
      res.send("/uploads/"+file.name)
    })
  } catch (error) {
    res.status(500).json(error)
  }
 
});

export default fileRoutes;







