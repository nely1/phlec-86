import mongoose from 'mongoose';
import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') { 
    dotenv.config(); 
} 

const data = mongoose.connect(process.env.CONNECTION_URL || 'mongodb://localhost', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    dbName: 'phlecTravels' }) 
    const db = mongoose.connection.on('error', err => { 
        console.error(err); 
        process.exit(1) 
    }) 

    db.once('open', async () => { 
        console.log(`Mongo connection started on ${db.host}:${db.port}`) 
    })


export default data;