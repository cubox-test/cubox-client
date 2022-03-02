import {GetJobInfoByProjectIdRes} from 'api/Center/supervisorType';

interface TotalSectionProps {
  jobs: GetJobInfoByProjectIdRes[];
}

function TotalSection({jobs}: TotalSectionProps) {
  return <div>TotalSection</div>;
}

export default TotalSection;
