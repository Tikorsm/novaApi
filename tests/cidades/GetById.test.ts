

import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";



describe('Cidades - GetById', () => {
    it('Buscar resgistros por id', async () => {

        const res1 = await testServer.post('/cidades').send({ nome: 'Caxias do sul'});

        expect(res1.statusCode).toEqual(StatusCodes.CREATED);

        const resBuscada = await testServer.get(`/cidades/${res1.body}`).send()

        expect(resBuscada.statusCode).toEqual(StatusCodes.OK);
        expect(resBuscada.body).toHaveProperty('nome');
    });
    it('Tenta buscar resgistro que não existe', async () => {


        const res1 = await testServer.get('/cidades/99999').send();

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty('errors.default');

    });
    
})