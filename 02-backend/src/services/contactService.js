const Contact = require("../models/schema/Contact");

// Example service logic
exports.getContact = () => {
  return Contact.find().exec();
};

exports.createContact = (Data) => {
  const newContact = new Contact(Data);
  return newContact.save();
};
