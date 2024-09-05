import { createServer } from 'http';

const partidas = [
    { id: 1, partida: 'Gremio x Inter' },
    { id: 2, partida: 'Flamengo x Vasco' },
    { id: 3, partida: 'Figueirense x Avai' },
    { id: 4, partida: 'Fluminense x Botafogo' },
    { id: 5, partida: 'Atletico Mineiro x Cruzeiro' },
    { id: 6, partida: 'Palmeiras x Corinthians' },
    { id: 7, partida: 'Gremio x Figueirense' },
    { id: 8, partida: 'Flamengo x Inter' },
    { id: 9, partida: 'Vasco x Avai' },
    { id: 10, partida: 'Corinthians x Cruzeiro' },
];

const servidor = createServer((req, res) => {
    const url = req.url || '';
    const parts = url.split('/').filter(Boolean);

    if (parts.length === 0 || parts[0] === 'partidas') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(partidas));
    } else {
        const time = parts.join(' ').toLowerCase();
        const partidasDoTime = partidas.filter(item => item.partida.toLowerCase().includes(time));

        if (partidasDoTime.length > 0) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(partidasDoTime));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Time inválido');
        }
    }
});

servidor.listen(3000, 'localhost', () => console.log('Servidor online na porta 3000'));