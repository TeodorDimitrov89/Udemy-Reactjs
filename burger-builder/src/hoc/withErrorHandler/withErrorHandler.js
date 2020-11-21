import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Auxiliary/Auxiliary';

const withErrorHandler = (WrapperComponent, axios) => {
  return class extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null
        }
    }
    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
        return req;
      })
      axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error });
        return Promise.reject(error);
      })
    }

    errorConfirmedHandler = () => {
      this.setState({error: null});
    }
    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message: null}
          </Modal>
          <WrapperComponent {...this.props} />
        </Aux>
      );
    }
  }
}

export default withErrorHandler;