import {GetJobInfoByProjectIdRes} from 'api/Supervisor/supervisorType';
import styled from 'styled-components';
import {GoPerson} from 'react-icons/go';
import {useState} from 'react';
import WorkerModal from './WorkerModal';

interface JobProps {
  job: GetJobInfoByProjectIdRes;
}

function Job({job}: JobProps) {
  const {jobName, submitted, workerId, total, stateId, jobId} = job;
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isModalOpenMorethenOne, setIsModalOpenMorethenOne] = useState(false);
  console.log('///////////');
  console.log('submit', submitted);
  console.log('workerId', workerId);
  console.log('total', total);
  console.log(jobId);

  const onRequestClose = () => {
    setIsModalOpen(false);
  };

  return (
    <JobItem>
      <Title>{jobName}</Title>
      {isWaitingJob(stateId as StateId) && (
        <WorkerButtonWrapper>
          <WorkerButton onClick={() => setIsModalOpen(true)}>
            워커 배정하기
            <GoPerson />
          </WorkerButton>
          <WorkerModal
            isModalOpen={isModalOpen}
            onRequestClose={onRequestClose}></WorkerModal>
        </WorkerButtonWrapper>
      )}
    </JobItem>
  );
}

const JobItem = styled.li`
  display: flex;
  padding: 0.625rem 1.25rem;
  border: 0.0625rem solid;
  justify-content: space-between;
  &:not(:nth-child(1)) {
    margin-top: 0.3125rem;
  }
`;

const Title = styled.div``;

const WorkerButtonWrapper = styled.div`
  position: relative;
`;

const WorkerButton = styled.button`
  border: 0.0625rem solid;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`;

type StateId = 1 | 2 | 3;

function isWaitingJob(stateId: StateId) {
  return stateId === 1;
}

export default Job;
