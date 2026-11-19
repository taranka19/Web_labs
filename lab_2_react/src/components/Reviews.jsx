import { useState, useEffect } from 'react';

const VARIANT = 15;

export default function Reviews() {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.json();
      })
      .then(data => setComments(data))
      .catch(err => setError(err.message));
  }, []);

  if (error) {
    return <p>Не вдалося завантажити відгуки: {error}</p>;
  }

  return (
    <section className="mt-5 p-4 bg-white dark:bg-gray-800 rounded-lg border">
      <h2 className="text-2xl font-bold mb-3">Відгуки попередніх роботодавців</h2>
      {comments.length === 0 && <p>Завантаження...</p>}
      {comments.map(comment => (
        <div key={comment.id} className="border rounded-lg p-3 my-3">
          <h3 className="font-semibold">{comment.name}</h3>
          <small className="opacity-70">{comment.email}</small>
          <p className="mt-2">{comment.body}</p>
        </div>
      ))}
    </section>
  );
}