import React from 'react';
import styles from './styles.module.css';

export const useTableSearch = ({ searchVal, retrieve }) => {
  const [filteredData, setFilteredData] = React.useState([]);
  const [origData, setOrigData] = React.useState([]);
  const [searchIndex, setSearchIndex] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  const crawl = (user, allValues) => {
    if (!allValues) allValues = [];
    for (var key in user) {
      if (typeof user[key] === 'object') crawl(user[key], allValues);
      else allValues.push(user[key] + ' ');
    }
    return allValues;
  };

  const fetchData = async () => {
    const { data: users } = await retrieve();
    setOrigData(users);
    setFilteredData(users);

    const searchInd = users.map((user) => {
      const allValues = crawl(user);
      return { allValues: allValues.toString() };
    });
    setSearchIndex(searchInd);

    if (users) setLoading(false);
  };

  React.useEffect(() => {
    setLoading(true);
    fetchData();
  }, [retrieve]);

  React.useEffect(() => {
    if (searchVal) {
      const reqData = searchIndex.map((user, index) => {
        if (user.allValues.toLowerCase().indexOf(searchVal.toLowerCase()) >= 0)
          return origData[index];
        return null;
      });
      setFilteredData(
        reqData.filter((user) => {
          if (user) return true;
          return false;
        })
      );
    } else setFilteredData(origData);
  }, [searchVal, origData, searchIndex]);

  return { filteredData, loading };
};
