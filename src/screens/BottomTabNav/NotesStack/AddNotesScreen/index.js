import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {v4 as uuidv4} from 'uuid';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './style';
import AppTextInput from '../../../../components/AppTextInput';
import AppIconButton from '../../../../components/AppIconButton';
import Screen from '../../../../components/Screen';
import AppModal from '../../../../components/AppModal';
import colors from '../../../../constants/customThemeColors';
import AppButton from '../../../../components/AppButton';

const AddNotes = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputModal, setInputModal] = useState(false);
  const [notesArr, setNotesArr] = useState([]);
  const [note, setNote] = useState({
    id: '',
    title: new Date().toDateString(),
    subTitle: '',
    imageUrl: '',
  });

  const handleIcon = () => {
    setModalVisible(true);
  };

  const cancelTask = () => {
    setInputModal(false);
  };

  const handleShare = () => {
    alert('Share is pressed');
    setModalVisible(false);
  };

  const handleDelete = () => {
    const filteredArr = notesArr.filter(val => val.title !== note.title);
    setNotesArr(filteredArr);
    setModalVisible(false);
  };

  // console.log(note, 'This is the id');
  const handleAddTask = () => {
    let newNote = {
      ...note,
      id: uuidv4(),
    };
    console.log(newNote, 'This isthe note sending to array');
    setNotesArr([...notesArr, newNote]);
    setNote({
      title: new Date().toDateString(),
      subTitle: '',
      imageUrl: '',
    });
    setInputModal(false);
  };

  const openNoteModal = () => {
    setInputModal(true);
  };

  const FieldName = ({title}) => {
    return (
      <View style={styles.fieldName}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };

  const ShareOrDeleteComp = ({text, iconName, onPress}) => {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.shareAndDelete}>
          <Icon name={iconName} size={25} color={colors.gray} />
          <Text style={styles.sdText}>{text}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  const renderNotesList = ({item}) => {
    return (
      <View style={styles.listContainer}>
        {item.imageUrl !== '' && (
          <Image
            source={{uri: item.imageUrl}}
            style={styles.image}
            resizeMode="contain"
          />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.header}>{item.title}</Text>
          <Text style={styles.subTitle} numberOfLines={1}>
            {item.subTitle}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon
            name="dots-vertical"
            size={23}
            color="black"
            onPress={handleIcon}
          />
        </View>
      </View>
    );
  };

  return (
    <Screen>
      <View style={styles.container}>
        <AppTextInput
          leftIcon="search"
          placeholder="Search"
          containerStyle={styles.searchBar}
        />
        <FlatList
          data={notesArr}
          renderItem={renderNotesList}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.contentContainer}
        />
        <AppModal
          modal={inputModal}
          setModal={val => setInputModal(val)}
          outerView={styles.outerView}
          innerView={styles.innerView}>
          <KeyboardAwareScrollView
            contentContainerStyle={styles.inputContainer}>
            <Text style={styles.heading}>ADD NOTE</Text>
            <FieldName title="Title:" />
            <AppTextInput
              value={note.title}
              onChangeText={val => setNote({...note, title: val})}
              textInputStyle={styles.textInput}
              containerStyle={styles.textInputContainer}
              width="90%"
              placeholder="Enter Title"
            />
            <FieldName title="Note:" />
            <AppTextInput
              multiline
              value={note.subTitle}
              onChangeText={val => setNote({...note, subTitle: val})}
              placeholder="Enter Note..."
              textInputStyle={[styles.textInput, {paddingBottom: 50}]}
              containerStyle={styles.textInputContainer}
              width="90%"
            />
            <FieldName title="Image Url:" />
            <AppTextInput
              value={note.imageUrl}
              onChangeText={val => setNote({...note, imageUrl: val})}
              placeholder="Enter Image Url"
              textInputStyle={styles.textInput}
              containerStyle={styles.textInputContainer}
              width="90%"
            />
            <View style={styles.buttonsContainer}>
              <AppButton
                title="Cancel"
                onPress={cancelTask}
                style={[styles.inputButton, {backgroundColor: 'white'}]}
                textStyle={[styles.btnTxt, {color: 'black'}]}
              />
              <AppButton
                title="Add Note"
                onPress={handleAddTask}
                style={styles.inputButton}
                textStyle={styles.btnTxt}
              />
            </View>
          </KeyboardAwareScrollView>
        </AppModal>
        <AppModal modal={modalVisible} setModal={val => setModalVisible(val)}>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <Icon name="close" size={20} color="black" style={styles.icon} />
          </TouchableWithoutFeedback>
          <ShareOrDeleteComp
            text="Share Note"
            iconName="share-variant-outline"
            onPress={handleShare}
          />
          <View style={styles.divider} />
          <ShareOrDeleteComp
            text="Delete Note"
            iconName="delete-outline"
            onPress={handleDelete}
          />
        </AppModal>
      </View>
      <AppIconButton style={styles.button} onPress={openNoteModal} />
    </Screen>
  );
};

export default AddNotes;

const notes = [
  {
    id: '1',
    title: '12.20.2022',
    subTitle:
      'Lately I have been noticing that my acitivity is getting lesser day by day.',
    imageUrl: '',
  },
  {
    id: '2',
    title: '12.07.2022',
    subTitle: 'Today I tried the new vegetarian dish in the new hotel',
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    id: '3',
    title: '11.23.2022',
    subTitle:
      'I m not sure if my goals are realistic, I keep working on the projects...',
    imageUrl: '',
  },
  {
    id: '4',
    title: '11.20.2022',
    subTitle: 'A friend of mine invited me to his birthday party',
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    id: '5',
    title: '11.12.2022',
    subTitle: 'A friend of mine invited me to his birthday party',
    imageUrl: '',
  },
  {
    id: '6',
    title: '11.12.2022',
    subTitle: 'A friend of mine invited me to his birthday party',
    imageUrl: '',
  },
  {
    id: '7',
    title: '11.12.2022',
    subTitle: 'A friend of mine invited me to his birthday party',
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    id: '8',
    title: '11.12.2022',
    subTitle: 'A friend of mine invited me to his birthday party',
    imageUrl: '',
  },
  {
    id: '9',
    title: '11.12.2022',
    subTitle: 'A friend of mine invited me to his birthday party',
    imageUrl:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  },
  {
    id: '10',
    title: '11.12.2022',
    subTitle: 'A friend of mine invited me to his birthday party',
    imageUrl: '',
  },
];
