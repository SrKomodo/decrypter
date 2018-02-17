import * as React from "react";

interface Props {
  input: string;
  passwords: string;
  filters: string;

  handleInputChange: (input: string) => any;
  handlePasswordsChange: (input: string) => any;
  handleFiltersChange: (input: string) => any;
}

class Input extends React.Component<Props> {

  handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.props.handleInputChange(e.currentTarget.value);
  }
  handlePasswordsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.props.handlePasswordsChange(e.currentTarget.value);
  }
  handleFiltersChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.props.handleFiltersChange(e.currentTarget.value);
  }

  render() {
    return (
      <div id="inputs">
        <textarea
          value={this.props.input}
          onChange={this.handleInputChange}
          placeholder="encrypted text">
        </textarea>
        <textarea
          value={this.props.passwords}
          onChange={this.handlePasswordsChange}
          placeholder="possible passwords (comma separated)">
        </textarea>
        <textarea
          value={this.props.filters}
          onChange={this.handleFiltersChange}
          placeholder="filters (comma separated)">
        </textarea>
      </div>
    );
  }
}

export default Input;
