import React from "react";

class RapWords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word1: "",
      word2: "",
      word3: "",
      word4: "",
      word5: "",
      wordsList: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSave(event) {
      let wordsList = {
          word1: this.state.word1,
          word2: this.state.word2,
          word3: this.state.word3,
          word4: this.state.word4,
          word5: this.state.word5
      }
      this.setState({
          wordsList: wordsList
      })
  }

  render() {
    return (
      <React.Fragment>
        <h1>Enter Rap Words</h1>
        <input
          type="text"
          name="word1"
          value={this.state.word1}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="word2"
          value={this.state.word2}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="word3"
          value={this.state.word3}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="word4"
          value={this.state.word4}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="word5"
          value={this.state.word5}
          onChange={this.onChange}
        />
        <button
            type="button"
            onClick={this.onSave}
        >
            Submit
        </button>
        {this.state.wordsList.word1}
        {this.state.wordsList.word2}
        {this.state.wordsList.word3}
        {this.state.wordsList.word4}
        {this.state.wordsList.word5}
      </React.Fragment>
    );
  }
}

export default RapWords;
