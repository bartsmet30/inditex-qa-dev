import { axiosClient } from '../clients/axios-client';
import { Endpoints } from '../constants/endpoints';
import { Format } from '../helpers/format';
import { DuplicatePets } from '../models/duplicate-pets';
const { addContext } = require('wdio-mochawesome-reporter').default

describe('Petstore Pets API', async () => {
  it('should list all sold pets', async () => {
    const { data } = await axiosClient.get(`${Endpoints.pets.findByStatus}?status=sold`)
    const formattedPets = Format.pet(data).toTuple();

    addContext({
      title: 'List of all sold pets',
      value: formattedPets
    })
  })

  it('should list available pets with same name', async () => {
    const { data } = await axiosClient.get(`${Endpoints.pets.findByStatus}?status=available`)
    const formattedPets = Format.pet(data).toTuple();
    const duplicatedPets = new DuplicatePets(formattedPets).listDuplicatedPets();

    addContext({
      title: 'List of all duplicate pets',
      value: duplicatedPets
    })
  })
});
