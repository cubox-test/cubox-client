export type SignUpReq = {
  email: string;
  password: string;
  nickName: string;
  name: string;
  unique_key: string;
};

export type CertificationRes = {
  unique_key: string;
  name: string;
};

export type SignInReq = {
  email: string;
  password: string;
};
