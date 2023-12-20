// WebViewModal.js
import React from 'react';
import { Modal, View, StyleSheet,ModalProps } from 'react-native';
import { WebView } from 'react-native-webview';
interface WebViewModalProps extends ModalProps{
    isVisible:boolean;
    onClose:()=>void;
    url:string;
}
const WebViewModal: React.FC<WebViewModalProps> = ({ isVisible, onClose, url }) => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={onClose}
      >
        <View style={styles.modalView}>
          <WebView source={{ uri: url }} />
        </View>
      </Modal>
    );
  };
  

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});

export default WebViewModal;

