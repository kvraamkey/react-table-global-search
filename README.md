# react-table-global-search

[![NPM](https://img.shields.io/npm/v/table-global-search.svg)](https://www.npmjs.com/package/@kvraamkey/react-table-global-search) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @kvraamkey/react-table-global-search
```

## Usage

```jsx
import React, { Component } from 'react';
import { useTableSearch } from '@kvraamkey/react-table-global-search';

class Example extends Component {
  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: () => { `function be here to pass data `}
  });
  ...............
  ...............
}
```

## Example

[Check out with sample code](https://github.com/kvraamkey/react-table-global-search/tree/master/example)

## License

MIT © [](https://github.com/)
