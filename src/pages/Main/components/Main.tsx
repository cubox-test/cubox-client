import color from 'color';
import useCenter from 'hooks/Main/useCenter';
import styled from 'styled-components';
import CenterCard from './CenterCard/CenterCard';

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
    <Wrapper>
      {centers && centers.map((center, i) => <CenterCard key={i} />)}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${color.background};
  display: flex;
  flex-wrap: wrap;
`;

export default Main;
