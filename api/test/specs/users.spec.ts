import { expect } from 'chai';
import { axiosClient } from '../clients/axios-client';
import { UserSignUp } from '../models/userSignUp';
import { Endpoints } from '../constants/endpoints';
const { addContext } = require('wdio-mochawesome-reporter').default

describe('Petstore User API', async () => {
  it('should create a user', async () => {
    globalThis.currentUser = UserSignUp.random();
    const response = await axiosClient.post(Endpoints.user, globalThis.currentUser)

    expect(response.status).equals(200);
  })

  it('should get the created user', async () => {
    const { username } = globalThis.currentUser
    const { data } = await axiosClient.get(`${Endpoints.user}/${username}`)

    addContext({
      title: 'Retrieved user',
      value: data
    })

    expect(data).to.include(globalThis.currentUser);
  })
});
