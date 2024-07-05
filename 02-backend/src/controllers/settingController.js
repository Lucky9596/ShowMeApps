const fs = require("fs").promises;
const path = require("path");

exports.updateSetting = async (req, res, next) => {
  const settingData = req.body; // Assuming JSON data is sent in the body

  // Construct file path using __dirname
  const filePath = path.join(
    "/home/u/Project/showmeapp-customer-reg-forms/02-backend/src/controllers",
    "setting.txt"
  );

  // Convert settingData object to JSON string
  const dataString = JSON.stringify(settingData, null, 2); // null and 2 for pretty formatting

  try {
    await fs.truncate(filePath, 0);
    await fs.writeFile(filePath, dataString + "\n");
    res.status(200).json({ message: "Setting updated successfully" });
  } catch (error) {
    console.error("Error writing file:", error);
    res.status(500).json({ error: "Error updating setting" });
  }
};

exports.getSetting = async (req, res, next) => {
  const filePath = path.join("./src/controllers", "setting.txt"); // Construct file path

  try {
    const data = await fs.readFile(filePath, "utf8");
    const jsonData = JSON.parse(data);
    res.json({ jsonData });
  } catch (err) {
    console.error("Error reading file:", err);
    res.status(500).json({ error: "Error reading the file" });
  }
};
