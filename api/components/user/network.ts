import {Router} from 'express';
import {success} from '../../../network/response';
const router = Router();

router.get('/', (req: any, res: any) => {
    success(req, res, 'User', 200);
});

module.exports = router;