import * as React from "react";

import ciphers, { Options } from "../ciphers";
import Option from "./Option";

interface Props {
  id: string;
  enabled: boolean;
  options: Options;
  handleOptionChange: (option: Options, id: string) => any;
  handleEnabledChange: (enabled: boolean, id: string) => any;
}

class CipherOption extends React.Component<Props> {
  handleOptionChange = (value: boolean, id: string) => {
    const newOptions = this.props.options;
    newOptions[id].enabled = value;
    this.props.handleOptionChange(newOptions, this.props.id);
  }

  handleEnableChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.handleEnabledChange(e.currentTarget.checked, this.props.id);
  }

  render() {
    const elements = [];
    for (const id in this.props.options) {
      if (this.props.options.hasOwnProperty(id)) {
        const cipherOption = this.props.options[id];
        elements.push(<Option
          enabled={this.props.enabled}
          handleOptionChange={this.handleOptionChange}
          id={id}
          key={id}
          option={cipherOption}
        />);
      }
    }
    return (
      <div className={this.props.enabled ? "" : "disabled"}>
        <input onChange={this.handleEnableChange} checked={this.props.enabled} id={this.props.id} type="checkbox"/>
        <label htmlFor={this.props.id}>{ciphers[this.props.id].name}</label>
        <div>
          {elements}
        </div>
      </div>
    );
  }
}

export default CipherOption;
