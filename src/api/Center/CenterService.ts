import apiClient from 'api/apiClient';
import {
  GetCenterInfoByUserIdReq,
  GetCenterInfoByUserIdRes,
  GetJobsInfoByCenterIdReq,
  GetJobsInfoByCenterIdRes,
  GetWorkersInfoByCenterIdRes,
} from './centerType';

const baseUrl = '/api/center';

class CenterService {
  public static async getCenterInfoByUserId(req: GetCenterInfoByUserIdReq) {
    try {
      const {data} = await apiClient.get<GetCenterInfoByUserIdRes>(
        `${baseUrl}`,
        {params: req},
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  public static async getWorkersInfoByCenterId(centerId: string) {
    try {
      const {data} = await apiClient.get<GetWorkersInfoByCenterIdRes>(
        `${baseUrl}/workers`,
        {
          params: {centerId},
        },
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  public static async getJobsInfoByCenterId(req: GetJobsInfoByCenterIdReq) {
    try {
      const {data} = await apiClient.get<GetJobsInfoByCenterIdRes>(
        `${baseUrl}/jobs`,
        {
          params: {centerId: req.centerId},
        },
      );
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default CenterService;
