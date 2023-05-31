
const schema = {
    type: "object",
    properties: {
      apparelType:{type: "string"},
      code: {type: "string"},
      size: {type: "string"},
      quantity: {type: "number"},
      price: {type: "number"}   
    },
    
    required: ["apparelType","code","size","quantity","price"],
    additionalProperties: false
  }

export default schema;  