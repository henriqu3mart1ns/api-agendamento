const express = require('express');
const router = express.Router();

const knex = require('../database/connection');

// GET todos
router.get('/', async (req, res) => {
  const agendamentos = await knex('agendamentos');
  return res.json(agendamentos);
});

// GET por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  const agendamento = await knex('agendamentos')
    .where('idAgendamento', id)
    .first();

  return res.json(agendamento);
});

// POST
router.post('/', async (req, res) => {
  const [id] = await knex('agendamentos').insert(req.body);

  return res.json({ id });
});

// PUT
router.put('/:id', async (req, res) => {
  const { id } = req.params;

  await knex('agendamentos')
    .where('idAgendamento', id)
    .update(req.body);

  return res.json({ mensagem: 'Atualizado' });
});

// DELETE
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  await knex('agendamentos')
    .where('idAgendamento', id)
    .delete();

  return res.json({ mensagem: 'Removido' });
});

module.exports = router;