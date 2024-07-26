import Modal from "react-modal";

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => {
  if (!image) {
    return null;
  }
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        shouldCloseOnOverlayClick={true}
        overlayClassName={s.overlay}
        contentLabel="Image Modal"
      >
        <img src={image.urls.regular} alt={image.alt_description} />
        <div>
          <p>Description: {image.alt_description}</p>
        </div>
      </Modal>
    </div>
  );
};

export default ImageModal;
