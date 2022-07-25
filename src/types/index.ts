export type DataListType = {
  id: number,
  title: string;
  icons?: Array<string>;
  projectId?: number;
  path?: string;
}

export type ProjectType = {
  id: number;
  title: string;
}

export type TaskType = {
  id: number;
  projectId: number;
  title: string;
}
