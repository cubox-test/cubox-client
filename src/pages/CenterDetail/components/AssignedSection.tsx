import {GetJobInfoByProjectIdRes} from 'api/Supervisor/supervisorType';

interface AssignedSectionProps {
  jobs: GetJobInfoByProjectIdRes[];
}

function AssignedSection({jobs}: AssignedSectionProps) {
  return <div>AssignedSection</div>;
}

export default AssignedSection;
