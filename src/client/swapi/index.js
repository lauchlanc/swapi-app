
export type Person = {
  eye_colour: string,
  hair_color: string,
  name: string,
  species: string,
  homeworld: string,
};


export default {
  async getGamePerson(): Promise<Person> {

    const personInt = Math.floor(Math.random() * 87) + 1;
    const response = await fetch(`https://swapi.co/api/people/${personInt}`);
    const data = await response.json();

    var species = '';

    if(data.species.length){
      const speciesResponse = await fetch(data.species[0]);
      const speciesData = await speciesResponse.json();
      species = speciesData.name;
    }

    const homeworldResponse = await fetch(data.homeworld);
    const homeworldData = await homeworldResponse.json();

    const person: Person = {
      eye_colour: data.eye_colour,
      hair_color: data.hair_color,
      name: data.name,
      species: species,
      homeworld: homeworldData.name,
    };

    return person;
  },
};
