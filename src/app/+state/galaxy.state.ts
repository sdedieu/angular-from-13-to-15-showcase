import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { debounceTime, tap } from 'rxjs';
import { Planet } from '../shared/models/planet';
import { PlanetService } from '../shared/services/planet.service';
import { PlanetsFilters } from '../shared/models/planets-filters';

export class LoadPlanets {
    static readonly type = '[Galaxy] loadPlanets';
    constructor() { }
}

export class PlanetsLoaded {
    static readonly type = '[Galaxy] planetsLoaded';
    constructor(public planets: Planet[]) { }
}

export class AddPlanet {
    static readonly type = '[Galaxy] addPlanet';
    constructor(public planet: Planet) { }
}

export class RemovePlanet {
    static readonly type = '[Galaxy] removePlanet';
    constructor(public planet: Planet) { }
}

export class UpdatePlanetsFilters {
    static readonly type = '[Galaxy] updatePlanetsFilters';
    constructor(public filters: PlanetsFilters) { }
}

export class BuildPlanetsMetadata {
    static readonly type = '[Galaxy] buildPlanetsMetadata';
    constructor(public planets: Planet[]) { }
}

export interface GalaxyStateModel {
    climates: string[];
    terrains: string[];
    planets: Planet[];
    planetsLoading: boolean;
    filters: {
        climates: string[];
        terrains: string[];
    }
}

@State<GalaxyStateModel>({
    name: 'galaxy',
    defaults: {
        climates: [],
        terrains: [],
        planets: [],
        planetsLoading: false,
        filters: {
            climates: [],
            terrains: []
        }
    }
})
@Injectable()
export class GalaxyState {
    constructor(private planetService: PlanetService) { }

    @Action(LoadPlanets)
    loadPlanets(ctx: StateContext<GalaxyStateModel>, action: LoadPlanets) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            planetsLoading: true
        });

        return this.planetService.getAll().pipe(
            tap(planets => {
                ctx.dispatch(new PlanetsLoaded(planets))
            })
        );
    }

    @Action(PlanetsLoaded)
    planetsLoaded(ctx: StateContext<GalaxyStateModel>, action: PlanetsLoaded) {
        const state = ctx.getState();
        ctx.setState({
            ...state,
            planets: action.planets,
            planetsLoading: false
        });

        ctx.dispatch(new BuildPlanetsMetadata(action.planets))
    }

    @Action(AddPlanet)
    addPlanet(ctx: StateContext<GalaxyStateModel>, action: AddPlanet) {
        const state = ctx.getState();
        const planets = state.planets.concat(action.planet)
        ctx.setState({
            ...state,
            planets
        });
    }

    @Action(RemovePlanet)
    removePlanet(ctx: StateContext<GalaxyStateModel>, action: RemovePlanet) {
        const state = ctx.getState();
        const planets = state.planets.filter(p => p.name !== action.planet.name)
        ctx.setState({
            ...state,
            planets
        });
    }

    @Action(BuildPlanetsMetadata)
    buildPlanetsMetadata(ctx: StateContext<GalaxyStateModel>, action: BuildPlanetsMetadata) {
        const state = ctx.getState();
        const [terrains, climates] = action.planets.reduce((previousValue: [string[], string[]], currentValue: Planet) => {
            if (currentValue.terrain !== 'unknown') {
                currentValue.terrain.forEach(terrain => {
                    if (!previousValue[0].includes(terrain))
                        previousValue[0].push(terrain)
                })
            }
            if (currentValue.climate !== 'unknown') {
                currentValue.climate.forEach(climate => {
                    if (!previousValue[1].includes(climate))
                        previousValue[1].push(climate)
                })
            }
            return previousValue;
        }, [[], []]);

        ctx.setState({
            ...state,
            terrains,
            climates
        });
    }

    @Action(UpdatePlanetsFilters)
    updatePlanetsFilters(ctx: StateContext<GalaxyStateModel>, action: UpdatePlanetsFilters) {
        const state = ctx.getState();
        
        ctx.setState({
            ...state,
            filters: action.filters
        });
    }

    @Selector()
    static planets(state: GalaxyStateModel) {
        return state.planets;
    }

    @Selector()
    static filters(state: GalaxyStateModel) {
        return state.filters;
    }

    @Selector([GalaxyState.planets, GalaxyState.filters])
    static filteredPlanets(state: GalaxyStateModel) {
        return state.planets.filter(
            p => {
                return (!state.filters.climates.length || (p.climate !== 'unknown' && p.climate.find(c => state.filters.climates.includes(c)))) &&
                    (!state.filters.terrains.length || (p.terrain !== 'unknown' && p.terrain.find(c => state.filters.terrains.includes(c))))
            }
        );
    }

    @Selector([GalaxyState.planets])
    static populatedPlanets(state: GalaxyStateModel) {
        return state.planets.filter(p => p.population !== 'unknown');
    }

    @Selector()
    static planetsLoading(state: GalaxyStateModel) {
        return state.planetsLoading;
    }

    @Selector()
    static terrains(state: GalaxyStateModel) {
        return state.terrains;
    }

    @Selector()
    static climates(state: GalaxyStateModel) {
        return state.climates;
    }
}