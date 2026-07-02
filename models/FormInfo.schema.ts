import { model, models, Schema } from "mongoose";

const FormInfoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    requirement: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const FormInfo = models.FormInfo || model("FormInfo", FormInfoSchema);

export default FormInfo;
