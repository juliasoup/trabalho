import React, { useState } from 'react';
import api from '../../services/api';

const Register = () => {
  const [form, setForm] = useState({ email: '', password: '', data_nasc: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/novouser', form);
      alert('Usuário registrado com sucesso!');
    } catch (err) {
      alert('Erro ao registrar usuário.');
    }
  };

  return (
    <div>
      <h2>Registrar</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Senha" value={form.password} onChange={handleChange} required />
        <input type="date" name="data_nasc" value={form.data_nasc} onChange={handleChange} required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default Register;
