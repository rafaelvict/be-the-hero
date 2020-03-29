const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ong__id = request.headers.authorization;

        const incidents = await connection('incidents')
        .where('ong_id', ong__id)
        .select('*');

        return response.json(incidents);
    }
}