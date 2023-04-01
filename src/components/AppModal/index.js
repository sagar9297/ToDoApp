import React from 'react';
import {Modal, TouchableWithoutFeedback, View} from 'react-native';

import styles from './style';

const AppModal = ({modal, setModal, innerView, outerView, children}) => {
  return (
    <Modal
      visible={modal}
      animationType="fade"
      transparent
      onRequestClose={() => setModal(!modal)}>
      <View style={[styles.outerModalView, outerView]}>
        <View style={[styles.innerModalView, innerView]}>{children}</View>
      </View>
    </Modal>
  );
};

export default AppModal;
