import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: [true, "Please provide an email"],
    },
    phone: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },

    // phone: {
    //     daytime: {type: String},  // format: (123)456-7890 or 1234567890
    //     nightime: {type: String}   // same as above
    // }
  },
  { timestamps: true }
);

const ContactSection =
  mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default ContactSection;
