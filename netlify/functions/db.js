const { event } = require('jquery')
const { Client } = require('pg')

exports.handler = async (event, context) => {
    const client = new Client({
        connectionString: process.env.postgresql//neondb_owner:npg_UieyLAXNOz43@ep-cold-hat-aebpdj7i-pooler.c-2.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require,
        , ssl: {
            rejectUnauthorized: false
        }
        
    });
    try {
        await client.connect();
        const res = await client.query('SELECT NOW()');
        await client.end();
        return {
            statusCode: 200,
            body: JSON.stringify({ time: res.rows[0].now }),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Database error' })
        }
    }
}