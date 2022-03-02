import CenterService from 'api/Center/SupervisorService';
import {GetProjectInfoByCenterIdRes} from 'api/Center/supervisorType';
import Header from 'common/Header';
import Layout from 'common/Layout';
import useFetch from 'hooks/Common/useFetch';
import useIsAuth from 'hooks/Common/useIsAuth';
import {useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import AssignedSection from './components/AssignedSection';
import ProjectSection from './components/ProjectSection/ProjectSection';
import TotalSection from './components/TotalSection';
import WaitingSection from './components/WaitingSection';

const mockProject: GetProjectInfoByCenterIdRes[] = [
  {
    projectId: '1',
    projectName: '프로젝트 1',
    total: 100,
    submitted: 20,
  },
  {
    projectId: '2',
    projectName: '프로젝트 2',
    total: 100,
    submitted: 20,
  },
  {
    projectId: '3',
    projectName: '프로젝트 3',
    total: 100,
    submitted: 20,
  },
  {
    projectId: '4',
    projectName: '프로젝트 4',
    total: 100,
    submitted: 20,
  },
  {
    projectId: '1',
    projectName: '프로젝트 1',
    total: 100,
    submitted: 20,
  },
];

function CenterDetailPage() {
  const {centerId} = useParams<{centerId: string}>();
  const isAuth = useIsAuth();
  const [classfiedJob] = useState({
    jobs: [],
    assignedJobs: [],
    waitingJobs: [],
  });
  const {data: project} = useFetch(
    {centerId: centerId!},
    CenterService.getProjectInfoByCenterId,
  );

  // const {assignedJobs, waitingJobs} = classifyJobs(jobs);

  return (
    <>
      {project && (
        <Layout>
          <Layout.Header>
            <Header isAuth={isAuth} />
          </Layout.Header>
          <Layout.Main>
            <Wrapper>
              <ProjectSection projects={mockProject} />
              <TotalSection jobs={classfiedJob.jobs} />
              <AssignedSection jobs={classfiedJob.assignedJobs} />
              <WaitingSection jobs={classfiedJob.waitingJobs} />
            </Wrapper>
          </Layout.Main>
        </Layout>
      )}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: calc(100% - 6.25rem);
`;

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
