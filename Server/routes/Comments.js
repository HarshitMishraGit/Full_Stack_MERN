const express = require('express');
const router = express.Router();
const { Comments } = require('../models')

router.get("/:postId",async  (req, res) => {
    const postId = req.params.postId
    const listOFComments = await Comments.findAll({
        where :{PostId:postId}
                    })
    res.json(listOFComments)
}); 
// router.get("/byId/:id", async (req, res) => {
//     const id = req.params.id
//     // findByPk it means find by primary key so that it returns a row from the data base
//     const post= await Posts.findByPk(id)
//     res.json(post)
// }); 

router.post("/", async (req, res) => {
    const comment = req.body;
    await Comments.create(comment);
    res.json(comment);
});

module.exports = router;