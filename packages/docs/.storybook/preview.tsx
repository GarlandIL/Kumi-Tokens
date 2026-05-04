import React, { useEffect } from 'react';
import type { Preview } from '@storybook/react';
import '@kumiui/tokens/dist/css/variables.css';
import '@kumiui/tokens/dist/css/dark.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // Run all WCAG 2.1 AA rules
      config: { rules: [] },
      options: {
        runOnly: { type: 'tag', values: ['wcag21a', 'wcag21aa'] },
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      useEffect(() => {
        document.documentElement.setAttribute('data-theme', context.globals.theme);
      }, [context.globals.theme]);

      // Return the Story component
      return <Story />;
    },
  ],
};

export default preview;