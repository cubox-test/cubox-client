import {GetJobsInfoByCenterIdRes} from 'api/Center/centerType';

interface AssignedSectionProps {
  jobs: GetJobsInfoByCenterIdRes;
}

function AssignedSection({jobs}: AssignedSectionProps) {
  return <div>AssignedSection</div>;
}

export default AssignedSection;
