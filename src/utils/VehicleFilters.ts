import type { Vehicle } from "./Vehicle";
// // import JSON file to be processed in TypeScript
// // *replace path with local JSON direcftory path
// import rawData from "./dummy_data/dummy_small.json" with {type:"json"};

// const data = rawData as Vehicle[];

// // testing for output
// console.log(data);
// console.log(country_option(data))
// console.log(year_option(data))

// // testing for filtering
// let filtered = data;
// filtered = filtered.filter(vehicle => vehicle.type === "SUV");
// console.log(filtered);
// filtered = filtered.filter(vehicle => vehicle.fuel_type === "Petrol")
// console.log(filtered);

// filters
export function country_option(data: Vehicle[]): string[]{
  const countries = data
      // get all value from all instance
      .map(vehicle => vehicle.country)
      // make sure each value is unique
      .filter((country, index, self) => self.indexOf(country) === index)
      // sort alphabetically for easier search
      .sort();

  return countries;
}

export function type_option(data: Vehicle[]): string[]{
  const types = data
      .map(vehicle => vehicle.type)
      .filter((type, index, self) => self.indexOf(type) === index)
      .sort();

  return types;
}

export function make_option(data: Vehicle[]): string[]{
  const makes = data
      .map(vehicle => vehicle.make)
      .filter((make, index, self) => self.indexOf(make) === index)
      .sort();

  return makes;
}

export function model_option(data: Vehicle[]): string[]{
  const models = data
      .map(vehicle => vehicle.model)
      .filter((model, index, self) => self.indexOf(model) === index)
      .sort();

  return models;
}

export function year_option(data: Vehicle[]): number[]{
  const minYear = Math.min(...data.map(vehicle => vehicle.year_start));
  const maxYear = Math.max(...data.map(vehicle => vehicle.year_end));
  const years = [];
  for (let y = minYear; y <= maxYear; y++) {
    years.push(y);
  }

  return years;
}

export function engine_option(data: Vehicle[]): string[]{
  const engines = data
      .map(vehicle => vehicle.engine_size)
      .filter((engine, index, self) => self.indexOf(engine) === index)
      .sort();

  return engines;
}

export function fuel_option(data: Vehicle[]): string[]{
  const fuels = data
      .map(vehicle => vehicle.fuel_type)
      .filter((fuel, index, self) => self.indexOf(fuel) === index)
      .sort();

  return fuels;
}