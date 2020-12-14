import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './../../config.env' });

mongoose.connect(`${ process.env.DATABASE }`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => console.log('DB connected successfully'));