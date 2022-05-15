module.exports = (sequelize,DataTypes) => {
    const Users = sequelize.define("Users", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

// we are associating the comments with the post table
    
    Users.associate = (models) => {
        Users.hasMany(models.Posts, {
            onDelete: "cascade",
        });
    }

    return Users
}

