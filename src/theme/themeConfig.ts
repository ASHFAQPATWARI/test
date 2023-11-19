import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontFamily: 'var(--font-primary), var(--font-secondary)',
  },
  components: {
    Slider: {
      dotActiveBorderColor: 'var(--secondary-500)',
      dotBorderColor: 'var(--secondary-500)',
      handleColor: 'var(--secondary-500)',
      handleActiveColor: 'var(--secondary-500)',
      trackBg: 'var(--secondary-500)',
      trackHoverBg: 'var(--secondary-500)',
    },
    Button: {
      controlHeight: 36,
      controlHeightLG: 44,
      borderRadius: 9999,
      borderRadiusLG: 9999,
      primaryShadow: 'none',
      colorPrimary: 'var(--secondary-500)',
      colorPrimaryHover: 'var(--secondary-700)',
      colorPrimaryActive: 'var(--secondary-900)',
    },
    Input: {
      colorBorder: 'var(--neutral-300)',
      activeBorderColor: 'var(--primary-400)',
      hoverBorderColor: 'var(--primary-400)',
      activeShadow: '0px 0px 0px 3px rgba(120, 138, 173, 0.27)',
      controlHeight: 36,
      controlHeightLG: 44,
    },
    InputNumber: {
      colorBorder: 'var(--neutral-300)',
      activeBorderColor: 'var(--primary-400)',
      hoverBorderColor: 'var(--primary-400)',
      activeShadow: '0px 0px 0px 3px rgba(120, 138, 173, 0.27)',
      controlHeight: 36,
      controlHeightLG: 44,
    },
    Form: {
      verticalLabelPadding: '0 0 4px',
    },
  },
};

export default theme;
