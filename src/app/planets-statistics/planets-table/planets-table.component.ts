import { AfterViewInit, EventEmitter, Component, Input, OnChanges, Output, SimpleChanges, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatSort } from '@angular/material/sort';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { Planet } from '../../../app/shared/models/planet';

@Component({
  selector: 'app-planets-table',
  templateUrl: './planets-table.component.html',
  styleUrls: ['./planets-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
