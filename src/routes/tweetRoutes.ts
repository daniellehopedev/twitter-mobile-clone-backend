import { Router } from 'express';

const router = Router();

// Tweet CRUD

// create tweet
router.post('/', (req, res) => {
    res.status(501).json({ error: 'POST Not Implemented' });
});

// list tweet
router.get('/', (req, res) => {
    res.status(501).json({ error: 'GET Not Implemented' });
});

// get one tweet
router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({ error: `GET One Not Implemented: ${id}.` });
});

// update tweet
router.put('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({ error: `PUT Not Implemented: ${id}.` });
});

// delete tweet
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({ error: `DELETE Not Implemented: ${id}.` });
});

export default router;