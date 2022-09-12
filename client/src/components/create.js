import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    date: "",
    sleep_quality: 2,
    sleep_length: 8,
    dream: "",
  });
  //Gives access to navigation object, useful when you cannot pass the navigation prop into the component directly
  //or don't want to pass it into children
  const navigate = useNavigate();

  //Update state
  function updateForm(value) {
    return setForm((prevForm) => {
      return { ...prevForm, ...value };
    });
  }

  //Handles submit
  async function onSubmit(e) {
    e.preventDefault();

    //Adds data held in form to the database
    const newDream = { ...form };
    await fetch("http://localhost:3500/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDream),
    }).catch((err) => {
      window.alert(err);
      return;
    });

    //Resets form back to default after submission
    setForm({
      date: Date(),
      sleep_quality: 2,
      sleep_length: 8,
      dream: "",
    });
    navigate("/");
  }

  return (
    <div>
      <h1>Create new entry</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="date">Date</label>
        <input
          type="text"
          value={form.date}
          onChange={(e) => updateForm({ date: e.target.value })}
        />
        <label htmlFor="sleep_quality">Sleep Quality</label>
        <input
          type="number"
          min="1"
          max="4"
          value={form.sleep_quality}
          onChange={(e) => updateForm({ sleep_quality: e.target.value })}
        />
        <label htmlFor="sleep_length">Sleep Length</label>
        <input
          type="number"
          min="1"
          max="20"
          value={form.sleep_length}
          onChange={(e) => updateForm({ sleep_length: e.target.value })}
        />
        <label htmlFor="Dream">dream</label>
        <input
          type="text"
          value={form.dream}
          onChange={(e) => updateForm({ dream: e.target.value })}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
