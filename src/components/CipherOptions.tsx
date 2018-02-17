import * as React from "react";

import { Options } from "../ciphers";
import CipherOption from "./CipherOption";

interface Props {
  options: {
    [id: string]: Options;
  };
  enabled: {
    [id: string]: boolean;
  };
  handleOptionsChange: (options: {[id: string]: Options}) => any;
  handleEnabledChange: (enabled: {[id: string]: boolean}) => any;
}

class CipherOptions extends React.Component<Props> {
  handleOptionsChange = (option: Options, id: string) => {
    const newOptions = this.props.options;
    newOptions[id] = option;
    this.props.handleOptionsChange(newOptions);
  }

  handleEnabledChange = (enabled: boolean, id: string) => {
    const newEnabled = this.props.enabled;
    newEnabled[id] = enabled;
    this.props.handleEnabledChange(newEnabled);
  }

  render() {
    const elements = [];
    for (const id in this.props.options) {
      if (this.props.options.hasOwnProperty(id)) {
        const cipherOptions = this.props.options[id];
        elements.push(<CipherOption
          enabled={this.props.enabled[id]}
          handleEnabledChange={this.handleEnabledChange}
          handleOptionChange={this.handleOptionsChange}
          key={id}
          id={id}
          options={cipherOptions}
        />);
      }
    }
    return (
      <div id="options">
        {elements}
      </div>
    );
  }
}

export default CipherOptions;
