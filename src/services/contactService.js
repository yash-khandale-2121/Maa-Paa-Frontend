import api from './api';

export const submitContactForm = async (data) => {
  const res = await api.post('/api/contacts', data);
  return res.data;
};

export const fetchContacts = async () => {
  const res = await api.get('/api/contacts');
  return res.data;
};

export const updateContactStatus = async (id, status) => {
  const res = await api.patch(`/api/contacts/${id}`, { status });
  return res.data;
};

export const deleteContact = async (id) => {
  const res = await api.delete(`/api/contacts/${id}`);
  return res.data;
};
