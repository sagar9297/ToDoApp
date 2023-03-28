import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './style';
import AppTextInput from '../../../../components/AppTextInput';
import AppIconButton from '../../../../components/AppIconButton';
import Screen from '../../../../components/Screen';
import AppModal from '../../../../components/AppModal';
import colors from '../../../../constants/customThemeColors';

const AddNotes = props => {
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

  const [notesArr, setNotesArr] = useState(notes);
  const [modalVisible, setModalVisible] = useState(false);
  const [noteId, setNoteId] = useState('');

  const handleIcon = id => {
    setModalVisible(true);
    setNoteId(id);
  };

  const handleShare = () => {
    alert('Share is pressed');
    setModalVisible(false);
  };

  const handleDelete = () => {
    const filteredArr = notesArr.filter(val => val.id !== noteId);
    setNotesArr(filteredArr);
    setModalVisible(false);
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
          <View style={styles.imageContainer}>
            <Image source={{uri: item.imageUrl}} style={styles.image} />
          </View>
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
            onPress={() => handleIcon(item.id)}
          />
        </View>
      </View>
    );
  };

  return (
    <Screen>
      <View style={styles.container}>
        <AppTextInput leftIcon="search" placeholder="Search" />
        <FlatList
          data={notesArr}
          renderItem={renderNotesList}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.contentContainer}
        />
        <AppModal modal={modalVisible} setModal={val => setModalVisible(val)}>
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
      <AppIconButton style={styles.button} />
    </Screen>
  );
};

export default AddNotes;
