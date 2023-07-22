import { Dimensions, ScrollView } from "react-native";
import React from "react";
import { Card, Text, useTheme } from "react-native-paper";

const DetailsCard = (props) => {
  const theme = useTheme();
  return (
    <ScrollView>
      <Card
        style={{
          backgroundColor: theme.colors.background,
          marginTop: 50,
          padding: 10,
        }}
        contentStyle={{ width: Dimensions.get("window").width }}
      >
        <Text
          varient="headlineMedium"
          style={{ fontSize: 32, fontWeight: "bold" }}
        >
          {props.title}
        </Text>

        {props.image_url && (
          <Card.Cover source={{ uri: props.image_url }}></Card.Cover>
        )}
        <Card.Content>
          <Text
            textBreakStrategy="highQuality"
            variant="headlineSmall"
            style={{ textAlign: "left", marginVertical: 10 }}
          >
            {props.content}
          </Text>
        </Card.Content>
      </Card>
    </ScrollView>
  )
};

export default DetailsCard;
