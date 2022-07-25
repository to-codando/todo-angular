import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataListType, IconType, DataListEventType } from 'src/types';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.less']
})
export class DataListComponent implements OnInit {

  @Input() data: Array<DataListType> = []
  @Input() cols: number = 1
  @Input() path: string = ''
  @Output() onSelectDataListItem = new EventEmitter<DataListEventType>();

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

  dispatch(icon: IconType, data: DataListType) {
    this.onSelectDataListItem.emit({ icon, data });
  }

  ngOnInit(): void {}

}
