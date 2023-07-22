import { Pressable } from "react-native";
import React from "react";
import { Button, Card, useTheme } from "react-native-paper";

const CardItems = (props) => {
  const theme = useTheme();
  const handlePress = () => {
    props.navigation.navigate("NewsOverView", {
      title: props.title,
      description: props.description,
      image_url: props.image_url,
      content: props.content,
    });
  }

  return (
    <Pressable onPress={handlePress}>
      <Card
        style={{
          marginVertical: 10,
          backgroundColor: theme.colors.elevation.level3,
        }}
      >
        <Card.Cover borderRadius={10} source={{ uri: props.image_url }} />
        <Card.Title
          title={props.title}
          subtitle={props.description.split("\n")[0]}
          titleNumberOfLines={1}
        ></Card.Title>
        <Card.Actions>
          <Button>Cancel</Button>
          <Button>Ok</Button>
        </Card.Actions>
      </Card>
    </Pressable>
  )
};

export default CardItems;
