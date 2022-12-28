import { FormattedPet } from '../types/formatted-pet';
import { PetCount } from "../types/duplicate-pets";

export class DuplicatePets {
  private count: PetCount
  private readonly pets: FormattedPet[];

  constructor(receivedPets: FormattedPet[]) {
    this.pets = receivedPets;
    this.count = {};
  }

  public listDuplicatedPets(): PetCount {
    for (const pet of this.pets) {
      this.count[pet.name] = (this.count[pet.name] || 0) + 1;
    }

    return this.count;
  }
}
