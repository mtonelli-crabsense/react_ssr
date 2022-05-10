
export default (req, res) => {
    res.statusCode = 200;
    res.json([
        { 
            id: '1',
            nombre: 'Lomo saltado con arroz',
            imagen: 'https://club.bonvivir.com/wp-content/uploads/2022/03/Lomo-saltado-con-arroz-La-Causa-Nikkei.png',
            vino: 'Finca Lalande The Land Red Wine Blend 2021'
        },
        { 
            id: '2',
            nombre: 'Pollo provenzal',
            imagen: 'https://club.bonvivir.com/wp-content/uploads/2022/03/Pollo-provenzal-Ike-Milano.png',
            vino: 'Malma Reserva de Familia Malbec 2020'
        },
        { 
            id: '3',
            nombre: 'Locro',
            imagen: 'https://club.bonvivir.com/wp-content/uploads/2022/03/Locro-Blossom.png',
            vino: 'Caballero de la Cepa Single Vineyard Cabernet Sauvignon 2019'
        },
        { 
            id: '4',
            nombre: 'Sorrentinos de osobuco braseado y manteca de tomillo',
            imagen: 'https://club.bonvivir.com/wp-content/uploads/2022/03/Sorrentinos-de-osobuco-braseado-y-manteca-de-tomillo-Cincinati.png',
            vino: 'Crux Malbec 2020'
        }
    ])
}