'use client';

import { useEffect, useRef } from 'react';
import Script from 'next/script';
import styles from './AddressInput.module.css';

export default function AddressInput({
  id,
  placeholder = 'Enter property address...',
  value,
  onChange,
  onAddressSelect,
  className,
  inputClassName,
}) {
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null);
  const onChangeRef = useRef(onChange);
  const onAddressSelectRef = useRef(onAddressSelect);

  useEffect(() => {
    onChangeRef.current = onChange;
    onAddressSelectRef.current = onAddressSelect;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.google?.maps?.places) return;
    if (!inputRef.current || autocompleteRef.current) return;
    const ac = new window.google.maps.places.Autocomplete(inputRef.current, {
      types: ['address'],
      componentRestrictions: { country: 'us' },
    });
    ac.setFields(['formatted_address']);
    ac.addListener('place_changed', () => {
      const place = ac.getPlace();
      if (place?.formatted_address) {
        if (onChangeRef.current) onChangeRef.current(place.formatted_address);
        if (onAddressSelectRef.current) onAddressSelectRef.current(place.formatted_address);
      }
    });
    autocompleteRef.current = ac;
  }, []);

  return (
    <>
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCDtN-QzZ8zcoKOhxQLD4HKcWEiY39Xqcs&libraries=places"
        strategy="afterInteractive"
        onReady={initAutocomplete}
      />
      <input
        ref={inputRef}
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
        autoComplete="off"
        className={inputClassName || className || styles.input}
      />
    </>
  );
}
