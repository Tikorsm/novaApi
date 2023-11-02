
import {Router} from 'express';
import {StatusCodes} from 'http-status-codes'

const router = Router();


router.get('/', (req, res) => {

    return res.send('tu é gay cara!')
})




router.get('/teu', (req, res) => {

    return res.send('teu cu!')
})




router.post('/test', (req, res) => {
    console.log(req)
    return res.status(StatusCodes.UNAUTHORIZED).json(req.body)
})





router.put('/', (req, res) => {

    return res.send('tu é gay cara!')
})





router.delete('/', (req, res) => {

    return res.send('tu é gay cara!')
})


export {router}