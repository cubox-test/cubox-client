import {GetProjectInfoByCenterIdRes} from 'api/Center/supervisorType';

interface WaitingSectionProps {
  jobs: GetProjectInfoByCenterIdRes[];
}

function WaitingSection({jobs}: WaitingSectionProps) {
  return <div>WaitingSection</div>;
}

export default WaitingSection;
