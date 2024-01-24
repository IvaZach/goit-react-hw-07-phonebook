import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { findContact } from '../../redux/filterSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(findContact(e.target.value));
  };
  return (
    <label className="form-label">
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        className="form-control"
      ></input>
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};

export default Filter;
