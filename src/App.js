import React, { useState, useMemo, useCallback } from 'react';

const MyComponent = () => {
  const [value, setValue] = useState('')

  const reversedValue = useMemo(() => {
    console.log('Calculating reversed value...')
    return value.split('').reverse().join('')
  }, [value])

  const handleChange = useCallback((event) => {
    setValue(event.target.value)
  }, [])

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Reversed Value: {reversedValue}</p>
    </div>
  )
}

export default MyComponent


