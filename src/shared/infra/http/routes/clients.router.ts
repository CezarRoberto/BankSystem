import { CreateClientController } from '@modules/clients/useCases/createClient/CreateClientController';
import { DeleteClientController } from '@modules/clients/useCases/deleteClient/deleteClientController';
import { FindAllClientsController } from '@modules/clients/useCases/findAllClients/findAllClientsController';
import { FindClientsByBankController } from '@modules/clients/useCases/FindByBank/findClientByBankController';
import { FindOneClientController } from '@modules/clients/useCases/findOneClient/FindOneClientController';
import { Router } from 'express';

const clientsRouter = Router();

const createClientController = new CreateClientController();
const findAllClientsController = new FindAllClientsController();
const findOneClientController = new FindOneClientController();
const findClientsByBankController = new FindClientsByBankController()
const deleteClientController = new DeleteClientController();

clientsRouter.post('/', createClientController.handle)
clientsRouter.get('/:id', findOneClientController.handle)
clientsRouter.get('/', findAllClientsController.handle)
clientsRouter.delete('/:id', deleteClientController.handle)
clientsRouter.get("/bank/:company_id", findClientsByBankController.handle)

export {clientsRouter}