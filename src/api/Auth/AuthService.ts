import apiClient from 'api/apiClient';
import {
  CertificateAdminReq,
  CertificateAdminRes,
  CertificationRes,
  SignInReq,
  SignUpReq,
} from './authType';

const baseUrl = '/api/auth';

class AuthService {
  public static async signup(req: SignUpReq) {
    try {
      await apiClient.post(`${baseUrl}/signup`, req);
    } catch (error) {
      throw error;
    }
  }

  public static async certification(imp_uid: string) {
    try {
      const {data} = await apiClient.post<CertificationRes>(
        `${baseUrl}/certifications`,
        {imp_uid},
      );
      return data;
    } catch (error) {
      throw error;
    }
  }

  public static async signin(req: SignInReq) {
    try {
      await apiClient.post(`${baseUrl}/login`, req);
    } catch (error) {
      throw error;
    }
  }

  public static async me() {
    try {
      const {data} = await apiClient.get(`${baseUrl}/me`);
      return data;
    } catch (error) {
      throw error;
    }
  }

  public static async logout() {
    try {
      await apiClient.get(`${baseUrl}/logout`);
    } catch (error) {
      throw error;
    }
  }

  public static async certificateAdmin(req: CertificateAdminReq) {
    try {
      const {data} = await apiClient.post<CertificateAdminRes>(
        `${baseUrl}/mail`,
        req,
      );
      console.log(data);

      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default AuthService;
