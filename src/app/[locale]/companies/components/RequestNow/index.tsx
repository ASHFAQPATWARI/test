'use client';
import { Button, Modal } from 'antd';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

export default function RequestNow() {
  const t = useTranslations();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
        setShowConfirmation(true);
      }, 1000);
    }
  }, [loading]);

  return (
    <>
      <Button
        size="large"
        type="primary"
        loading={loading}
        className=" !px-6 !font-semibold"
        onClick={() => setLoading(true)}
      >
        {t('MyCompanies.requestNow')}
      </Button>
      <Modal
        centered
        closeIcon={false}
        open={showConfirmation}
        footer={null}
        onOk={() => setShowConfirmation(false)}
        onCancel={() => setShowConfirmation(false)}
        width={400}
      >
        <div className="flex flex-col items-center gap-6 p-4">
          <p className="text-center text-sm font-medium leading-8 text-primary">
            {t('MyCompanies.requestSentSuccess')}
          </p>
          <Button
            size="large"
            type="primary"
            className="!px-12 !font-semibold"
            onClick={() => setShowConfirmation(false)}
          >
            {t('Global.ok')}
          </Button>
        </div>
      </Modal>
    </>
  );
}
