import { useDispatch, useSelector } from 'react-redux';
import css from './ImageModal.module.css';
import Modal from 'react-modal';
import { closeModal, setCurrentIndex } from '../../redux/modal/slice';
import {
  selectCurrentIndex,
  selectModalImagesAlt,
  selectModalImagesSrc,
  selectModalIsOpen,
} from '../../redux/modal/selectors';
import { FaCaretLeft } from 'react-icons/fa';
import { FaCaretRight } from 'react-icons/fa';

export default function ImageModal() {
  const dispatch = useDispatch();
  const currentIndex = useSelector(selectCurrentIndex);
  const modalImages = useSelector(selectModalImagesSrc);
  const modalImagesAlt = useSelector(selectModalImagesAlt);
  const isOpen = useSelector(selectModalIsOpen);

  const handleNext = () => {
    const newIndex =
      currentIndex === modalImages.length - 1 ? 0 : currentIndex + 1;
    dispatch(setCurrentIndex(newIndex));
  };

  const handlePrev = () => {
    const newIndex =
      currentIndex === 0 ? modalImages.length - 1 : currentIndex - 1;
    dispatch(setCurrentIndex(newIndex));
  };

  Modal.setAppElement('#root');
  return (
    <Modal
      className={css.modal}
      overlayClassName={css.overlay}
      isOpen={isOpen}
      onRequestClose={() => {
        dispatch(closeModal());
      }}
      contentLabel="Modal image"
    >
      <button onClick={handlePrev} className={css.prevButton}>
        <FaCaretLeft size="32" />
      </button>
      <img
        src={modalImages[currentIndex]}
        alt={modalImagesAlt[currentIndex]}
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
      <button onClick={handleNext} className={css.nextButton}>
        <FaCaretRight size="32" />
      </button>
    </Modal>
  );
}
