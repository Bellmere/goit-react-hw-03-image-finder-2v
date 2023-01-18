import css from '../Modal/Modal.module.css';
import PropTypes from 'prop-types';
import { Component } from 'react';


export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);

    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    }


    render() {
        return (
            <div className={css.modal__backdrop} onClick={this.props.onClose}>
                <div className={css.modal__content}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
};