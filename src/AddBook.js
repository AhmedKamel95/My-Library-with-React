import React, { Component } from "react";

class AddBook extends Component {
  state = {
    title: ""
  };

  handleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBook(this.state);
    this.setState({
      title: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add New Book: </label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.title}
            required
          />
        </form>
      </div>
    );
  }
}

export default AddBook;
