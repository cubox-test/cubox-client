import apiClient from 'api/apiClient';
import {
  GetCenterInfoByUserIdReq,
  GetCenterInfoByUserIdRes,
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
}

export default CenterService;
