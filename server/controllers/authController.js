export const loginUser = (req, res) => { 
    console.log(req.body);
    res.send(req.body);
}