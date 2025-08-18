"use client";

import { useNote, type NoteRow } from "./NoteProvider";

export default function NoteList() {
  const { notes, setCurrentNote } = useNote();

  const updateSelectedNote = (note: NoteRow) => {
    setCurrentNote(note);
  }

  return (
    <ul>
      {notes.map((n) => (
        <li
          key={n.id}
          onClick={() => updateSelectedNote(n)}
          className="li-gray"
        >
          {n.title}
        </li>
      ))}
    </ul>
  );
}