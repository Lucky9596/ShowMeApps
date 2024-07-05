const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for the contact
const contactSchema = new Schema({
  name: { type: String, required: true },
  street: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  phone: { type: String },
  email: { type: String },
  website: { type: String },
  description: { type: String },
});

// Create a model based on the schema
const Contact = mongoose.model("Contact", contactSchema);

// Export the model to use it in other parts of your application
module.exports = Contact;
