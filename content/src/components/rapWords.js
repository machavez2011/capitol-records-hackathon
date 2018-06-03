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
    };
    this.setState({
      wordsList: wordsList
    });
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Words to use:</h1>
          <ol>
            <li>{this.state.wordsList.word1}</li>
            <li>{this.state.wordsList.word2}</li>
            <li>{this.state.wordsList.word3}</li>
            <li>{this.state.wordsList.word4}</li>
            <li>{this.state.wordsList.word5}</li>
          </ol>
        </div>
        <div>
          <form className="container">
            <h1>Enter Rap Words</h1>
            <label htmlFor="word1">Word 1</label>
            <div className="form-group">
              <input
                type="text"
                name="word1"
                value={this.state.word1}
                onChange={this.onChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="word1">Word 2</label>
              <input
                type="text"
                name="word2"
                value={this.state.word2}
                onChange={this.onChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="word1">Word 3</label>
              <input
                type="text"
                name="word3"
                value={this.state.word3}
                onChange={this.onChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="word1">Word 4</label>
              <input
                type="text"
                name="word4"
                value={this.state.word4}
                onChange={this.onChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="word1">Word 5</label>
              <input
                type="text"
                name="word5"
                value={this.state.word5}
                onChange={this.onChange}
                className="form-control"
              />
            </div>
            <button
              type="button"
              onClick={this.onSave}
              className="btn btn-success"
            >
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default RapWords;
