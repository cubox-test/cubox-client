export type GetCenterInfoByUserIdReq = {
  userId: string;
};

export type GetCenterInfoByUserIdRes = {
  centerId: string;
  centerName: string;
  numberOfWorker: number;
  totalProjects: number;
  assignedProjects: number;
  waitingProjects: number;
  submittedProjects: number;
};

export type GetWorkersInfoByCenterIdRes = {
  workerId: string;
  jobName: string;
  jobId: string;
  achievement: number;
}[];

export type GetProjectInfoByCenterIdReq = {
  centerId: string;
};

export type GetProjectInfoByCenterIdRes = {
  projectId: string;
  projectName: string;
  total: number;
  submitted: number;
};

export type GetJobInfoByProjectIdReq = {
  projectId: string;
};

export type GetJobInfoByProjectIdRes = {
  jobId: string;
  jobName: string;
  total: number;
  submitted: number;
  workerId: string;
  stateId: number;
};
