import React, { Component } from 'react';

class AddTodo extends Component {
  render() {
    return (
      <section className="common-area">
        <h2 className="add-title">ADD TASK</h2>
        <input
          type="text"
          placeholder="New Task"
          value={this.props.value}
          onChange={this.props.onChange}
          onKeyDown={this.props.handleAdd}
        />
      </section>
    );
  }
}

export default AddTodo;