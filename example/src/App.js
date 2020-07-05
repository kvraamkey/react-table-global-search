import React from 'react';

import { useTableSearch } from '@kvraamkey/table-global-search';
import '@kvraamkey/table-global-search/dist/index.css';

const getUser = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users/');
  const data = await resp.json();
  return { data };
};

const App = () => {
  const [searchVal, setSearchVal] = React.useState(null);

  const { filteredData, loading } = useTableSearch({
    searchVal,
    retrieve: getUser
  });

  return (
    <div className='w3-container'>
      <h3>Make a Search Engine for Any Table in React</h3>
      <p>
        This method is a generic one and would work with any type of table that
        involves feeding a data source to it in order to render the rows.
      </p>
      <div className='search-bar w3-margin-bottom w3-margin-top'>
        <input
          onChange={(e) => setSearchVal(e.target.value)}
          type='search'
          className='w3-input w3-light-black w3-border w3-text-gray'
          placeholder='Filter by tags and attributes or search by keyword'
        />
      </div>

      <table className='w3-table-all w3-card'>
        <thead>
          <tr className='w3-light-grey'>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td>loading</td>
            </tr>
          )}
          {!loading &&
            filteredData.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <address>
                    {Object.values(user.address)
                      .filter((val) => typeof val !== 'object')
                      .join(', ')}
                  </address>
                </td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
              </tr>
            ))}
          {!loading && filteredData.length === 0 && (
            <tr>
              <td>No data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
