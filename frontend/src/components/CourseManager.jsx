import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/course';

function CourseCard({ course, onEdit, onDelete }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: 8, padding: 16, margin: 8, width: 250, boxShadow: '0 2px 8px #eee' }}>
      <h3>{course.title}</h3>
      <p><b>Author:</b> {course.author}</p>
      <p><b>Price:</b> ${course.price}</p>
      <button onClick={() => onEdit(course)} style={{ marginRight: 8 }}>Edit</button>
      <button onClick={() => onDelete(course._id)} style={{ color: 'red' }}>Delete</button>
    </div>
  );
}

function CourseForm({ onSubmit, initial, onCancel }) {
  const [title, setTitle] = useState(initial?.title || '');
  const [author, setAuthor] = useState(initial?.author || '');
  const [price, setPrice] = useState(initial?.price || '');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ title, author, price });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 24, background: '#f9f9f9', padding: 16, borderRadius: 8 }}>
      <h2>{initial ? 'Edit Course' : 'Add Course'}</h2>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required style={{ marginRight: 8 }} />
      <input placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} required style={{ marginRight: 8 }} />
      <input placeholder="Price" type="number" value={price} onChange={e => setPrice(e.target.value)} required style={{ marginRight: 8 }} />
      <button type="submit">{initial ? 'Update' : 'Add'}</button>
      {onCancel && <button type="button" onClick={onCancel} style={{ marginLeft: 8 }}>Cancel</button>}
    </form>
  );
}

export default function CourseManager() {
  const [courses, setCourses] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_URL);
      setCourses(res.data.courses || []);
    } catch (e) {
      alert('Failed to fetch courses');
    }
    setLoading(false);
  };

  useEffect(() => { fetchCourses(); }, []);

  const handleAdd = async (data) => {
    try {
      await axios.post(API_URL, data);
      fetchCourses();
    } catch (e) {
      alert('Failed to add course');
    }
  };

  const handleEdit = (course) => setEditing(course);

  const handleUpdate = async (data) => {
    try {
      await axios.put(`${API_URL}/${editing._id}`, data);
      setEditing(null);
      fetchCourses();
    } catch (e) {
      alert('Failed to update course');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this course?')) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchCourses();
    } catch (e) {
      alert('Failed to delete course');
    }
  };

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', fontFamily: 'sans-serif' }}>
      {editing ? (
        <CourseForm initial={editing} onSubmit={handleUpdate} onCancel={() => setEditing(null)} />
      ) : (
        <CourseForm onSubmit={handleAdd} />
      )}
      <h2>All Courses</h2>
      {loading ? <p>Loading...</p> : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {courses.map(course => (
            <CourseCard key={course._id} course={course} onEdit={handleEdit} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}
