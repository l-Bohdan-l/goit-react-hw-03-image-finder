import { Component } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    imgQuery: '',
    page: 1,
    imgArray: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const KEY = `24097500-b1b25815474c0bcb76303e859`;
    const baseUrl = `https://pixabay.com/api/?`;
    const url =
      baseUrl +
      `key=${KEY}` +
      `&q=${this.props.imgQuery}` +
      `&page=${this.props.page}` +
      `&image_type=photo&orientation=horizontal&per_page=12`;
    if (prevProps.imgQuery !== this.props.imgQuery) {
      fetch(url)
        .then(result => {
          return result.json();
        })
        .then(data => {
          this.setState({ imgArray: [...data.hits] });
          console.log(this.state);
        });
    }
  }

  render() {
    return (
      <ul class="gallery">
        {this.state.imgArray.map(imgItem => (
          <li key={imgItem.id}>
            <ImageGalleryItem
              link={imgItem.previewURL}
              name={this.state.imgQuery}
            />
          </li>
        ))}
      </ul>
    );
  }
}
