import * as React from "react";

import ciphers, { Options } from "../ciphers";
import fuzzy from "../fuzzy";

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

        const elements = [];
        const filters = this.props.filters.split(",").filter((filter) => filter !== "");
        for (let i = 0; i < results.length; i++) {
          const upper = results[i].toUpperCase();
          if (filters.length === 0 || filters.some((filter) => fuzzy(filter.toUpperCase(), upper))) {
            elements.push(<div key={`${cipher.id}_${i}`}>{results[i]}</div>);
          }
        }

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
