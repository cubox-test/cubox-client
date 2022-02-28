import CenterService from 'api/Center/CenterService';
import useFetch from 'hooks/Common/useFetch';
import CenterCard from './CenterCard';

interface MainProps {
  userId: string;
}

function Main({userId}: MainProps) {
  const {
    data: centers,
    loading,
    error,
  } = useFetch({userId}, CenterService.getCenterInfoByUserId);

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
