import {GetProjectInfoByCenterIdRes} from 'api/Center/centerType';

interface WaitingSectionProps {
  jobs: GetProjectInfoByCenterIdRes;
}

function WaitingSection({jobs}: WaitingSectionProps) {
  return <div>WaitingSection</div>;
}

export default WaitingSection;
