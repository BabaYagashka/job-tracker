import mongoose, { Schema, Document } from "mongoose";

export interface IBoard extends Document {
  name: string;
  userID: string;
  columns: mongoose.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const BoardSchema = new Schema<IBoard>(
  {
    name: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
      index: true,
    },
    columns: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Column",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Board ||
  mongoose.model<IBoard>("Board", BoardSchema);
