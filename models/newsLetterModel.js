import mongoose from "mongoose";

const newsLetterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
const NewsLetterSection =
  mongoose.models.NewsLetter || mongoose.model("NewsLetter", newsLetterSchema);

export default NewsLetterSection;
