import React, { PropTypes } from 'react';

const buttonBase = {
  border: 'none',
  borderRadius: 3,
  boxShadow: '0 1px 0 #444',
  cursor: 'pointer',
  color: '#fff',
  fontWeight: 700,
  marginRight: 5,
  outline: 'none',
  padding: 10,
};

const styles = {
  container: {
    marginBottom: 6,
  },
  composer: {
    backgroundColor: '#fff',
    borderBottom: '1px solid #ccc',
    borderRadius: 3,
    marginBottom: 6,
    minHeight: 20,
    padding: '6px 8px 4px',
  },
  openComposer: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#888',
    cursor: 'pointer',
    fontSize: 14,
    outline: 'none',
    padding: 8,
    textAlign: 'left',
  },
  text: {
    border: 'none',
    color: '#444',
    fontSize: 14,
    outline: 'none',
    padding: 0,
    resize: 'none',
    width: '100%',
  },
  addButton: {
    ...buttonBase,
    backgroundColor: '#1abc9c',
  },
  cancelButton: {
    ...buttonBase,
    backgroundColor: '#95a5a6',
  },
};

const initialState = {
  isOpen: false,
  name: '',
};

export default class CardComposer extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    onAdd: PropTypes.func,
  }

  state = initialState

  handleOpen = () => {
    this.setState({ isOpen: true });
  }

  handleCancel = () => {
    this.setState(initialState);
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleAdd = () => {
    if (this.state.name) {
      this.props.onAdd(this.state.name);
      this.setState(initialState);
    } else {
      React.findDOMNode(this.nameTextArea).focus();
    }
  }

  handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.handleAdd();
    }
  }

  render() {
    if (!this.state.isOpen) {
      return (
        <button style={styles.openComposer}
                onClick={this.handleOpen}>
          {this.props.label}
        </button>
      );
    }
    return (
      <div style={styles.container}>
        <div style={styles.composer}>
          <textarea style={styles.text}
                    value={this.state.name}
                    ref={component => this.nameTextArea = component}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    autoFocus />
        </div>
        <button style={styles.addButton}
                type="button"
                onClick={this.handleAdd}>
          Add
        </button>
        <button style={styles.cancelButton}
                type="button"
                onClick={this.handleCancel}>
          Cancel
        </button>
      </div>
    );
  }
}
