const bcrypt = require('bcryptjs');

const hash_password = async (password)=>{
    if(password){
        const hashed_password = await bcrypt.hash(password, 8);
        return hashed_password;
    }
    throw new Exception('invalid password received');
}



module.exports = hash_password