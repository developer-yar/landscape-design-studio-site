import PropTypes from "prop-types";
import { Text } from "./text.jsx";

export const NotesList = ({ notes }) => {
  const text = [];

  notes?.map((note) =>
    text.push({
      id: note.id,
      text: note.text,
    })
  );

  return <Text text={text} />;
};

NotesList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};
