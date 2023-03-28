import React, { useState } from "react";

type RequestData = {
  user_id: number | "";
  book_id: number | "";
  sentence: string;
  page_number: number | "";
  source_quote_id: number | "";
};

const initialState: RequestData = {
  user_id: "",
  book_id: "",
  sentence: "",
  page_number: "",
  source_quote_id: "",
};

const QuotePost: React.FC = () => {
  const [formData, setFormData] = useState<RequestData>(initialState);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // 更新後に上書きする場合は、空文字を使う必要がある（nullやundefinedは上書きされない）
    setFormData(initialState);

    // const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const csrfToken = document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute("content");

    if (!formData) {
      throw new Error("formData is empty");
    }

    const response = await fetch("/quotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken || "",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      console.log("Contact form submitted successfully!");
      // Do something after successful submission
    } else {
      console.error("Failed to submit contact form.");
      // Handle submission error
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    // ここのinput type="number"で数値型が送信されるようにしている
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user_id">User ID:</label>
        <input
          type="number"
          id="user_id"
          name="user_id"
          value={formData.user_id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="book_id">Book ID:</label>
        <input
          type="number"
          id="book_id"
          name="book_id"
          value={formData.book_id}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="sentence">Sentence:</label>
        <textarea
          id="sentence"
          name="sentence"
          value={formData.sentence}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="page_number">Page Number:</label>
        <input
          type="number"
          id="page_number"
          name="page_number"
          value={formData.page_number}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="source_quote_id">Source Quote ID:</label>
        <input
          type="number"
          id="source_quote_id"
          name="source_quote_id"
          value={formData.source_quote_id}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default QuotePost;
