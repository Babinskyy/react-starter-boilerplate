import '../../assets/styles/main.scss';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Card } from 'antd';

const { Meta } = Card;

const DetailsModal = (props: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        disabled={!props.active}
        style={{
          color: '#fff',
          marginBottom: '10px',
          width: '100%',
          background: props.active ? '#4460F7' : '#9194A5',
        }}
      >
        {props.active ? 'Show details' : 'Unavailable'}
      </Button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} style={{ padding: 'none' }} footer={null}>
        <Card hoverable cover={<img alt="example" src={props.image} />}>
          <Meta title={props.name} description={props.description} />
        </Card>
      </Modal>
    </>
  );
};

export default DetailsModal;
