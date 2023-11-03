import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
      default: [],
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    reviews: [],
    rating: {
      type: Number,
      required: true,
      default: 5,
    },
    numberOfReviews: {
      type: Number,
      default: 0,
    },
    subtitle: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    productIsNew: {
      type: Boolean,
      required: true,
    },
    stripeId: {
      type: String,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
