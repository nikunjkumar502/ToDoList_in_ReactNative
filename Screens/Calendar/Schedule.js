import { StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect} from "react";
import { Agenda } from "react-native-calendars";
import { Card, Text, Avatar } from "react-native-paper";

const timeToString = (time) => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const Schedule = () => {
  const [items, setItems] = useState({});
  const loadItems = (day) => {
    const items = items || {};

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];

          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: "Item for " + strTime + " #" + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime,
            });
          }
        }
      }

      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://console.firebase.google.com/u/0/project/jarvis-5679d/overview/todos");
      const data = await response.json();

      const mappedData = data.map((post) => {
        return {
          ...post,
          date: new Date(),
        };
      });

      const reduced = mappedData.reduce((acc, current) => {
        const { date, ...coolItem } = current;

        acc[date] = [coolItem];

        return acc;
      }, {});
      setItems(reduced);
    };
    getData();
  }, []);

  const renderItem = (items) => {
    return (
      <TouchableOpacity style={{ marginRight: 15, marginTop: 20 }}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>{items.name}</Text>
              <Avatar.Text lable="C"></Avatar.Text>
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, margintop: 50 }}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected= {Date()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({});