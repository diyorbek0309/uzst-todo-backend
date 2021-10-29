import mongoose, { Schema, Document } from "mongoose";

export interface IToDo extends Document {
  id: string;
  message: string;
  completed: boolean;
}

const ToDoSchema: any = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model<IToDo>("ToDo", ToDoSchema);
