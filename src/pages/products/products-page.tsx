import { Modal } from '@/shared/ui/modal'

export const ProductsPage = () => {
  return (
    <div>
      <p>Открыть модалку</p>
      <Modal isOpen onClose={() => {}} >
        Привет
      </Modal>
    </div>
  );
};
