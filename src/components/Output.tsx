import * as React from "react";

import ciphers, { Options } from "../ciphers";

interface Props {
  input: string;
  passwords: string;
  filters: string;
  options: {[id: string]: Options};
  enabled: {[id: string]: boolean};
}

class Output extends React.Component<Props> {
  render() {
    const output = [];
    for (const id in ciphers) {
      if (this.props.options.hasOwnProperty(id)) {
        if (!this.props.enabled[id]) {
          continue;
        }

        const cipher = ciphers[id];

        if (!cipher.filter(this.props.input)) {
          continue;
        }

        const results = cipher.decipher(
          this.props.input,
          this.props.options[cipher.id],
          this.props.passwords.split(",").filter((password) => password !== ""),
        );

        const elements = results.map((result, i) => {
          const upper = result.toUpperCase();
          if (this.props.filters.split(",").some((filter) => upper.indexOf(filter.toUpperCase()) !== -1)) {
            return <div key={`${cipher.id}_${i}`}>{result}</div>;
          }
        });

        output.push(...elements);
      }
    }
    return (
      <div id="output">
        {output}
      </div>
    );
  }
}

export default Output;
