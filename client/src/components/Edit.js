import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    date: { date: Date() },
    month_name: "",
    month_number: 0,
    day: "",
    sleep_quality: 2,
    sleep_length: 8,
    dream: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchData() {
      const id = params.id.toString();
      const response = await fetch(
        `http://localhost:3500/record/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }
      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

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
    const editDream = { ...form };
    await fetch(`http://localhost:3500/update/${params.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editDream),
    }).catch((err) => {
      window.alert(err);
      return;
    });

    navigate("/");
  }
  return (
    <div>
      <h1>Update Dream</h1>

      <form onSubmit={onSubmit}>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          value={form.date.date}
          required
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
        <input type="submit" value="Cancel" formNoValidate />
      </form>
    </div>
  );
}
