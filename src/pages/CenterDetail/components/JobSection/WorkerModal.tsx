import Button from 'common/Button';
import styled from 'styled-components';
import Modal from 'react-modal';

interface WorkerModalProps {
  isModalOpen: boolean;
  onRequestClose(): void;
}

function WorkerModal({isModalOpen, onRequestClose}: WorkerModalProps) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
      style={{overlay: overlayStyle, content: contentStyle}}>
      <ModalWrapper>
        <ButtonWrapper>
          <WokrerButton>worker1 x</WokrerButton>
        </ButtonWrapper>
        <WorkerList>
          <WorkerItem>worker 1</WorkerItem>
          <WorkerItem>worker 2</WorkerItem>
          <WorkerItem>worker 3</WorkerItem>
        </WorkerList>
        <Button style={ButtonStyle}>할당하기</Button>
      </ModalWrapper>
    </Modal>
  );
}

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ButtonWrapper = styled.div``;

const WokrerButton = styled.button``;

const WorkerList = styled.ul``;

const WorkerItem = styled.li``;

const ButtonStyle = {
  marginTop: 'auto',
};

const overlayStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
};

const contentStyle = {
  width: '50%',
  height: '80%',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
};

export default WorkerModal;
