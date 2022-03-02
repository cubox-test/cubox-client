import {GetJobInfoByProjectIdRes} from 'api/Center/supervisorType';

interface WaitingSectionProps {
  jobs: GetJobInfoByProjectIdRes[];
}

function WaitingSection({jobs}: WaitingSectionProps) {
  return <div>WaitingSection</div>;
}

export default WaitingSection;
