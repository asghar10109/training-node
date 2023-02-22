const router= require('express').Router();
const {
    Create_new_Users,
    get_user,
    delete_data,
    update_data,
    delete_dataMany,
    getdataby_id,
    getdataby_idanddelete,
    getdataby_idandupdate
} = require('../Controllers/users')


router.post('/create', Create_new_Users );

router.get('/getdata' , get_user);
router.get('/getdatabyid/:id',getdataby_id)
router.get('/getdatabyidanddelete/:id',getdataby_idanddelete)
router.get('/getdatabyidandupdate/:id',getdataby_idandupdate)



router.delete('/deletedata/:uid',delete_data)
router.delete('/deletedataMany/:name',delete_dataMany)


router.put('/updatedata',update_data);

module.exports= router