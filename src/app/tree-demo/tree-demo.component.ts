import {Component, OnInit} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource} from '@angular/material/tree';
import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';

/**
 * Course data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface CourseNode {
  name: string;
  children?: CourseNode[];
}

/** Flat node with expandable and level information */
interface COurseFlatNode {
  name: string;
  expandable: boolean;
  level: number;
}

const TREE_DATA: CourseNode[] = [
  {
    name: 'Angular For Beginners',
    children: [
      {
        name: 'Introduction to Angular'
      },
      {
        name: 'Angular Component @Input()'
      },
      {
        name: 'Angular Component @Output()'
      }
    ],
  },
  {
    name: 'Angular Material In Depth',
    children: [
      {
        name: 'Introduction to Angular Material',
        children: [
          {
            name: 'Form Components'
          },
          {
            name: 'Navigation and Containers'
          }
        ],
      },
      {
        name: 'Advanced Angular Material',
        children: [
          {
            name: 'Custom Themes'
          },
          {
            name: 'Tree Components'
          }
        ],
      },
    ],
  },
];

@Component({
  selector: 'tree-demo',
  templateUrl: 'tree-demo.component.html',
  styleUrls: ['tree-demo.component.scss']
})
export class TreeDemoComponent implements OnInit {

  // Nested Tree properties
  nestedDataSource = new MatTreeNestedDataSource<CourseNode>();
  nestedTreeControl = new NestedTreeControl<CourseNode>(node => node.children);

  // Flat Tree properties
  flatTreeControl =  new FlatTreeControl<COurseFlatNode>(
    node => node.level,
    node => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    (node: CourseNode, level: number): COurseFlatNode => {
      return {
        name: node.name,
        expandable: node.children?.length > 0,
        level
      }
    },
    node => node.level,
    node => node.expandable,
    node => node.children
  );

  flatDataSource =  new MatTreeFlatDataSource(this.flatTreeControl, this.treeFlattener);

  ngOnInit() {

    // set the datasource for Nested Tree
    this.nestedDataSource.data = TREE_DATA;
    // set the datasource for Flat Tree
    this.flatDataSource.data = TREE_DATA;
  }

  hasNestedChild = (_: number, node: CourseNode) => !!node.children && node.children.length > 0;

  hasFlatChild(index: number, node: COurseFlatNode) {
    return node.expandable;
  }
}


