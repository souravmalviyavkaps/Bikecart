export const auth = async (req, res, next)=>{
    console.log(req.auth);
    return res.status(200).json({
        message: 'faltu'
    })
}