import React, { useState } from 'react';
import { sponsorer } from '../alle_sponsorer';

function SponsorForm() {
  const [formData, setFormData] = useState({
    type: '',
    company: '',
    email: '',
    address: '',
    phone: '',
    amount: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    sponsorer.push(formData.company)
    e.preventDefault();
    alert('Tak for din tilmelding som sponsor!');
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block">
        Støttetype:
        <select name="type" value={formData.type} onChange={handleChange} className="block w-full mt-1">
          <option value="">Vælg en type</option>
          <option value="Børnesponsorat">Børnesponsorat</option>
          <option value="Lejrsponsorat">Lejrsponsorat</option>
          <option value="Diplomsponsor">Diplomsponsor</option>
        </select>
      </label>
      <label>
        Firmanavn:
        <input type="text" name="company" value={formData.company} onChange={handleChange} className="block w-full mt-1" />
      </label>
      <label className="block">
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} className="block w-full mt-1" />
      </label>
      <label className="block">
        Adresse:
        <input type="text" name="address" value={formData.address} onChange={handleChange} className="block w-full mt-1" />
      </label>
      <label className="block">
        Telefon:
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="block w-full mt-1" />
      </label>
      <label className="block">
        Beløb:
        <input type="number" name="amount" value={formData.amount} onChange={handleChange} className="block w-full mt-1" />
      </label>
      <button type="submit" className="bg-[#d0000b] text-white px-4 py-2 rounded">Tilmeld</button>
    </form>
  );
}

export default SponsorForm;
