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
