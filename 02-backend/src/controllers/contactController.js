const contactService = require("../services/contactService");
const Contact = require("../models/schema/Contact");

// Example controller logic
exports.getContact = async (req, res, next) => {
  try {
    const contact = await contactService.getContact();
    res.json(contact);
  } catch (error) {
    next(error);
  }
};

exports.createContact = async (req, res, next) => {
  try {
    const {
      name,
      street,
      city,
      state,
      zip,
      phone,
      email,
      website,
      description,
    } = req.body;

    // Check if a contact with the same name already exists
    const existingContact = await Contact.findOne({ name });

    if (existingContact) {
      return res
        .status(400)
        .json({ error: "Contact with this name already exists" });
    }

    // Create new contact instance
    const newContact = new Contact({
      name,
      street,
      city,
      state,
      zip,
      phone,
      email,
      website,
      description,
    });

    // Save contact to database
    const savedContact = await newContact.save();

    res.status(201).json(savedContact); // Respond with saved contact
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ error: "Failed to create contact" });
  }
};
