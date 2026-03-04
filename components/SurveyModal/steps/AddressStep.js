'use client';

import { useSurvey } from '../../../context/SurveyContext';
import AddressInput from '../../AddressInput/AddressInput';
import styles from '../SurveyModal.module.css';

export default function AddressStep() {
  const { formData, setField, addressValidated, setAddressValidated, continueToNext } = useSurvey();

  function handleAddressSelect(addr) {
    setField('address', addr);
    setAddressValidated('propertyAddress', true);
    setTimeout(() => continueToNext(), 200);
  }

  function handleContinue() {
    if (!addressValidated.propertyAddress) {
      alert('Please select an address from the dropdown suggestions.');
      return;
    }
    if (!formData.address?.trim()) {
      alert('Please enter your property address.');
      return;
    }
    continueToNext();
  }

  return (
    <div>
      <h2 className={styles.stepTitle}>What&apos;s the property address?</h2>
      <p className={styles.hint}>Start by entering the address you want to sell.</p>
      <AddressInput
        id="propertyAddress"
        placeholder="123 Main St, City, State"
        value={formData.address || ''}
        onChange={(val) => {
          setField('address', val);
          setAddressValidated('propertyAddress', false);
        }}
        onAddressSelect={handleAddressSelect}
        inputClassName={styles.inputField}
      />
      <button className={styles.continueButton} onClick={handleContinue}>
        Get My Offer &#8594;
      </button>
    </div>
  );
}
