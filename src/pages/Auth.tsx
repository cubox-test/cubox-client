import HeaderWithoutButton from 'common/HeaderWithoutButton';
import Layout from 'common/Layout';
import {useAppSelector} from 'hooks/Common/sotreHooks';
import React, {useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';

function Auth() {
  const {isAuth} = useAppSelector(state => state.auth);
  const navigate = useNavigate();
  const isFirst = useRef(true);
  useEffect(() => {
    if (!isFirst.current) {
      if (isAuth) {
        navigate(-1);
      } else {
        navigate('/signin');
      }
    }
    isFirst.current = false;
  }, [navigate, isAuth]);
  return (
    <Layout>
      <Layout.Header>
        <HeaderWithoutButton />
      </Layout.Header>
    </Layout>
  );
}

export default Auth;
