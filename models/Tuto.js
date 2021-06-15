module.exports = (sequelize, DataTypes) => {
    const Tuto = sequelize.define("tuto", {
        name : {
            type : DataTypes.STRING,
            validate: {
                notEmpty: true,
            },
        },

        text :{
            type: DataTypes.STRING,
            
        }
            

        
    })
    return Tuto;
}