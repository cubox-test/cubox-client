import CenterService from 'api/Center/CenterService';
import useFetch from 'hooks/Common/useFetch';
import CenterCard from './CenterCard';

interface MainProps {
  userId: string;
}

function Main({userId}: MainProps) {
  const {data: centers} = useFetch(
    {userId},
    CenterService.getCenterInfoByUserId,
  );

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
