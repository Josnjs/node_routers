import { Router } from "express";
import rtProd from './product';

const router = Router();

router.use('/', rtProd);
router.use('/postItem', rtProd);
router.use('/putItem', rtProd);
router.use('delItem', rtProd);

export default router;