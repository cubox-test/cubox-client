import {GetJobInfoByProjectIdRes} from 'api/Center/supervisorType';

interface AssignedSectionProps {
  jobs: GetJobInfoByProjectIdRes[];
}

function AssignedSection({jobs}: AssignedSectionProps) {
  return <div>AssignedSection</div>;
}

export default AssignedSection;
