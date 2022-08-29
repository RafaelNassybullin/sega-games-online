import express from 'express';
import Service from '../service';

const router = express.Router();

router.post('/postSega', Service.saveData);
router.get('/getSega/', Service.getData);
router.get('/getSega/:id', Service.getById);
router.get('/getSegaCategory/:category', Service.getCategory);
router.patch('/updateSega/:id', Service.editData);
router.delete('/deleteSega/:id', Service.deleteDatas);

export = router;