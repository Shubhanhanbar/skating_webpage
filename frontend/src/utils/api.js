const API_URL = "http://localhost:5000/api";

export const parentLogin = async (phone) => {
  const res = await fetch(`${API_URL}/parent/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone })
  });
  return res.json();
};

export const staffLogin = async (email, password) => {
  const res = await fetch(`${API_URL}/staff/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  return res.json();
};

export const getParentStudents = async (token) => {
  const res = await fetch(`${API_URL}/parent/students`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.json();
};
