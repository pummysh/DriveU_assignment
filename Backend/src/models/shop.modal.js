const {Schema,model}=require('mongoose');

const shopSchema=new Schema(
    {
        name:{type:String,required:true},
        location:{type:String,required:true},
        ratings:{type:String,required:true},
        mop:{type:String,required:true},
        discount:{type:Number,required:true},
        rate:{type:Number,String,required:true},
        image:[
            {
                type:String,required:true
            }
        ],
        service:[
            {
                type:String,required:true,
            }
        ]
    },
    {
        versionKey:false,
    }
)

module.exports =model("shop",shopSchema);