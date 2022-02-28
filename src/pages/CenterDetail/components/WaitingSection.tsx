import {GetJobsInfoByCenterIdRes} from 'api/Center/centerType';

interface WaitingSectionProps {
  jobs: GetJobsInfoByCenterIdRes;
}

function WaitingSection({jobs}: WaitingSectionProps) {
  return <div>WaitingSection</div>;
}

export default WaitingSection;
