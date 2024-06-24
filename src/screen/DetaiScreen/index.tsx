import HeaderTitle from '@/components/HeaderTitle';
import {ScreenName} from '@/config/ScreenName';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const DetailHome = (props: any) => {
  const {navigation, route} = props;
  const {folder} = route.params;
  console.log(folder, 'folder');
  const [data, setData] = useState<any[]>([]);
  const [visible, setVisible] = useState(false);
  const [word, setWord] = useState('');
  const [mean, setMean] = useState('');

  useEffect(() => {
    const loadFolders = async () => {
      try {
        const savedFolders = await AsyncStorage.getItem(folder.name);
        if (savedFolders) {
          setData(JSON.parse(savedFolders));
        }
      } catch (error) {
        console.error('Failed to load folders from storage', error);
      }
    };

    loadFolders();
  }, []);

  const saveWords = async (words: any[]) => {
    try {
      await AsyncStorage.setItem(folder.name, JSON.stringify(words));
    } catch (error) {
      console.error('Failed to save folders to storage', error);
    }
  };

  const onAdd = () => {
    const newData = [...data];
    const b = newData.find(item => {
      return item.word === word;
    });
    if (b) {
      return;
    }
    console.log('vao day');

    const newWords = {
      id: data?.length + 1,
      word: word,
      mean: mean,
    };
    const updatedFolders = [...data, newWords];
    setData(updatedFolders);
    saveWords(updatedFolders);
    setVisible(false);
    setWord('');
    setMean('');
  };
  console.log(data, 'data>>>>>');

  const onDelete = (id: number) => {
    // let updatedFolder = folder.filter(item => item.id !== id);
    // const updatedFolders = updatedFolder.map((item, index) => ({
    //   ...item,
    //   id: index + 1,
    // }));
    // setFolder(updatedFolders);
    // saveFolders(updatedFolders);
  };

  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity
      // onPress={() =>
      //   navigation.navigate(ScreenName.FlashCard, {
      //     item: item,
      //   })
      // }
      onPress={() => navigation.navigate(ScreenName.Login)}
      style={styles.folderItem}>
      <View>
        <Text style={styles.txtWord}>{item.word}</Text>
        <Text style={styles.txtMean}>{item.mean}</Text>
      </View>
      <TouchableOpacity
        onPress={() => onDelete(item.id)}
        style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <HeaderTitle title={folder.name} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{flexGrow: 1}}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setVisible(true)}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>

      <Modal visible={visible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.textInput}
                value={word}
                onChangeText={text => setWord(text)}
                placeholder="Enter word here"
                placeholderTextColor={'grey'}
              />
              <TextInput
                style={styles.textInput}
                value={mean}
                onChangeText={text => setMean(text)}
                placeholder="Enter mean here"
                placeholderTextColor={'grey'}
              />
            </View>
            <TouchableOpacity onPress={onAdd} style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>Học bài</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onAdd} style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DetailHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    fontSize: 24,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  folderItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 1},
    shadowRadius: 2,
    elevation: 2,
  },
  txtWord: {
    fontSize: 26,
    color: '#000000',
    fontWeight: '700',
  },
  txtMean: {
    fontSize: 13,
    color: '#333',
  },
  deleteButton: {
    backgroundColor: '#ff5252',
    padding: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 14,
  },
  addButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: '#6200ea',
    padding: 15,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 3,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 3,
    height: '50%',
  },
  closeButton: {
    alignItems: 'flex-end',
  },
  closeButtonText: {
    fontSize: 16,
    color: '#6200ea',
  },
  inputContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    height: 56,
    borderWidth: 1,
    borderColor: '#6200ea',
    borderRadius: 15,
    width: '100%',
    paddingHorizontal: 10,
    color: '#333',
    marginVertical: 10,
  },
  confirmButton: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#03dac6',
    borderRadius: 15,
  },
  confirmButtonText: {
    color: 'white',
    fontSize: 18,
  },
});
