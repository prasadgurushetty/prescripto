// import jwt from 'jsonwebtoken'

// // doctor authentication middleware
// const authDoctor = async(req,res,next) =>{
//     try {
//         const {dtoken} = req.headers
//         if(!dtoken){
//             return res.json({success:false,message:"not Authorized Login Again"})
//         }
//         const token_decoded = jwt.verify(dtoken,process.env.JWT_SECRET)
//         req.body.docId =token_decoded.id
//         next()

//     } catch (error) {
//           console.log(error)
//         res.json({success:false,message:error.message})
//     }
// }
// export default authDoctor

import jwt from 'jsonwebtoken'

const authDoctor = async (req, res, next) => {
  try {
    const { dtoken } = req.headers
    if (!dtoken) {
      return res.json({ success: false, message: 'Not Authorized, Login Again' })
    }

    const decoded = jwt.verify(dtoken, process.env.JWT_SECRET)
    // Ensure req.body exists
    if (!req.body) req.body = {}
    req.body.docId = decoded.id
    req.docId = decoded.id  // optional, for GET routes
    next()
  } catch (error) {
    console.log(error)
    res.json({ success: false, message: error.message })
  }
}

export default authDoctor
