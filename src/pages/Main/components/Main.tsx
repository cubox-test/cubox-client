import styled from 'styled-components';

function Main() {
  return (
    <TableWrapper>
      <Table>
        <TableRow>
          <TableHead>No.</TableHead>
          <TableHead>Center Name</TableHead>
          <TableHead>Number of Worker</TableHead>
          <TableHead>Total Jobs</TableHead>
          <TableHead>Assigned Job</TableHead>
          <TableHead>Waiting Job</TableHead>
        </TableRow>
      </Table>
    </TableWrapper>
  );
}

const TableWrapper = styled.div``;

const Table = styled.table`
  width: 100%;
`;

const TableRow = styled.tr``;

const TableHead = styled.th``;

// const TalbeData = styled.td``;

export default Main;
