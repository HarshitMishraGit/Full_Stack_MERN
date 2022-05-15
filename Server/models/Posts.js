module.exports = (sequelize,DataTypes) => {
    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        visibility: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

// we are associating the comments with the post table
    // just remember that there should be an post id existing if you are adding an additional comments 
    // because the cascade means all the comment should not be there if that post id isnt exist
    
    Posts.associate = (models) => {
        Posts.hasMany(models.Comments, {
            onDelete: "cascade",
        });
    }

    return Posts
}

