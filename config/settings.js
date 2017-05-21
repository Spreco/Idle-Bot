module.exports = {
    /* Domain, used for generating trade keys if needed */
    domain: 'GEternal.ga',

    /* Bot admin(s) */
    botAdmins: [
        '76561198305103059','76561198313888532','76561198031681511'
    ],

    /* Log levels */
    logger: {
        console: 'debug',
        file: 'error'
    },

    /* Bots */
    bots: [
        {
            enabled: true,
            trades: true,
            confirm_trades: true,
            idle: true,
            offline: false,
            check_on_items: true,
            name: 'GEternal #1',
            steamid: '76561198059732532',
            username: 'derstrah',
            password: 'Sokoado12398',
            shared_secret: 'lXghHueL2XN/APE4xU7gbhTi978=',
            identity_secret:'JpgaTFD7qRnFZuXehXGQyCZ3vNU='
        }
    ],

    /* Statistics */
    stats: true
};
