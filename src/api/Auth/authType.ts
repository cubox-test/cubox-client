export type SignUpReq = {
  email: string;
  password: string;
  nickName: string;
  name: string;
  unique_key: string;
  useragent: string;
  signed: boolean;
  roleId: number;
  foreigner: boolean;
  age: number;
};

export type CertificationRes = {
  unique_key: string;
  name: string;
  foreigner: boolean;
  age: number;
};

export type SignInReq = {
  email: string;
  password: string;
};

export type CertificateAdminReq = {
  email: string;
};

export type CertificateAdminRes = {
  certificationNumber: number;
};
