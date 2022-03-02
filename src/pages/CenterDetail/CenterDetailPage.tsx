import CenterService from 'api/Center/CenterService';
import Header from 'common/Header';
// import {GetProjectInfoByCenterIdRes} from 'api/Center/centerType';
import Layout from 'common/Layout';
import {useAppSelector} from 'hooks/Common/sotreHooks';
import useFetch from 'hooks/Common/useFetch';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import AssignedSection from './components/AssignedSection';
import TotalSection from './components/TotalSection';
import WaitingSection from './components/WaitingSection';

function CenterDetailPage() {
  const {centerId} = useParams<{centerId: string}>();
  const {isAuth} = useAppSelector(state => state.auth);
  const [classfiedJob] = useState({
    assignedJobs: [],
    waitingJobs: [],
  });
  const {data: jobs} = useFetch(
    {centerId: centerId!},
    CenterService.getProjectInfoByCenterId,
  );

  // const {assignedJobs, waitingJobs} = classifyJobs(jobs);

  return (
    <>
      {jobs && (
        <Layout>
          <Layout.Header>
            <Header isAuth={isAuth} />
          </Layout.Header>
          <Layout.Main>
            <Wrapper>
              <TotalSection jobs={jobs} />
              <AssignedSection jobs={classfiedJob.assignedJobs} />
              <WaitingSection jobs={classfiedJob.waitingJobs} />
            </Wrapper>
          </Layout.Main>
        </Layout>
      )}
    </>
  );
}

const Wrapper = styled.div``;

// function classifyJobs(jobs: GetProjectInfoByCenterIdRes | null) {
//   if (jobs == null) {
//     return {assignedJobs: null, waitingJobs: null};
//   }
//   const assignedJobs: GetProjectInfoByCenterIdRes = [];
//   const waitingJobs: GetProjectInfoByCenterIdRes = [];

//   jobs.forEach(job => {
//     const {assignState} = job;
//     if (isWaiting(assignState)) {
//       waitingJobs.push(job);
//     } else {
//       assignedJobs.push(job);
//     }
//   });

//   return {assignedJobs, waitingJobs};
// }

// function isWaiting(assingState: number) {
//   return assingState === 1;
// }

export default CenterDetailPage;
