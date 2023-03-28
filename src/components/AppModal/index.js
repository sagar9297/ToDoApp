import React from 'react';
import {Modal, TouchableWithoutFeedback, View} from 'react-native';

import styles from './style';

const AppModal = ({modal, setModal, children}) => {
  return (
    <Modal
      visible={modal}
      animationType="fade"
      transparent
      onRequestClose={() => setModal(!modal)}>
      <TouchableWithoutFeedback onPress={() => setModal(false)}>
        <View style={styles.outerModalView}>
          <View style={styles.innerModalView}>{children}</View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default AppModal;
