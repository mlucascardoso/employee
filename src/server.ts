import 'reflect-metadata';
import express from 'express';
import cds from '@sap/cds';

export class Server {
    public static async run() {
        const app = express();

        await cds.connect('db');

        await cds
            .serve('all')
            .at('odata')
            .in(app);

        app.get('/', (req, res) => { res.redirect('/odata/') });

        const port = process.env.PORT || 3001;
        app.listen(port, async () => {
            console.info(`Server is listing at http://localhost:${port}`);
        });
    }
}

Server.run();