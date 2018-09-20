module.exports={
    healthCheck: (req, res)=>{
        console.log('healthy');
        res.status(200).send('okey dokey');
    },

    login: (req, res)=> {
        const {username, password} = req.body;
        console.log(`login endpoint!!!!!!!!@!@!#!@#!@!!!!`, username, password)
        res.status(200).send(`${username} loged in`);
    }
}