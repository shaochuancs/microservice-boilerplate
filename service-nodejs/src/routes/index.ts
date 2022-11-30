/**
 * Created by cshao on 2021/12/12
 */

'use strict';

import {Request, Response, Router} from "express";

import config from "../config/ServiceConfig";

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({
    message: config.get('mail.hostname')
  });
});

export default router;
