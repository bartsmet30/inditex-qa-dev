import { Pet } from '../types/pet';
import { FormattedPet } from '../types/formatted-pet';

export const Format = {
  pet: (pets: Pet[]) => ({
    toTuple: (): FormattedPet[] => {
      return pets.map(function (item) {
        return {
          id: item.id,
          name: item.name
        }
      });
    }
  })
};
