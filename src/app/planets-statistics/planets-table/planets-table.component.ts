import { AfterViewInit, EventEmitter, Component, Input, OnChanges, Output, SimpleChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatLegacyPaginator as MatPaginator, MatLegacyPaginatorModule } from '@angular/material/legacy-paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource, MatLegacyTableModule } from '@angular/material/legacy-table';
import { Planet } from '../../../app/shared/models/planet';
import { PlanetClimatePipe } from '../../shared/pipes/planet-climate.pipe';
import { PlanetTerrainPipe } from '../../shared/pipes/planet-terrain.pipe';
import { PlanetPopulationPipe } from '../../shared/pipes/planet-population.pipe';
import { TitleCasePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyButtonModule } from '@angular/material/legacy-button';

@Component({
    selector: 'app-planets-table',
    templateUrl: './planets-table.component.html',
    styleUrls: ['./planets-table.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatLegacyTableModule, MatSortModule, MatLegacyButtonModule, MatIconModule, MatLegacyPaginatorModule, TitleCasePipe, PlanetPopulationPipe, PlanetTerrainPipe, PlanetClimatePipe]
})
export class PlanetsTableComponent implements OnChanges, AfterViewInit {
  displayedColumns: string[] = ['name', 'population', 'diameter', 'rotation_period', 'gravity', 'climate', 'terrain', 'remove'];

  dataSource: MatTableDataSource<Planet>;

  @Input() planets: Planet[] = [];
  @Output() removePlanet = new EventEmitter<Planet>()

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() { 
    this.dataSource = new MatTableDataSource([]);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource.data = changes['planets'].currentValue
  }

  rendered(){
    console.log('PlanetsTableComponent rendered')
  }

}
