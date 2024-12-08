import { Card } from "react-native-paper";

export default function CustomCard() {
  return (
    <Card style={{ marginBottom: 10 }} onPress={() => console.log("Pressed")}>
      <Card.Title title="Card Title" subtitle="Card Subtitle" />
    </Card>
  );
}
