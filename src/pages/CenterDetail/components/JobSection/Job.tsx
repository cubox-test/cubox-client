import {GetJobInfoByProjectIdRes} from 'api/Supervisor/supervisorType';

interface JobProps {
  job: GetJobInfoByProjectIdRes;
}

function Job({job}: JobProps) {
  const {jobName} = job;
  return <div>{jobName}</div>;
}

export default Job;
