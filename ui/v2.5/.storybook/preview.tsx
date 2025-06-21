import { ApolloProvider } from "@apollo/client";
import { createMockClient, createMockSubscription } from "mock-apollo-client";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import type { Preview } from "@storybook/react-vite";
import { JobsSubscribeDocument } from "../src/core/generated-graphql";
import React from "react";

import "../src/index.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  tags: ["autodocs"],
};

const mockClient = createMockClient();
const mockSubscription = createMockSubscription();
mockClient.setRequestHandler(JobsSubscribeDocument, () => mockSubscription);

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <ApolloProvider client={mockClient}>
        <IntlProvider locale="en-GB">
          <Story />
        </IntlProvider>
      </ApolloProvider>
    </BrowserRouter>
  ),
];

export default preview;
