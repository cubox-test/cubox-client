import color from 'color';
import {useQuery} from 'react-query';
import styled from 'styled-components';
import CenterCard from './CenterCard/CenterCard';
import SupervisorService from 'api/Supervisor/SupervisorService';
import Loading from 'common/Loading';

interface MainProps {
  userId: string;
}

function Main({userId}: MainProps) {
  const {
    data: centers,
    error,
    isLoading,
  } = useQuery(['centers', userId], () =>
    SupervisorService.getCenterInfoByUserId({userId}),
  );

  if (error) {
    alert((error as any).response.data);
  }

  if (isLoading && !centers) {
    return <Loading />;
  }

  return (
    <Wrapper>
      {centers &&
        centers.map(centerInfo => (
          <CenterCard
            center={centerInfo.center}
            projects={centerInfo.project}
            key={centerInfo.center.centerId}
          />
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${color.background};
  display: flex;
  flex-wrap: wrap;
`;

export default Main;
