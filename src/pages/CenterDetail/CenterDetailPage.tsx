import CenterService from 'api/Center/CenterService';
import {GetJobsInfoByCenterIdRes} from 'api/Center/centerType';
import useFetch from 'hooks/Common/useFetch';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import AssignedSection from './components/AssignedSection';
import TotalSection from './components/TotalSection';
import WaitingSection from './components/WaitingSection';

function CenterDetailPage() {
  const {centerId} = useParams<{centerId: string}>();
  const {data: jobs} = useFetch(
    {centerId: centerId!},
    CenterService.getJobsInfoByCenterId,
  );

  const {assignedJobs, waitingJobs} = classifyJobs(jobs);

  return (
    <>
      {jobs && (
        <Wrapper>
          <TotalSection jobs={jobs} />
          <AssignedSection jobs={assignedJobs!} />
          <WaitingSection jobs={waitingJobs!} />
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div``;

function isWaiting(assingState: number) {
  return assingState === 1;
}

function classifyJobs(jobs: GetJobsInfoByCenterIdRes | null) {
  if (jobs == null) {
    return {assignedJobs: null, waitingJobs: null};
  }
  const assignedJobs: GetJobsInfoByCenterIdRes = [];
  const waitingJobs: GetJobsInfoByCenterIdRes = [];

  jobs.forEach(job => {
    const {assignState} = job;
    if (isWaiting(assignState)) {
      waitingJobs.push(job);
    } else {
      assignedJobs.push(job);
    }
  });

  return {assignedJobs, waitingJobs};
}

export default CenterDetailPage;
