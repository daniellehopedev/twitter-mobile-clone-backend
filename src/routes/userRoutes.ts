import { Router } from 'express';

const router = Router();

// User CRUD

// create user
router.post('/', (req, res) => {
    res.status(501).json({ error: 'POST Not Implemented' });
});

// list user
router.get('/', (req, res) => {
    res.status(501).json({ error: 'GET Not Implemented' });
});

// get one user
router.get('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({ error: `GET One Not Implemented: ${id}.` });
});

// update user
router.put('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({ error: `PUT Not Implemented: ${id}.` });
});

// delete user
router.delete('/:id', (req, res) => {
    const {id} = req.params;
    res.status(501).json({ error: `DELETE Not Implemented: ${id}.` });
});

export default router;