import useCenter from 'hooks/Main/useCenter';
import CenterCard from './CenterCard';

interface MainProps {
  userId: string;
}

function Main({userId}: MainProps) {
  const {data: centers, error, loading} = useCenter({userId});

  if (error) {
    alert((error as any).response.data);
  }

  if (loading && !centers) {
    return <div>로딩중</div>;
  }

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
