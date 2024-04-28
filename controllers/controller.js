const Users=require("../models/model")

const home=(req,res)=>{
    res.render("index");
}

const register = async (req, res) => {
    try {
        const {username, email, phone, password } = req.body;

        const userExist = await Users.findOne({ email:email });
        if (userExist) {
            return res.status(400).json({ msg: "Email exist" });
        }
        await Users.create({username, email, phone, password });
        res.status(200).send("CReated");
    } catch (error) {
        console.error(error);
        res.status(500).json({msg:error});
    }    
}

module.exports={home,register};