import * as React from "react";

import { Option } from "../ciphers";

interface Props {
  handleOptionChange: (value: boolean, id: string) => any;
  id: string;
  enabled: boolean;
  option: Option;
}

class CipherOption extends React.Component<Props> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.handleOptionChange(e.currentTarget.checked, this.props.id);
  }

  render() {
    return (
      <div>
        <input
          disabled={!this.props.enabled}
          onChange={this.handleChange}
          checked={this.props.option.enabled}
          id={this.props.option.name}
          type="checkbox"
        />
        <label htmlFor={this.props.option.name}>{this.props.option.name}</label>
      </div>
    );
  }
}

export default CipherOption;
