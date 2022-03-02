import apiClient from 'api/apiClient';
import {
  GetCenterInfoByUserIdReq,
  GetCenterInfoByUserIdRes,
  GetProjectInfoByCenterIdReq,
  GetProjectInfoByCenterIdRes,
  GetWorkersInfoByCenterIdRes,
} from './supervisorType';

const baseUrl = '/api/supervisor';

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

  public static async getProjectInfoByCenterId(
    req: GetProjectInfoByCenterIdReq,
  ) {
    try {
      const {data} = await apiClient.get<GetProjectInfoByCenterIdRes[]>(
        `${baseUrl}/project`,
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
