import { Component } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';

const modalRoot = document.querySelector('body');

export class Modal extends Component {
  //   componentDidMount() {
  //       window.addEventListener('keydown', this.hendleKeyDown);
  //       window.addEventListener('click', this.clickOnImg);
  //   }
  //   componentWillUnmount() {
  //       window.removeEventListener('keydown', this.hendleKeyDown);
  //     }

  //     clickOnImg = e => {
  //        this.props.onClose();
  //     }

  //   hendleKeyDown = e => {
  //     if (e.code === 'Escape') {
  //       this.props.onClose();
  //     }
  //   };

  clickOnModal = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={styles.overlay} onClick={this.clickOnModal}>
        <div className={styles.modal}>{this.props.children}</div>
      </div>
    );
  }
}
