import {api} from '@/api/configAPI';

export const getLogin = async (param: any) => {
  return api.post('/auth/login', {
    email: param.email,
    password: param.password,
  });
};
