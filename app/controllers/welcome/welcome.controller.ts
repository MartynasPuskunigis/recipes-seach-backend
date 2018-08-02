import { Router, Request, Response } from 'express';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Bye, World!');
});

router.get('/:name', (req: Request, res: Response) => {
    let { name } = req.params;

    res.send(`Bye, ${name}`);
});

export const WelcomeController: Router = router;
