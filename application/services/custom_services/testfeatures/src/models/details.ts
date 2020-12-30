
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const detailsSchema = new Schema({
   name: String,
   email: String
})

const detailsModel = mongoose.model('details', detailsSchema, 'details');
export default detailsModel;
