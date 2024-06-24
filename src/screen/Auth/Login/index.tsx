import {Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {getLogin} from './api';
const Login = () => {
  const _getLogin = async () => {
    const param = {
      email: 'user2@gmail.com',
      password: '1234567123',
    };
    const res = await getLogin(param);
    console.log(res, 'res');
  };

  useEffect(() => {
    _getLogin();
  }, []);
  return (
    <View>
      <Text>T</Text>
    </View>
  );
};
export default Login;
