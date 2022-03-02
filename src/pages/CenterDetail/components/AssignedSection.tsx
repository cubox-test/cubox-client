import {GetProjectInfoByCenterIdRes} from 'api/Center/centerType';

interface AssignedSectionProps {
  jobs: GetProjectInfoByCenterIdRes;
}

function AssignedSection({jobs}: AssignedSectionProps) {
  return <div>AssignedSection</div>;
}

export default AssignedSection;
