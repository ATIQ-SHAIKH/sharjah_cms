import React, { useState } from "react";

import {
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Typography,
  Button,
  TextInput,
} from "@strapi/design-system";
import { ToggleCheckbox } from "@strapi/design-system";

export default function SurveyFormModal({ setShowModal, addSurveyForm }) {
  const [surveyFormName, setSurveyFormName] = React.useState("");
  const [fields, setFields] = useState([{ id: 1, value: "" }]);

  const addField = () => {
    setFields([...fields, { id: fields.length + 1, value: "" }]);
  };
  const [checked, setChecked] = useState(null);

  const handleSubmit = async (e) => {
    // Prevent submitting parent form
    e.preventDefault();
    e.stopPropagation();

    try {
      await addSurveyForm({ name: surveyFormName });
      setShowModal(false);
    } catch (e) {
      console.log("error", e);
    }
  };

  const getError = () => {
    // Form validation error

    if (surveyFormName.length > 40) {
      return "Content is too long";
    }

    return null;
  };

  return (
    <ModalLayout
      onClose={() => setShowModal(false)}
      labelledBy="title"
      as="form"
      onSubmit={handleSubmit}
    >
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Add Internal/External Survey Form
        </Typography>
      </ModalHeader>

      <ModalBody>
        <ToggleCheckbox
          onLabel="Internal"
          offLabel="External"
          checked={checked}
          onChange={() => setChecked((prev) => !prev)}
        >
          The field is required?
        </ToggleCheckbox>
        <TextInput
          placeholder="Add Survey From Name"
          label="Name"
          name="text"
          hint="Max 40 characters"
          error={getError()}
          onChange={(e) => setSurveyFormName(e.target.value)}
          value={surveyFormName}
        />
        <Button onclick={addField}>Add question</Button>
      </ModalBody>

      <ModalFooter
        startActions={
          <Button onClick={() => setShowModal(false)} variant="tertiary">
            Cancel
          </Button>
        }
        endActions={<Button type="submit">Save</Button>}
      />
    </ModalLayout>
  );
}
