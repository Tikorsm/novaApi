import { StatusCodes } from "http-status-codes";
import { testServer } from "../jest.setup";
import { number } from "yup";



describe('cidades - Create', () => {
    

    it('Crear resgistro', async () => {

      const res1 = await testServer.post('/cidades').send({ nome: 'Caxias do sul' });


      expect(res1.statusCode).toEqual(StatusCodes.CREATED);
      expect(typeof res1.body).toEqual('number');

    });

    it('nome muito curto', async () => {

      const res1 = await testServer.post('/cidades').send({ nome: 'Ca' });


      expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
      expect(res1.body).toHaveProperty('errors.body.nome');

    });

});
