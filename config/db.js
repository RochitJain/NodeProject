const mongoose = require('mongoose');

const connection = async ()=>{
    try{
        await mongoose.connect(process.env.URI);
        console.log('Mongoose Connected');

    }catch(e){
        console.error(e.message);
        process.exit(1);  //

    }
}

module.exports = connection;