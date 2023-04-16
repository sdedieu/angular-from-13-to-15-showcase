import { ChangeDetectionStrategy, Component, Input, NgZone, OnChanges, SimpleChanges } from '@angular/core';
import { Planet } from 'src/app/shared/models/planet';
import { DataAggregator } from 'src/app/shared/utils/data-aggregator';

declare const Plotly: any;

const layout = {
  title: 'Planets frequency over population ranges',
  font: { size: 18 },
  paper_bgcolor: 'transparent',
  margin: {
    l: 100,
    r: 100,
    b: 50,
    t: 50,
    pad: 4
  },
  xaxis: {
    automargin: true,
    title: {
      text: 'Population ranges (in Billion)',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    automargin: true,
    title: {
      text: 'Number of planets',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

const config = { responsive: true, displayModeBar: false };

@Component({
  selector: 'app-planets-graph',
  templateUrl: './planets-graph.component.html',
  styleUrls: ['./planets-graph.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetsGraphComponent implements OnChanges {

  @Input() planets: Planet[];

  constructor(private zone: NgZone) { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['planets'].currentValue)
      this.zone.runOutsideAngular(() => {
        const data = DataAggregator.buildPlanetPopulationFrequencyGraph(changes['planets'].currentValue);
        Plotly.newPlot('graph', data, layout, config);
      })
  }

  rendered(){
    console.log('PlanetsGraphComponent rendered')
  }

}
