import Card from "@/components/Card";
import Container from "@/components/Container";
import HeaderTable from "@/components/HeaderTable";
import StatsTable from "@/components/StatsTable";
import Table from "@/components/Table";

const page = () => {
  return (
    <Container title="Users">
      <Card>
        <StatsTable />
        <HeaderTable />
        <Table />
      </Card>
    </Container>
  );
};

export default page;
