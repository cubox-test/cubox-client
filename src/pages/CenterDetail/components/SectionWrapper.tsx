import SupervisorService from 'api/Supervisor/SupervisorService';
import {
  GetJobInfoByProjectIdRes,
  GetProjectInfoByCenterIdRes,
} from 'api/Supervisor/supervisorType';
import useFetch from 'hooks/Common/useFetch';
import {useState} from 'react';
import styled from 'styled-components';
import AssignedSection from './AssignedSection';
import ProjectSection from './ProjectSection/ProjectSection';
import TotalSection from './TotalSection';
import WaitingSection from './WaitingSection';

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
    projectId: '5',
    projectName: '프로젝트 5',
    total: 100,
    submitted: 20,
  },
];

interface SectionWrapperProps {
  centerId: string;
}

function SectionWrapper({centerId}: SectionWrapperProps) {
  const initalState: State = {
    jobs: [],
    assignedJobs: [],
    waitingJobs: [],
  };
  const [classfiedJob, setClassfiedJob] = useState(initalState);
  const {data: project} = useFetch(
    {centerId: centerId!},
    SupervisorService.getProjectInfoByCenterId,
  );

  const onClilck = async (projectId: string) => {
    const jobs = await SupervisorService.getJobInfoByProjectId({projectId});
    const {assignedJobs, waitingJobs} = classifyJobs(jobs);
    setClassfiedJob({
      jobs,
      assignedJobs,
      waitingJobs,
    });
  };
  return (
    <>
      {project && (
        <Wrapper>
          <ProjectSection onClick={onClilck} projects={mockProject} />
          <TotalSection jobs={classfiedJob.jobs} />
          <AssignedSection jobs={classfiedJob.assignedJobs} />
          <WaitingSection jobs={classfiedJob.waitingJobs} />
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: calc(100% - 6.25rem);
`;

type State = {
  jobs: GetJobInfoByProjectIdRes[];
  assignedJobs: GetJobInfoByProjectIdRes[];
  waitingJobs: GetJobInfoByProjectIdRes[];
};

function classifyJobs(jobs: GetJobInfoByProjectIdRes[] | null) {
  const assignedJobs: GetJobInfoByProjectIdRes[] = [];
  const waitingJobs: GetJobInfoByProjectIdRes[] = [];
  if (jobs == null) {
    return {assignedJobs, waitingJobs};
  }

  jobs.forEach(job => {
    const {stateId} = job;
    if (isWaiting(stateId)) {
      waitingJobs.push(job);
    } else {
      assignedJobs.push(job);
    }
  });

  return {assignedJobs, waitingJobs};
}

function isWaiting(assingState: number) {
  return assingState === 1;
}

export default SectionWrapper;
