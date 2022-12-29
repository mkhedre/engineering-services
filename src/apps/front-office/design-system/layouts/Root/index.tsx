import { createEmotionCache, Global, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { current } from '@mongez/react';
import { BasicComponentProps } from '@mongez/react-router';
import { ToastContainer } from 'react-toastify';
import rtlPlugin from 'stylis-plugin-rtl';
import theme from '../../theme';

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [rtlPlugin],
});

export default function Root({ children }: BasicComponentProps) {
  return (
    <MantineProvider
      // emotionCache={rtlCache}
      theme={{
        // dir: current('localeCode') === 'ar' ? 'rtl' : 'ltr',
        components: {
          InputWrapper: {
            defaultProps: {
              inputWrapperOrder: ['label', 'error', 'input', 'description'],
            },
          },
          Input: {
            styles: {
              input: {
                '&:focus-within': {
                  borderColor: theme.colors.PRIMARY.main,
                },
              },
            },
            defaultProps: {
              variant: 'filled',
            },
          },
        },
      }}
    >
      <ModalsProvider>
        <ToastContainer
          position={current('localeCode') === 'ar' ? 'top-left' : 'top-right'}
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={current('localeCode') === 'ar' ? true : false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Global
          styles={(theme) => ({
            '*, *::before, *::after': {
              boxSizing: 'border-box',
              padding: '0',
              margin: '0',
            },
            html: {
              position: 'relative',
              minHeight: '100%',
            },
            body: {
              background: '#F9FAFB',
              fontFamily: 'Neo Sans W23',
              direction: current('localeCode') === 'ar' ? 'rtl' : 'ltr',
            },
          })}
        />
        {children}
      </ModalsProvider>
    </MantineProvider>
  );
}
