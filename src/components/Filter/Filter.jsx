import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contactsSlice';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const filterValue = event.target.value;
    dispatch(setFilter(filterValue));
      };

  return (
    <FilterContainer>
      <FilterLabel htmlFor="filter">Filter contacts:</FilterLabel>
      <FilterInput type="text" id="filter" onChange={handleChange} />
    </FilterContainer>
  );
};

export default Filter;