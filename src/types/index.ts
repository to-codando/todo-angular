export type DataListEventType = {
  icon: IconType,
  data: DataListType
}

export type IconType = {
  type: string;
  event?: string;
}

export type DataListType = {
  id: number,
  title: string;
  icons?: IconType[];
  projectId?: number;
  path?: string;
}

export type ProjectType = {
  id: number;
  title: string;
}

export type CreateProjectType = {
  title: string
}

export type TaskType = {
  id: number;
  projectId: number;
  title: string;
}

export type BasicTaskType = {
  projectId: number;
  title: string
}
