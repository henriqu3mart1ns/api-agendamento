exports.up = function(knex) {
  return knex.schema.createTable('agendamentos', table => {
    table.increments('idAgendamento');
    table.string('NomeSolicitante', 254).notNullable();
    table.string('TelefoneSolicitante', 15).notNullable();
    table.dateTime('DataHoraAgendamento').notNullable();
    table.string('NomeProfissional', 254).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('agendamentos');
};