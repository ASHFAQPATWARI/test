'use client';

import { Button, Form, Input, InputNumber } from 'antd';
import { useTranslations } from 'next-intl';

type FieldType = {
  username?: string;
  qid?: number;
  mobile?: number;
  email?: string;
  password?: string;
  confirm?: string;
};

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
};

function SignupForm() {
  const t = useTranslations();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="register"
      layout="vertical"
      onFinish={onFinish}
      validateMessages={validateMessages}
      scrollToFirstError
    >
      <Form.Item<FieldType>
        label={t('Global.username')}
        name="username"
        rules={[{ required: true, message: t('Validations.required', {label: t('Global.username')}) }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={t('Global.qid')}
        name="qid"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        name="mobile"
        label={t('Global.mobileNumber')}
        rules={[{ required: true }]}
      >
        <InputNumber addonBefore="+974" maxLength={8} className="w-full" />
      </Form.Item>

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

      <Form.Item<FieldType>
        name="confirm"
        label={t('Global.confirmPassword')}
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Passwords do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button
          block
          className="mt-3 rounded-full !bg-yellow hover:!bg-yellow-dark"
          type="primary"
          htmlType="submit"
        >
          {t('Signup.createAnAccount')}
        </Button>
      </Form.Item>
    </Form>
  );
}

export default SignupForm;
