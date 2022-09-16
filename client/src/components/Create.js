import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./Create.css";

export default function Create() {
  const [form, setForm] = useState({
    date: null,
    month_name: "",
    month_number: 0,
    day: "",
    sleep_quality: 2,
    sleep_length: 8,
    dream: "",
  });
  //Gives access to navigation object, useful when you cannot pass the navigation prop into the component directly
  //or don't want to pass it into children
  const navigate = useNavigate();

  //Update state
  function updateForm(value) {
    if ("date" in value) {
      var month_number = value["date"].slice(5, 7);
      var day = value["date"].slice(8, 11);
      var month_name = toMonthName(month_number);
      return setForm((prevForm) => {
        return {
          ...prevForm,
          date: value,
          month_name: month_name,
          month_number: month_number,
          day: day,
        };
      });
    }

    return setForm((prevForm) => {
      return { ...prevForm, ...value };
    });
  }

  //Helper function to convert month number to name
  function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", {
      month: "long",
    });
  }

  //Handles submit
  async function onSubmit(e) {
    e.preventDefault();
    //Adds data held in form to the database
    const newDream = { ...form };
    await fetch("https://jp-dream-journal.herokuapp.com/record/add", {
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
      month_name: "",
      month_number: 0,
      day: "",
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
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            required
            onChange={(e) => updateForm({ date: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="sleep_quality">Sleep Quality (x/4)</label>
          <input
            type="number"
            min="1"
            max="4"
            value={form.sleep_quality}
            onChange={(e) => updateForm({ sleep_quality: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="sleep_length">Sleep Length</label>
          <input
            type="number"
            min="1"
            max="20"
            value={form.sleep_length}
            onChange={(e) => updateForm({ sleep_length: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="Dream">dream</label>
          <input
            type="text"
            value={form.dream}
            onChange={(e) => updateForm({ dream: e.target.value })}
          />
        </div>
        <input type="submit" value="Submit" />
        <input type="submit" value="Cancel" formNoValidate />
      </form>
    </div>
  );
}
