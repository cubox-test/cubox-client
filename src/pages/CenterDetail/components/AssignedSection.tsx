import {GetProjectInfoByCenterIdRes} from 'api/Center/supervisorType';

interface AssignedSectionProps {
  jobs: GetProjectInfoByCenterIdRes[];
}

function AssignedSection({jobs}: AssignedSectionProps) {
  return <div>AssignedSection</div>;
}

export default AssignedSection;
