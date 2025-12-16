import { useEffect, useState } from "react";
import { getParentStudents } from "../utils/api";

export default function ParentDashboard() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getParentStudents(token).then((data) => {
        setStudents(data);
      });
    }
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>My Children</h2>

      {students.length === 0 && (
        <p>No students linked. Contact academy.</p>
      )}

      {students.map((s) => (
        <div key={s._id}>
          {s.name} — Batch: {s.batch}
        </div>
      ))}
    </div>
  );
}
