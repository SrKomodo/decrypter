import * as React from "react";

import { Options } from "../ciphers";
import CipherOption from "./CipherOption";

interface Props {
  options: {
    [id: string]: Options;
  };
  handleOptionsChange: (options: {[id: string]: Options}) => any;
}

class CipherOptions extends React.Component<Props> {
  handleChange = (option: Options, id: string) => {
    const newOptions = this.props.options;
    newOptions[id] = option;
    this.props.handleOptionsChange(newOptions);
  }

  render() {
    const elements = [];
    for (const id in this.props.options) {
      if (this.props.options.hasOwnProperty(id)) {
        const cipherOptions = this.props.options[id];
        elements.push(<CipherOption handleChange={this.handleChange} key={id} id={id} options={cipherOptions}/>);
      }
    }
    return (
      <div>
        {elements}
      </div>
    );
  }
}

export default CipherOptions;
