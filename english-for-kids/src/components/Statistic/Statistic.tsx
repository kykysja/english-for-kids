import './Statistic.scss';

import React, {SyntheticEvent, useState} from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {getFromLocalStorage, setBaseLocalStorage} from '../../local-storage/local-storage-wrap';
import {setDifficultWords} from '../../store/baseReducer';

function StatisticPage(): JSX.Element {
  const dispatch = useDispatch();

  function handleCalculation(result) {
    switch (String(result)) {
      case '1':
        return 100;
      case 'NaN':
        return 0;
      default:
        return parseFloat((+result * 100).toFixed(2));
    }
  }

  const tableDataArr = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    tableDataArr.push(getFromLocalStorage(key));
    tableDataArr[i].rating = handleCalculation(
      tableDataArr[i].correctClick / (tableDataArr[i].correctClick + tableDataArr[i].wrongClick),
    );
  }
  const tableDataDefaultSorted = tableDataArr.sort((a, b) => (a.word > b.word ? 1 : -1));

  const [tableData, setTableData] = useState(tableDataDefaultSorted);
  const [sortBy, setSortBy] = useState('word');
  const [sortOrder, setSortOrder] = useState('asc');

  function sortTablaData(event: SyntheticEvent) {
    const field = (event.target as HTMLElement).id;

    let sortedTableData;

    if (sortOrder === 'asc') {
      sortedTableData = tableDataDefaultSorted.sort((a, b) => (a[field] < b[field] ? 1 : -1));
    } else {
      sortedTableData = tableDataDefaultSorted.sort((a, b) => (a[field] > b[field] ? 1 : -1));
    }

    const newTableData = [];
    for (let i = 0; i < sortedTableData.length; i++) {
      newTableData.push(sortedTableData[i]);
    }

    setTableData(newTableData);
    setSortBy(field);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  }

  function handleClearLocalStorage() {
    localStorage.clear();
    setBaseLocalStorage();

    const newTableDataArr = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      newTableDataArr.push(getFromLocalStorage(key));
      newTableDataArr[i].rating = handleCalculation(
        newTableDataArr[i].correctClick /
          (newTableDataArr[i].correctClick + newTableDataArr[i].wrongClick),
      );
    }
    const newTableDataDefaultSorted = newTableDataArr.sort((a, b) => (a.word > b.word ? 1 : -1));

    setTableData(newTableDataDefaultSorted);
    setSortBy('word');
    setSortOrder('asc');
  }

  function trainDifficultWords() {
    const sortedByRatingTableData = tableData.sort((a, b) => a.rating - b.rating);

    const difficultWordsArr = [];

    for (let i = 0; i < sortedByRatingTableData.length; i++) {
      if (sortedByRatingTableData[i].rating < 100 && sortedByRatingTableData[i].rating !== 0) {
        difficultWordsArr.push(sortedByRatingTableData[i]);
      }
    }
    difficultWordsArr.splice(8, difficultWordsArr.length - 1);

    dispatch(setDifficultWords(difficultWordsArr));
  }

  return (
    <div className="statistic-page-wrapper">
      <div className="table-buttons">
        <button className="button statistic-button" type="button" onClick={handleClearLocalStorage}>
          <span>Reset</span>
        </button>
        <NavLink
          className="button statistic-button"
          exact
          to="/difficult_words"
          onClick={trainDifficultWords}>
          <span>Train Difficult Words</span>
        </NavLink>
      </div>
      <div className="statistic-table-wrap">
        <table className="statistic-table" cellSpacing="1" cellPadding="1">
          <thead>
            <tr className="table-caption">
              <th
                id="word"
                onClick={(event) => sortTablaData(event)}
                className={`table-button ${sortBy === 'word' ? sortOrder : ''}`}>
                Word
              </th>
              <th
                id="translation"
                onClick={(event) => sortTablaData(event)}
                className={`table-button ${sortBy === 'translation' ? sortOrder : ''}`}>
                Translation
              </th>
              <th
                id="category"
                onClick={(event) => sortTablaData(event)}
                className={`table-button ${sortBy === 'category' ? sortOrder : ''} centered`}>
                Category
              </th>
              <th
                id="trainModeClick"
                onClick={(event) => sortTablaData(event)}
                className={`table-button ${sortBy === 'tranModeClick' ? sortOrder : ''} centered`}>
                Train Clicks
              </th>
              <th
                id="correctClick"
                onClick={(event) => sortTablaData(event)}
                className={`table-button ${sortBy === 'correctClick' ? sortOrder : ''} centered`}>
                Correct Clicks
              </th>
              <th
                id="wrongClick"
                onClick={(event) => sortTablaData(event)}
                className={`table-button ${sortBy === 'wrongClick' ? sortOrder : ''} centered`}>
                Wrong Clicks
              </th>
              <th
                id="rating"
                className={`table-button ${sortBy === 'rating' ? sortOrder : ''} centered`}
                onClick={(event) => sortTablaData(event)}>
                Rating, %
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr className="table-body" key={String(index)}>
                <td className="">{item.word}</td>
                <td className="">{item.translation}</td>
                <td className="centered">{item.category}</td>
                <td className="centered">{item.trainModeClick}</td>
                <td className="centered">{item.correctClick}</td>
                <td className="centered">{item.wrongClick}</td>
                <td className="centered">{item.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StatisticPage;
