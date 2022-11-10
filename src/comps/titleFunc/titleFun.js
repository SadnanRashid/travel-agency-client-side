import React, { useEffect, useState } from "react";

export default function ChangeTitle(string) {
  const [title, setTitle] = useState("");
  useEffect(() => {
    setTitle(`Explore Travel Services - ${string}`);
    document.title = title;
  }, [title]);
}
