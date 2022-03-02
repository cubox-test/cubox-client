import SupervisorService from 'api/Supervisor/SupervisorService';
import {GetJobInfoByProjectIdRes} from 'api/Supervisor/supervisorType';
import useFetch from 'hooks/Common/useFetch';
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import JobSection from './JobSection/JobSection';
import ProjectSection from './ProjectSection/ProjectSection';

interface SectionWrapperProps {
  centerId: string;
}

function SectionWrapper({centerId}: SectionWrapperProps) {
  const initalState: State = {
    jobs: [],
    assignedJobs: [],
    waitingJobs: [],
    compelteJobs: [],
  };
  const [classfiedJob, setClassfiedJob] = useState(initalState);
  const {data: projects, setState: setProjects} = useFetch(
    {centerId: centerId!},
    SupervisorService.getProjectInfoByCenterId,
  );
  const [select, setSelect] = useState<SelectState>('total');
  const [jobToPass, setJobToPass] = useState([] as GetJobInfoByProjectIdRes[]);

  const onClilck = async (projectId: string) => {
    const jobs = await SupervisorService.getJobInfoByProjectId({
      projectId,
      centerId,
    });

    setProjects(prev => {
      prev.data =
        prev.data &&
        prev.data.map(data => {
          if (data.projectId === projectId) {
            data.isSelected = true;
          } else {
            data.isSelected = false;
          }
          return data;
        });
      return prev;
    });

    const {assignedJobs, waitingJobs, compelteJobs} = classifyJobs(jobs);
    setClassfiedJob({
      jobs,
      assignedJobs,
      waitingJobs,
      compelteJobs,
    });
  };

  const selectClick = (selectClicked: SelectState) => {
    setSelect(selectClicked);
  };

  useEffect(() => {
    setJobToPass(setPassToJob(select, classfiedJob));
  }, [select, classfiedJob]);

  return (
    <>
      {projects && (
        <Wrapper>
          <ProjectSection onClick={onClilck} projects={projects} />
          <JobSection
            jobs={jobToPass}
            selectClick={selectClick}
            select={select}
          />
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
  compelteJobs: GetJobInfoByProjectIdRes[];
};

export type SelectState = 'total' | 'assigned' | 'waiting' | 'compeleted';

function classifyJobs(jobs: GetJobInfoByProjectIdRes[] | null) {
  const assignedJobs: GetJobInfoByProjectIdRes[] = [];
  const waitingJobs: GetJobInfoByProjectIdRes[] = [];
  const compelteJobs: GetJobInfoByProjectIdRes[] = [];
  if (jobs == null) {
    return {assignedJobs, waitingJobs, compelteJobs};
  }

  jobs.forEach(job => {
    const {stateId} = job;
    if (isWaiting(stateId)) {
      waitingJobs.push(job);
    } else if (isComplete(stateId)) {
      compelteJobs.push(job);
    } else {
      assignedJobs.push(job);
    }
  });

  return {assignedJobs, waitingJobs, compelteJobs};
}

function isWaiting(assingState: number) {
  return assingState === 1;
}

function isComplete(stateId: number) {
  return stateId === 3;
}

function setPassToJob(select: SelectState, classfiedJob: State) {
  const {assignedJobs, compelteJobs, waitingJobs, jobs} = classfiedJob;
  switch (select) {
    case 'assigned':
      return assignedJobs;
    case 'compeleted':
      return compelteJobs;
    case 'waiting':
      return waitingJobs;
    default:
      return jobs;
  }
}

export default SectionWrapper;
