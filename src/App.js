import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './Components/Searchbar';
import ImageGallery from './Components/ImageGallery';
import styles from './App.module.css';
import imgApi from './Api';
import Button from './Components/Button';
import Modal from './Components/Modal';
import Load from './Components/Loader';

class App extends React.Component {
  state = {
    imgName: '',
    page: 1,
    images: [],
    error: null,
    isLoading: false,
    shouldScroll: false,
    currentImages: '',
    openModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imgName;
    const nextName = this.state.imgName;

    if (prevName !== nextName) {
      this.fetchImages();
    }
    if (this.state.images.length > 10) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  handleButton = () => {
    this.fetchImages();
    if (this.state.page > 1) {
      this.setState({ shouldScroll: true });
    }
  };

  handleSearchbarSubmit = imgName => {
    this.setState({
      imgName,
      page: 1,
      images: [],
    });
  };

  OnLoadMore = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
    this.fetchImages();
  };

  loaderToggle = () => {
    this.setState(prev => ({
      isLoading: !prev.isLoading,
    }));
  };

  onImgClick = e => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }
    this.setState({
      currentImages: e.target.dataset.img,
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(prev => ({
      openModal: !prev.openModal,
    }));
  };

  fetchImages = () => {
    this.loaderToggle();
    return setTimeout(() => {
      const { imgName, page } = this.state;
      imgApi
        .fetchImg(imgName, page)
        .then(images =>
          this.setState(prevState => ({
            images: [...prevState.images, ...images.hits],
          })),
        )
        .catch(error => this.setState({ error: true }))
        .finally(() => this.loaderToggle());
    }, 1000);
  };

  render() {
    const { images, isLoading, openModal, currentImages } = this.state;
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.handleSearchbarSubmit} />
        <ImageGallery images={images} onImgClick={this.onImgClick} />
        {isLoading && <Load />}
        {images.length > 0 && !isLoading && (
          <Button onBtnClick={this.OnLoadMore} text={'Загрузить еще'} />
        )}
        <ToastContainer autoClose={3000} />

        {openModal && (
          <Modal onCloseModal={this.toggleModal}>
            <img src={currentImages} alt="Dont Worry Be Happy" />
          </Modal>
        )}
      </div>
    );
  }
}
export default App;
