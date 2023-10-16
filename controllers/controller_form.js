
const {Form,campos}=require("../models/model_form");

//form
exports.crear = async (req,res,next)=>{

     const {body={}}=req;
    const form = new Form(body);
    try{
        await form.save(body);

        res.status(200).json({
            mensaje:"registro creado",
            form:form}); 
    }catch(e){
         next(new Error(e));
     }
     
 };

//get
//este metodo es el que va a ser llamado por el buscador
exports.buscar = async (req,res,next)=>{
    let buscar=req.query.buscar;
    try{
        if(buscar){
            var datos=await Form
            .find({ $or: [
                { name: {$regex:buscar} }, 
                { assist: {$regex:buscar} }, 
                { alergy: {$regex:buscar} }, 
                { transport: {$regex:buscar}},
                { email: {$regex:buscar} }]
            })
            .exec();
        }else{
            var datos=await Form
            .find()
            .exec();
        }
        let cuenta= datos.length;    
        res.json({                                 
           datos:datos,
           cuenta:cuenta
           
       });
    
    }catch(e){
        next(new Error(e));
    }
};