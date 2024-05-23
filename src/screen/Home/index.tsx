import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
  FlatList,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IFolder {
  id: number;
  name: string;
  image: string;
}

const Home = () => {
  const [folder, setFolder] = useState<IFolder[]>([]);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  console.log(folder, 'folder');
  useEffect(() => {
    const loadFolders = async () => {
      try {
        const savedFolders = await AsyncStorage.getItem('folders');
        if (savedFolders) {
          setFolder(JSON.parse(savedFolders));
        }
      } catch (error) {
        console.error('Failed to load folders from storage', error);
      }
    };

    loadFolders();
  }, []);

  const saveFolders = async (folders: IFolder[]) => {
    try {
      await AsyncStorage.setItem('folders', JSON.stringify(folders));
    } catch (error) {
      console.error('Failed to save folders to storage', error);
    }
  };

  const onAdd = () => {
    const newFolder = {
      id: folder.length + 1,
      name: name,
      image: 'string',
    };

    const updatedFolders = [...folder, newFolder];
    setFolder(updatedFolders);
    saveFolders(updatedFolders);

    setVisible(false);
    setName('');
  };

  const onDelete = (id: number) => {
    let updatedFolder = folder.filter(item => item.id !== id);
    const updatedFolders = updatedFolder.map((item, index) => ({
      ...item,
      id: index + 1,
    }));
    setFolder(updatedFolders);
    saveFolders(updatedFolders);
  };

  const renderItem = ({item}: {item: IFolder}) => (
    <View style={styles.folderItem}>
      <Text style={styles.folderText}>{item.name}</Text>
      <TouchableOpacity
        onPress={() => onDelete(item.id)}
        style={styles.deleteButton}>
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Topic</Text>
      <FlatList
        data={folder}
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
                value={name}
                onChangeText={text => setName(text)}
                placeholder="Enter name here"
                placeholderTextColor={'grey'}
              />
            </View>
            <TouchableOpacity onPress={onAdd} style={styles.confirmButton}>
              <Text style={styles.confirmButtonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

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
  folderText: {
    fontSize: 16,
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
export default Home;
