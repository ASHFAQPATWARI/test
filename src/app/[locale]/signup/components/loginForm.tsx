'use client';

import { Button, Divider, Form, Input } from 'antd';
import { useTranslations } from 'next-intl';

type FieldType = {
  email?: string;
  password?: string;
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
  },
};

function LoginForm() {
  const t = useTranslations();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <Button
        block
        className="border !border-primary-500 !text-primary-500"
      >
        {t('Signup.continueWithGoogle')}
      </Button>
      <Divider className="!my-12" plain>
        {t('Signup.or')}
      </Divider>
      <p className="mb-6 text-xl font-bold text-primary">{t('Global.login')}</p>
      <Form
        name="login"
        layout="vertical"
        onFinish={onFinish}
        validateMessages={validateMessages}
        scrollToFirstError
      >
        <Form.Item<FieldType>
          label={t('Global.email')}
          name="email"
          hasFeedback
          rules={[
            {
              type: 'email',
            },
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          label={t('Global.password')}
          rules={[
            {
              required: true,
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button
            block
            className="mt-3 rounded-full"
            type="primary"
            htmlType="submit"
          >
            {t('Global.onlylogin')}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}

export default LoginForm;
