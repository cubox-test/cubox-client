import apiClient from 'api/apiClient';
import {SignUpReq} from './authType';

const baseUrl = '/api/auth';

class AuthService {
  public static async signup(req: SignUpReq) {
    try {
      await apiClient.post<{}>(`${baseUrl}/signup`, req);
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
