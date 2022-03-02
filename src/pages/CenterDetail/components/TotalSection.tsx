import {GetJobInfoByProjectIdRes} from 'api/Supervisor/supervisorType';

interface TotalSectionProps {
  jobs: GetJobInfoByProjectIdRes[];
}

function TotalSection({jobs}: TotalSectionProps) {
  return <div>TotalSection</div>;
}

export default TotalSection;
