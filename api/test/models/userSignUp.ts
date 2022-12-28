import { User } from '../types/user';
import { faker } from '@faker-js/faker';

const USER_PASSWORD = '1234';
const DEFAULT_USER_STATUS = 0;

export class UserSignUp {
  private readonly user: User;

  constructor({ firstName, lastName, username }: Pick<User, 'firstName' | 'lastName' | 'username'>) {
    this.user = {
      username,
      firstName,
      lastName,
      password: USER_PASSWORD,
      userStatus: DEFAULT_USER_STATUS,
    };
  }

  static random(): User {
    const firstName = faker.name.firstName(),
      lastName = faker.name.lastName(),
      username = faker.internet.userName();

    return new UserSignUp({
      firstName,
      lastName,
      username
    }).build();
  }

  build(): User {
    return Object.freeze(this.user);
  }
}
