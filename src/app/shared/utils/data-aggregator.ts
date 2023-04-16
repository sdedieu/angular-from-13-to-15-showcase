import { Planet, PlanetDto } from "../models/planet";

export class DataAggregator {

    public static buildPlanetPopulationFrequencyGraph(planets: Planet[]): { x: string[], y: number[], type: 'bar' }[] {
        const planetPopulationFrequencyMap = planets.reduce((previousValue: Map<number, number>, currentValue: Planet) => {
            if (currentValue.population !== 'unknown') {
                const flooredValue = Math.floor(currentValue.population / 1000000000);
                let range;
                if (flooredValue < 1) {
                    range = 0
                } else if (flooredValue < 5) {
                    range = 1
                } else if (flooredValue < 10) {
                    range = 5
                } else if (flooredValue < 50) {
                    range = 10
                } else if (flooredValue < 100) {
                    range = 50
                } else if (flooredValue < 500) {
                    range = 100
                } else if (flooredValue < 1000) {
                    range = 500
                } else {
                    range = 1000
                }

                const frequency = previousValue.get(range);
                previousValue.set(range, frequency ? frequency + 1 : 1);
            }
            return previousValue;
        }, new Map<number, number>());

        const frequencyGraphData = Array.from(planetPopulationFrequencyMap.entries())
            .sort((a, b) => a[0] <= b[0] ? -1 : 1)
            .reduce((previousValue: { x: string[], y: number[], type: 'bar' }, currentValue: any[], currentIndex: number, array: [number, number][]) => {
                previousValue.x.push(`${currentValue[0]}-${currentIndex < array.length - 1 ? array[currentIndex + 1][0] : '+'}`)
                previousValue.y.push(currentValue[1])
                return previousValue;
            }, {
                x: [],
                y: [],
                type: 'bar'
            })

        return [frequencyGraphData];
    }
}
