
import ikedc from "../model/nepamodel.js";
// to create 
export const createcustomer =async (req,res)=>{
    try {const newcust=await ikedc.create(req.body)
        if (newcust) {
            res.send(newcust)
            
        } else {res.send("unable to create")
            
        }
    } catch (error) {res.send(error.message)
        
    }
}
// TO GET ALL
export const getallcustomer =async (req,res)=>{
    try {const allcust=await ikedc.findAll()
        if (allcust) {
            res.send(allcust)
            
        } else {res.send("unable to get all")
            
        }
    } catch (error) {res.send(error.message)
        
    }
}
// to get one customer
export const onecustomer =async (req,res)=>{
    try {const id=req.params.id;
        const onecust=await ikedc.findAll(
            {where:{id:id}}
           )
        if (onecust.length==0) {
            res.send(`Unable to get customer with the id ${id}`)
            } else {
                res.send(onecust)
            
        }
    } catch (error) {res.send(error.message)
        
    }
}
// to update
export const updatecustomer =async (req,res)=>{
    try {const id =req.params.id
        const updatecust=await ikedc.update(
            req.body,{where:{id:id}}
           )
        if (updatecust[0]===0) {
            res.send(`NO new data added to id ${id} `)
            } else {
                res.send(updatecust)
            
        }
    } catch (error) {res.send(error.message)
        
    }
}
// to delete one

export const delonecustomer =async (req,res)=>{
    try {const id=req.params.id;
        const delonecust=await ikedc.destroy(
            {where:{id:id}}
           )
        if (delonecust) {
            res.send(` id ${id} deleted`)
            } else {
                res.send(`id ${id} doesnt exist`)
            
        }
    } catch (error) {res.send(error.message)
        
    }
}