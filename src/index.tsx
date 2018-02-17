import * as React from "react";
import * as ReactDOM from "react-dom";

import ciphers, { Cipher, Options } from "./ciphers";
import CipherOptions from "./components/CipherOptions";
import Input from "./components/Input";
import Output from "./components/Output";

interface State {
  filters: string;
  input: string;
  passwords: string;
  options: {[id: string]: Options};
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      filters: "",
      input: "",
      options: {},
      passwords: "",
    };

    for (const id in ciphers) {
      if (ciphers.hasOwnProperty(id)) {
        this.state.options[id] = ciphers[id].options;
      }
    }
  }

  handleInputChange = (input: string) => this.setState({ input });
  handlePasswordsChange = (passwords: string) => this.setState({ passwords });
  handleFiltersChange = (filters: string) => this.setState({ filters });

  handleOptionsChange = (options: {[id: string]: Options}) => {
    this.setState({options});
  }

  render() {
    return (
      <>
        <Input
          handleInputChange={this.handleInputChange}
          handlePasswordsChange={this.handlePasswordsChange}
          handleFiltersChange={this.handleFiltersChange}

          input={this.state.input}
          passwords={this.state.passwords}
          filters={this.state.filters}
        />
        <Output
          input={this.state.input}
          passwords={this.state.passwords}
          filters={this.state.filters}
          options={this.state.options}
        />
        <CipherOptions handleOptionsChange={this.handleOptionsChange} options={this.state.options}/>
      </>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
