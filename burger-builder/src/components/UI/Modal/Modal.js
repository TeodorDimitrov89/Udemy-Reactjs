import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.scss';

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.children;
  }
  
  render() {
    return (
      <Aux>
        <div className={classes.Modal}
        style={{
          transform: this.props.show ? 'translateY(0)': 'translateY(-150vh)',
          opacity: this.props.show ? '1': '0'
        }}>
          {this.props.children}
        </div>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
      </Aux>
    )
  }
} 

export default Modal;