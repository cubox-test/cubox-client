export type GetCenterInfoByUserIdReq = {
  userId: string;
};

export type GetCenterInfoByUserIdRes = {
  centerId: string;
  centerName: string;
  numberOfWorker: number;
  totalJobs: number;
  assignedJobs: number;
  waitingJobs: number;
}[];

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
