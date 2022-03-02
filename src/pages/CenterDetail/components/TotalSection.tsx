import {GetProjectInfoByCenterIdRes} from 'api/Center/supervisorType';

interface TotalSectionProps {
  jobs: GetProjectInfoByCenterIdRes[];
}

function TotalSection({jobs}: TotalSectionProps) {
  return <div>TotalSection</div>;
}

export default TotalSection;
