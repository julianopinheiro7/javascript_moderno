const schedule = require('node-schedule')

// '*/5 * 12 * * 2' (Essa string será executada da direira para esquerda:
// Numa 3ª Feira, Qualquer mês, Qualquer dia do mês, As 12 horas, Qualquer Minuto, Execute de 5 em 5 segundos.
// '5' (Desta forma seria executado exatamente no segundo 5)

const tarefa1 = schedule.scheduleJob('*/5 * 13 * * 1', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 2000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 14
regra.second = 03

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})