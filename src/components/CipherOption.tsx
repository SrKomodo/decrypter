import * as React from "react";

import ciphers, { Options } from "../ciphers";
import Option from "./Option";

interface Props {
  id: string;
  options: Options;
  handleChange: (option: Options, id: string) => any;
}

class CipherOption extends React.Component<Props> {
  handleChange = (value: boolean, id: string) => {
    const newOptions = this.props.options;
    newOptions[id].enabled = value;
    this.props.handleChange(newOptions, this.props.id);
  }

  render() {
    const elements = [];
    for (const id in this.props.options) {
      if (this.props.options.hasOwnProperty(id)) {
        const cipherOption = this.props.options[id];
        elements.push(<Option handleChange={this.handleChange} id={id} key={id} option={cipherOption}/>);
      }
    }
    return (
      <div>
        <div>{ciphers[this.props.id].name}</div>
        {elements}
      </div>
    );
  }
}

export default CipherOption;
