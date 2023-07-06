import React, { useState } from 'react';
import { SafeAreaView, TextInput, Text, FlatList, Image, View, StyleSheet } from 'react-native';

const data = [
  {
    "id": "0",
    "title": "King Nothing",
    "artist": "Metallica",
    "album": "Load",
    "year": 1996,
    "isSoldOut": true,
    "imageUrl": "http://i.scdn.co/image/5a06711d7fc48d5e0e3f9a3274ffed3f0af1bd91"
  },
  {
    "id": "1",
    "title": "Epitaph",
    "artist": "King Crimson",
    "album": "In The Court Of The Crimson King",
    "year": 1969,
    "isSoldOut": true,
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b2730e36a62897cf3f5937bf9c16"
  },
  {
    "id": "2",
    "title": "Siyah (Esved)",
    "artist": "Neyse",
    "album": "Neyse",
    "year": 2011,
    "isSoldOut": false,
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b27363a94f6459d13c78bda9c872"
  },
  {
    "id": "3",
    "title": "Angelica",
    "artist": "Anathema",
    "album": "Eternity",
    "year": 1996,
    "isSoldOut": true,
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b2736c62df3fa967ac4382b54147"
  },
  {
    "id": "4",
    "title": "Living in the Shadows",
    "artist": "Matthew Perryman Jones",
    "album": "(Single)",
    "year": 2016,
    "isSoldOut": false,
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b27313f1a15c18f40a991691f3d6"
  },
  {
    "id": "5",
    "title": "Habibi",
    "artist": "Tamino",
    "album": "Amir",
    "year": 2018,
    "isSoldOut": false,
    "imageUrl": "https://i.scdn.co/image/f17ddfa246db1b8e1f681f658be732b0779d7ea2"
  },
  {
    "id": "6",
    "title": "All Along the Watchtower",
    "artist": "Jimi Hendrix",
    "album": "Electric Ladyland",
    "year": 1968,
    "isSoldOut": true,
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b273522088789d49e216d9818292"
  },
  {
    "id": "7",
    "title": "Benimle Uçmak İster Misin?",
    "artist": "Yavuz Çetin",
    "album": "Satılık",
    "year": 2001,
    "isSoldOut": false,
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b273fc78d57f01d3439af0cd172e"
  },
  {
    "id": "8",
    "title": "God Was Never On Your Side",
    "artist": "Motörhead",
    "album": "Kiss of Death",
    "year": 2001,
    "isSoldOut": false,
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b273ae5941e5e616db0fc4dcd089"
  },
  {
    "id": "9",
    "title": "Snuff",
    "artist": "Slipknot",
    "album": "All Hope Is Gone",
    "year": 2008,
    "isSoldOut": true,
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b273457163bec7e8e4decf8c6375"
  },
  {
    "id": "10",
    "title": "Duş",
    "artist": "Teoman",
    "album": "En Güzel Hikayem",
    "year": 2004,
    "isSoldOut": false,
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b2732611f7e8a56c4c213bc13965"
  },
  {
    "id": "11",
    "title": "Black",
    "artist": "Kari Kimmel",
    "album": "Black",
    "year": 2015,
    "isSoldOut": true,
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b273e4e0a2e01d6b19a9384cb6f1"
  },
  {
    "id": "12",
    "title": "Brother",
    "artist": "Orphaned Land",
    "album": "All Is One",
    "year": 2013,
    "isSoldOut": true,
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b273bc44553f1ae3c1d22925e372"
  },
  {
    "id": "13",
    "title": "The City Holds My Heart",
    "artist": "Ghostly Kisses",
    "album": "(EP)",
    "year": 2018,
    "isSoldOut": false,
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b273fdf4e132227fa498e1688af9"
  },
  {
    "id": "14",
    "title": "Ya Hep Ya Hiç",
    "artist": "Şebnem Ferah",
    "album": "Od",
    "year": 2013,
    "isSoldOut": false,
    "imageUrl": "https://i.scdn.co/image/ab67616d0000b273379476dcb16633eb518e4aa4"
  }
]
const App = () => {
  const [list, setList] = useState(data);

  const renderSong = ({ item }) => <SongCard song={item} />;
  const renderSeparator = () => <View style={styles.separator} />;

  const handleSearch = (text) => {
    const filteredList = data.filter((song) => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={(item) => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeparator}
      />
    </SafeAreaView>
  );
};
export default App;

const SongCard = ({ song }) => {
  return (
    <View style={styles.songContainer}>
      <Image style={styles.image} source={{ uri: song.imageUrl }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{song.title}</Text>

        <View style={styles.contentContainer}>
          <View style={styles.infoContainer}>
            <Text>{song.artist}</Text>
            <Text style={styles.year}>{song.year}</Text>
          </View>
        </View>

        {song.isSoldOut && (
          <View style={styles.soldoutContainer}>
            <Text style={styles.soldoutText}>TÜKENDİ</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const SearchBar = ({ onSearch }) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.input}
        placeholder="Ara..."
        onChangeText={onSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: 10,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    backgroundColor: '#e0e0e0',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
  songContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,

  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    flex: 1,
    flexDirection: 'row',
  },
  year: {
    fontSize: 12,
    marginLeft: 10,
    color: 'gray',
    fontWeight: 'bod',
  },
  soldoutContainer: {
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    flexDirection: 1,
    margin: 5,
    padding: 5,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  soldoutText: {
    color: 'red',

  }
});