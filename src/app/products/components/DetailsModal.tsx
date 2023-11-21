import '../../../assets/styles/main.scss';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Card } from 'antd';
import Loader from '../../../ui/loader/Loader';

const { Meta } = Card;

type DetailsModalProps = {
  image: string;
  description: string;
  name: string;
  active: boolean;
};

const DetailsModal = (props: DetailsModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const showModal = () => {
    setLoading(true);
    setIsModalOpen(true);
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
          height: '38px',
          background: props.active ? '#4460F7' : '#9194A5',
        }}
      >
        {props.active ? 'Show details' : 'Unavailable'}
      </Button>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={null} destroyOnClose={true}>
        <Card
          hoverable
          cover={
            <>
              <div style={{ height: '400px', display: loading ? 'block' : 'none' }}>
                <Loader />
              </div>
              <img
                alt="modal-image"
                src={props.image}
                onLoad={() => {
                  setLoading(false);
                }}
                style={{ display: loading ? 'none' : 'block' }}
              />
            </>
          }
        >
          <Meta title={props.name} description={props.description} />
        </Card>
      </Modal>
    </>
  );
};

export default DetailsModal;
