import * as React from "react";
import * as ReactDOM from "react-dom";

import "./stylesheet.scss";

import ciphers, { Cipher, Options } from "./ciphers";
import CipherOptions from "./components/CipherOptions";
import Input from "./components/Input";
import Output from "./components/Output";

interface State {
  filters: string;
  input: string;
  passwords: string;
  options: {[id: string]: Options};
  enabled: {[id: string]: boolean};
}

class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);

    if (sessionStorage.getItem("decrypter-state")) {
      this.state = JSON.parse(sessionStorage.getItem("decrypter-state")!);
    } else {
      this.state = {
        enabled: {},
        filters: "",
        input: "",
        options: {},
        passwords: "",
      };

      for (const id in ciphers) {
        if (ciphers.hasOwnProperty(id)) {
          this.state.enabled[id] = true;
          this.state.options[id] = ciphers[id].options;
        }
      }
    }
  }

  componentDidUpdate() {
    sessionStorage.setItem("decrypter-state", JSON.stringify(this.state));
  }

  handleInputChange = (input: string) => this.setState({ input });
  handlePasswordsChange = (passwords: string) => this.setState({ passwords });
  handleFiltersChange = (filters: string) => this.setState({ filters });

  handleOptionsChange = (options: {[id: string]: Options}) => {
    this.setState({options});
  }

  handleEnabledChange = (enabled: {[id: string]: boolean}) => {
    this.setState({enabled});
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
          enabled={this.state.enabled}
        />
        <CipherOptions
          handleOptionsChange={this.handleOptionsChange}
          handleEnabledChange={this.handleEnabledChange}
          options={this.state.options}
          enabled={this.state.enabled}
        />
      </>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
