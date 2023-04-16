export interface PlanetDto {
    name: string;
    diameter: string;
    rotation_period: string;
    orbital_period: string;
    gravity: string;
    population: string;
    climate: string;
    terrain: string;
    surface_water: string;
}

export interface Planet {
    name: string;
    diameter: number | 'unknown';
    rotation_period: number | 'unknown';
    orbital_period: number | 'unknown';
    gravity: number | 'unknown';
    population: number | 'unknown';
    climate: string[] | 'unknown';
    terrain: string[] | 'unknown';
    surface_water: number | 'unknown';
}
