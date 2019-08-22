const { Schema, model } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

schema.plugin(mongoosePaginate);

module.exports = model("Post", schema);
