import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import Loader from 'react-loader-spinner';
import { Modal } from '../Modal/Modal';
import styles from './ImageGallery.module.scss';

export class ImageGallery extends Component {
  state = {
    imgQuery: '',
    page: 1,
    imgArray: [],
    loading: false,
    showModal: false,
    largeUrl: '',
  };

  // getLargeUrl = itemId => {
  //   const { imgArray } = this.state;
  //   const element = imgArray.find(({ id }) => id === itemId);
  //   // this.setState({ largeUrl: element.largeImageURL });
  //   console.log(element)
  // };

  // modalContent = id => {
  //   this.props.onItemClick(id);
  // };

  findImage = () => {
    const KEY = `24097500-b1b25815474c0bcb76303e859`;
    const baseUrl = `https://pixabay.com/api/?`;
    const url =
      baseUrl +
      `key=${KEY}` +
      `&q=${this.props.imgQuery}` +
      `&page=${this.state.page}` +
      `&image_type=photo&orientation=horizontal&per_page=12`;
    fetch(url)
      .then(result => {
        return result.json();
      })
      .then(data => {
        this.setState(prevState => {
          console.log('fetch.then', this.state);
          return { imgArray: [...prevState.imgArray, ...data.hits] };
        });
      })
      .finally(() => this.setState({ loading: false }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imgQuery !== this.props.imgQuery) {
      this.setState({ loading: true });
      console.log('1 if props', prevProps.imgQuery);
      this.setState({ page: 1, imgArray: [] });
      console.log('1 if', this.state);
    }

    if (
      prevProps.imgQuery !== this.props.imgQuery ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      console.log('2 if props', prevProps.imgQuery);
      setTimeout(() => {
        this.findImage();
      }, 1000);
      console.log('2 if', this.state);
      return;
    }
  }

  nextPage = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  toggleModal = e => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  getLargeUrl = e => {
    const image = this.state.imgArray.find(
      img => img.webformatURL === e.target.src,
    );
    this.setState(({ largeUrl }) => ({
      largeUrl: image.largeImageURL,
    }));
  };

  render() {
    return (
      <>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={this.state.largeUrl} alt={this.state.imgQuery} />
          </Modal>
        )}
        <ul className={styles.ImageGallery}>
          {this.state.imgArray.map(image => (
            <ImageGalleryItem
              key={image.id}
              link={image.webformatURL}
              name={this.props.imgQuery}
              largeUrl={this.getLargeUrl}
              openModal={this.toggleModal}
            />
          ))}
        </ul>
        {this.state.loading && (
          <Loader type="Rings" color="#00BFFF" height={80} width={80} />
        )}
        {this.state.imgArray.length !== 0 && <Button onClick={this.nextPage} />}
      </>
    );
  }
}
