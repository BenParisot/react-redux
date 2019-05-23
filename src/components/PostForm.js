import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends PureComponent {
    static propTypes = {
      onSubmit: PropTypes.func.isRequired
    }
    state = {
      title: '',
      body: ''
    }

    handleSubmit

    handleChange

    render() {
      const { title, body } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Enter a title:
            <input type="text"></input>
          </label>
          <label>Write your post:
            <input type="text"></input>
          </label>
          <button type="submit">Create Your Post!</button>
        </form>
      );
    
    }
}
