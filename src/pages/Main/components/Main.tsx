import useCenter from 'hooks/Main/useCenter';
import CenterCard from './CenterCard';

interface MainProps {
  userId: string;
}

function Main({userId}: MainProps) {
  const {data: centers} = useCenter({userId});
  // const {data: centers} = useFetch(
  //   {userId},
  //   SupervisorService.getCenterInfoByUserId,
  // );

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
