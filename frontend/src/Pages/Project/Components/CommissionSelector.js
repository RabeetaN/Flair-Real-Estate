import React, { useState, useEffect } from 'react';
import { Row, Col, Form, InputGroup } from 'react-bootstrap';
import Select from 'react-select';

const options = [
  { value: 'fixed', label: 'Fixed' },
  { value: 'percentage', label: 'Percentage' },
];

const ProjectCommission = ({ onCommissionChange, setErrors, error }) => {
  const [exists, setExists] = useState(false);
  const [type, setType] = useState(null);
  const [amount, setAmount] = useState('');
  const [percent, setPercent] = useState('');
  const [localError, setLocalError] = useState(null);

  useEffect(() => {
    if (localError) {
      setErrors((prevErrors) => ({ ...prevErrors, ProjectCommission: localError }));
    } else {
      setErrors((prevErrors) => {
        const errorsCopy = { ...prevErrors };
        delete errorsCopy.ProjectCommission;
        return errorsCopy;
      });
    }
  }, [localError, setErrors]);

  useEffect(() => {
    onCommissionChange({
      exists,
      type: type ? type.value : null,
      amount: amount ? parseFloat(amount.replace(/,/g, '')) : 0,
      percent: percent ? parseFloat(percent) : 0,
    });
  }, [exists, type, amount, percent, onCommissionChange]);

  //   useEffect(() => {
  //     if (isSubmitted && (minPrice === null && maxPrice === null)) {
  //       setLocalError('Please select a price range');
  //     }
  //     else {
  //       setLocalError(null);
  //     }
  //   }, [minPrice, maxPrice, isSubmitted]);

  //   onCommissionChange({
  //     exists,
  //     type: type ? type.value : null,
  //     amount: amount ? parseFloat(amount.replace(/,/g, '')) : null,
  //     percent: percent ? parseFloat(percent) : null,
  //   }, errors);
  // }, [exists, type, amount, percent]);

  const checkErrors = ({ exists, type, amount, percent }) => {
    if (exists && !type) {
      setLocalError('Please select a commission type');
    } else if (exists && type === 'fixed' && amount === '') {
      setLocalError('Please provide a commission amount');
    } else if (exists && type === 'percentage' && percent === '') {
      setLocalError('Please provide a commission percentage');
    } else {
      setLocalError(null);
    }
  };

  const handleTypeChange = (selectedOption) => {
    setType(selectedOption);
    setAmount('');
    setPercent('');
    checkErrors({ exists, type: selectedOption, amount: '', percent: '' });
  };

  const handleAmountChange = (e) => {
    let val = e.target.value;
    if (
      (val === '' || !isNaN(val)) &&
      val.match(/^\d{0,}(\.\d{0,2})?$/)
    ) {
      setAmount(val);
      checkErrors({ exists, type, amount: val, percent });
    }
  };

  const handleAmountOnBlur = (e) => {
    let val = e.target.value;
    if (val !== '') {
      setAmount(parseFloat(val).toLocaleString('en-US', { minimumFractionDigits: 2 }));
    }
  };

  const handleAmountOnFocus = (e) => {
    let val = e.target.value;
    if (val !== '') {
      setAmount(parseFloat(val.replace(/,/g, '')).toFixed(2));
    }
  };

  const handlePercentChange = (e) => {
    let val = e.target.value;
    if ((val === '' || !isNaN(val)) && val <= 100) {
      setPercent(val);
      checkErrors({ exists, type, amount: val, percent });
    }
  };

  return (
    <div className="mt-1 mb-3">
      <Form.Check
        type="checkbox"
        id={`commission-exists`}
        label={"Commission Exists?"}
        checked={exists}
        onChange={() => {
          const newExists = !exists;
          setExists(newExists);
          checkErrors({ exists: newExists, type, amount, percent });
        }}
      />
      {localError && <div className="invalid-feedback d-block text-left">{localError}</div>}

      {exists && (
        <>
          <Form.Label className='mt-1'>Commission Type</Form.Label>
          <Select
            value={type}
            label="Commission Type"
            onChange={handleTypeChange}
            options={options}
            placeholder="Select Commission Type"
            isClearable
          />

          {type && (
            <InputGroup className='mt-1'>
              {type.value === 'fixed' &&
                <InputGroup.Text id="inputGroupPrepend">$</InputGroup.Text>
              }
              <Form.Control
                type="text"
                placeholder={
                  type.value === 'fixed'
                    ? 'Enter Commission Amount'
                    : 'Enter Commission Percentage'
                }
                value={type.value === 'fixed' ? amount : percent}
                onChange={
                  type.value === 'fixed'
                    ? handleAmountChange
                    : handlePercentChange
                }
                onBlur={handleAmountOnBlur}
                onFocus={handleAmountOnFocus}
                isInvalid={
                  (type.value === 'fixed' && amount === '') ||
                  (type.value === 'percentage' && percent === '')
                }
              />
              {type.value === 'percentage' &&
                <InputGroup.Text id="inputGroupPrepend">%</InputGroup.Text>
              }
              <Form.Control.Feedback type="invalid">
                {type.value === 'fixed'
                  ? 'Please enter a valid amount'
                  : 'Please enter a valid percentage'}
              </Form.Control.Feedback>
            </InputGroup>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectCommission;