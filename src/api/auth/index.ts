import { post } from '../../services/api';
import { AuthUser } from '../../types/User';

const login = (params: AuthUser) => post('/auth/login', params);

const auth = {
  login,
};

export default auth;
