import mongoose from 'mongoose'
import uuid from 'node-uuid'

const schema = mongoose.Schema

const authorSchema = new schema({
  name: String,
  age: Number,
  books: [String],
  id: {type: String, default: uuid.v1}
})

const model = mongoose.model('author', authorSchema)

export default model