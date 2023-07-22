import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Appbar, Chip, Button } from "react-native-paper";
import CardItems from "./CardItems";
// import {ComponentNavigationProps} from "./utils/types";

const categories = [
  "business",
  "entertainment",
  "food",
  "health",
  "technology",
  "science",
  "sports",
  "top",
  "tourism",
];

const API_KEY = "pub_23649b097c62209921ab653ab5da75416dce2";

const Home = (props) => {
  const [newsData, setNewsData] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [nextPage, setNextPage] = useState("");

  const handleSelect = (value) => {
    setSelectedCategories((pre) =>
      pre.find((p) => p === value)
        ? pre.filter((cat) => cat !== value)
        : [...pre, value]
    );
  };

  const handleSubmit = () => {
    const URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=in&language=en${
      selectedCategories.length > 0 ? `&category=${selectedCategories.join()}` : ""
    }${nextPage.length > 0 ? `&page=${nextPage}` : ""}`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setNewsData(data.results);
        setNextPage(data.nextPage);
      });
  };

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>
      <View style={styles.filterContainer}>
        {categories.map((category) => (
          <Chip
            key={category}
            mode="outlined"
            style={styles.chipItem}
            textStyle={{ fontWeight: "400", color: "white", padding: 2 }}
            showSelectedOverlay
            selected={selectedCategories.includes(category)}
            onPress={() => handleSelect(category)}
          >
            {category}
          </Chip>
        ))}
        <Button
          style={styles.button}
          mode="outlined"
          labelStyle={{ fontSize: 16, margin: "auto" }}
          icon="sync"
          onPress={handleSubmit}
        >
          Search
        </Button>
      </View>
      <FlatList
        onEndReached={handleSubmit}
        style={styles.flatList}
        data={newsData}
        renderItem={({ item }) => (
          <CardItems
          navigation = {props.navigation}
            content={item.content}
            description={item.description}
            image_url={item.image_url}
            title={item.title}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 10,
  },
  chipItem: {
    marginHorizontal: 5,
    marginVertical: 5,
  },
  button: {
    maxWidth: 400,
    padding: 0,
    maxHeight: 40,
  },
  flatList: {
    flex: 1,
    height: "auto",
  },
});
