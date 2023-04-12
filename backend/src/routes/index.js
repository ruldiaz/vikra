const { Router } = require('express');
const { User, Post } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/users', async (req, res)=>{
    try {
        const getUserDb = await User.findAll({
            include: {
                model: Post,
                attributes: ['name'],
                through: {
                    attributes: [],
                },
            },
        });
        res.status(200).send(getUserDb)
    } catch (error) {
     res.status(400).json({error: error.message})   
    }
})

router.post('/user', async (req, res)=>{
    try {
        let {
            firstName,
            lastName,
            email,
            image,
            posts,
            createdInDb
        } = req.body;

        let userCreated = await User.create({
            firstName,
            lastName,
            email,
            image,
            createdInDb
        });

        let userDb = await Post.findAll({
            where: {name: posts}
        })

        userCreated.addPost(userDb)
        res.status(200).send('Usuario creado correctamente.')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})




module.exports = router;