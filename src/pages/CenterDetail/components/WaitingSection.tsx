import {GetJobInfoByProjectIdRes} from 'api/Supervisor/supervisorType';

interface WaitingSectionProps {
  jobs: GetJobInfoByProjectIdRes[];
}

function WaitingSection({jobs}: WaitingSectionProps) {
  return <div>WaitingSection</div>;
}

export default WaitingSection;
