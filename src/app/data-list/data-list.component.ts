import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataListType } from 'src/types';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.less']
})
export class DataListComponent implements OnInit {

  @Input() data: Array<DataListType> = []
  @Input() cols: number = 1
  @Input() path: string = ''

  constructor(
    private route: ActivatedRoute,
  ) {}

  getPath (item: DataListType): string {
    return this.path
      ? `/${this.path}/${item.id}`
      : this.getDefaultPath()

  }

  getDefaultPath (): string {
   return this.route.snapshot.url.map( item => `/${item}`).join('')
  }

  ngOnInit(): void {}

}
