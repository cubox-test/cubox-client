import CenterService from 'api/Center/CenterService';
import {AxiosError} from 'axios';
import {useCallback, useEffect, useState} from 'react';
import CenterCard from './CenterCard';

type InitialState<T> = {
  data: null | T;
  loading: boolean;
  error: null | AxiosError;
};

function useMockCenter<Res, P>(param: P, fetchFunc: (p: P) => Promise<Res>) {
  const initalState: InitialState<Res> = {
    data: null,
    loading: false,
    error: null,
  };

  const [state, setState] = useState(initalState);

  const fetch = useCallback(() => {
    setState({
      ...state,
      loading: true,
    });
    fetchFunc(param)
      .then(data =>
        setState({
          ...state,
          loading: false,
          data,
        }),
      )
      .catch((error: AxiosError) => {
        setState({
          ...state,
          loading: false,
          error,
        });
      });
  }, [fetchFunc, param]);

  useEffect(() => {
    fetch();
  }, []);

  return {...state, fetch};
}

interface MainProps {
  userId: string;
}

function Main({userId}: MainProps) {
  const {
    data: centers,
    loading,
    error,
  } = useMockCenter({userId}, CenterService.getCenterInfoByUserId);

  console.log('data : ', centers);
  console.log('loading : ', loading);
  console.log('error : ', error);
  return (
    <>
      {centers &&
        centers.map(center => (
          <CenterCard key={center.centerId} center={center} />
        ))}
    </>
  );
}

export default Main;
