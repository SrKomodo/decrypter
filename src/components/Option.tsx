import * as React from "react";

import { Option } from "../ciphers";

interface Props {
  handleChange: (value: boolean, id: string) => any;
  id: string;
  option: Option;
}

class CipherOption extends React.Component<Props> {
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.handleChange(e.currentTarget.checked, this.props.id);
  }

  render() {
    return (
      <div>
        <input
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
