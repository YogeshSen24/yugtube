const asyncHanadler = (functionToExicute)=>{
    (req, res,next)=>{
        Promise.resolve(()=>{
            functionToExicute(req, res, next)
        }).catch((e)=>{
            next(e)
        })
    } 
}

export {asyncHanadler}