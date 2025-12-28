import React from 'react';

import { useEffect, useState } from 'react';
import {
  fetchContacts,
  updateContactStatus,
  deleteContact
} from '../services/contactService';
import Loader from '../components/common/Loader';

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadContacts = async () => {
    try {
      setLoading(true);
      const res = await fetchContacts();
      setContacts(res.data || []);
    } catch (err) {
      console.error('Error loading contacts', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const handleStatusChange = async (id, status) => {
    await updateContactStatus(id, status);
    loadContacts();
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this contact?')) return;
    await deleteContact(id);
    loadContacts();
  };

  if (loading) return <Loader />;

  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Admin - Contact Submissions</h1>
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-xs">
          <thead className="bg-secondary">
            <tr>
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">Email</th>
              <th className="px-3 py-2 text-left">Phone</th>
              <th className="px-3 py-2 text-left">Service</th>
              <th className="px-3 py-2 text-left">Package</th>
              <th className="px-3 py-2 text-left">Status</th>
              <th className="px-3 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c._id} className="border-t">
                <td className="px-3 py-2">{c.fullName}</td>
                <td className="px-3 py-2">{c.email}</td>
                <td className="px-3 py-2">{c.phone}</td>
                <td className="px-3 py-2">{c.serviceInterest}</td>
                <td className="px-3 py-2">{c.preferredPackage}</td>
                <td className="px-3 py-2">
                  <select
                    value={c.status}
                    onChange={(e) =>
                      handleStatusChange(c._id, e.target.value)
                    }
                    className="border rounded px-2 py-1"
                  >
                    <option value="new">new</option>
                    <option value="contacted">contacted</option>
                    <option value="converted">converted</option>
                  </select>
                </td>
                <td className="px-3 py-2">
                  <button
                    onClick={() => handleDelete(c._id)}
                    className="text-red-600 underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {contacts.length === 0 && (
              <tr>
                <td className="px-3 py-4 text-center" colSpan={7}>
                  No submissions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Admin;
