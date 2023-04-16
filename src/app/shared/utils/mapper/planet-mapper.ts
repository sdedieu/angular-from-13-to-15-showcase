import { Planet, PlanetDto } from "../../models/planet";

export class PlanetMapper {

    static fromDto(planetDto: PlanetDto): Planet {
        return {
            name: planetDto.name.toLocaleLowerCase(),
            diameter: PlanetMapper.parseFloat(planetDto.diameter),
            rotation_period: PlanetMapper.parseFloat(planetDto.rotation_period),
            orbital_period: PlanetMapper.parseFloat(planetDto.orbital_period),
            gravity: PlanetMapper.parseFloat(planetDto.gravity),
            population: PlanetMapper.parseFloat(planetDto.population),
            climate: planetDto.climate === 'unknown' ? 'unknown' : planetDto.climate.split(', '),
            terrain: planetDto.terrain === 'unknown' ? 'unknown' : planetDto.terrain.split(', '),
            surface_water:  PlanetMapper.parseFloat(planetDto.surface_water),
        }
    }

    static toDto(planet: Planet): PlanetDto {
        return {
            name: planet.name,
            diameter: planet.diameter.toString(),
            rotation_period: planet.rotation_period.toString(),
            orbital_period: planet.orbital_period.toString(),
            gravity: planet.gravity.toString(),
            population: planet.population.toString(),
            climate: planet.climate === 'unknown' ? 'unknown' : planet.climate.join(', '),
            terrain: planet.terrain === 'unknown' ? 'unknown' : planet.terrain.join(', '),
            surface_water:  planet.surface_water.toString()
        }
    }

    static parseFloat(value: any): number | 'unknown' {
        const float = parseFloat(value);
        return isNaN(float) ? 'unknown' : float;
    }
}
