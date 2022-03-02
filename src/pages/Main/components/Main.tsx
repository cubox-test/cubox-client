import SupervisorService from 'api/Center/SupervisorService';
import useFetch from 'hooks/Common/useFetch';
import CenterCard from './CenterCard';

interface MainProps {
  userId: string;
}

function Main({userId}: MainProps) {
  const {data: centers} = useFetch(
    {userId},
    SupervisorService.getCenterInfoByUserId,
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
