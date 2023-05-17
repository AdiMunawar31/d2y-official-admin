import Card from "@/components/Card";
import Container from "@/components/Container";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <Container title="Dashboard">
      <Card>
        <Stats />
      </Card>
    </Container>
  );
}
