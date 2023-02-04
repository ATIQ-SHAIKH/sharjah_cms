/*
 *
 * HomePage
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import { EmptyStateLayout } from "@strapi/design-system";
import { Button } from "@strapi/design-system";
import { Box } from "@strapi/design-system";
import { Layout } from "@strapi/design-system";
import { BaseHeaderLayout } from "@strapi/design-system";
import { ContentLayout } from "@strapi/design-system";
import Plus from "@strapi/icons/Plus";
import SurveyFormModal from "../../components/SurveyFormModal";
import {
  Stack,
  Field,
  FieldLabel,
  FieldHint,
  FieldError,
  FieldInput,
  FieldAction,
} from "@strapi/design-system";

const HomePage = () => {
  const [surveyForms, setSurveyForms] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);

  async function addSurveyForm(data) {
    setTodoData([...surveyForms, { ...data, id: nanoid(), isDone: false }]);
  }

  return (
    <Layout>
      <BaseHeaderLayout
        title="Survey Forms"
        subtitle="Add Internal/External Survey Forms."
        as="h2"
      />
      <ContentLayout>
        {surveyForms.length === 0 ? (
          <EmptyStateLayout
            content="No existing Internal/External survey forms added!"
            action={
              <Button
                onClick={() => setShowModal(true)}
                variant="secondary"
                startIcon={<Plus />}
              >
                Create Internal/External Survey Form
              </Button>
            }
          />
        ) : (
          <p>Not Empty</p>
        )}
      </ContentLayout>
      {showModal && (
        <SurveyFormModal
          setShowModal={setShowModal}
          addSurveyForm={addSurveyForm}
        />
      )}
    </Layout>
  );
};

const AddSurveyForm = () => {
  return (
    <Box padding={8} background="neutral100">
      <Field name="password" error="Password is too short">
        <Stack spacing={1}>
          <FieldLabel>Password</FieldLabel>
          <FieldInput
            type="password"
            placeholder="Placeholder"
            value=""
            onChange={() => {}}
          />
          <FieldHint />
          <FieldError />
        </Stack>
      </Field>
    </Box>
  );
};

export default HomePage;
