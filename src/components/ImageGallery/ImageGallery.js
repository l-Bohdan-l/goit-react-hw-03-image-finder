import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';

export class ImageGallery extends Component {
  state = {
    imgQuery: '',
    page: 1,
    imgArray: [],
  };

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
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.imgQuery !== this.props.imgQuery) {
      console.log('1 if props', prevProps.imgQuery);
      this.setState({ page: 1, imgArray: [] });
      console.log('1 if', this.state);
    }

    if (
      prevProps.imgQuery !== this.props.imgQuery ||
      prevState.page !== this.state.page
    ) {
      console.log('2 if props', prevProps.imgQuery);
      this.findImage();
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

  render() {
    return (
      <>
        <ul>
          {this.state.imgArray.map(imgItem => (
            <li key={imgItem.id}>
              <ImageGalleryItem
                link={imgItem.previewURL}
                name={this.state.imgQuery}
              />
            </li>
          ))}
        </ul>
        <Button onClick={this.nextPage} />
      </>
    );
  }
}
