import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

//       <Modal.Open opens="table">
//         <Button>Show table</Button>
//       </Modal.Open>
//       <Modal.Window name="table">
//         <CabinTable />
//       </Modal.Window>

// function AddCabin() {
//   const [isOpenModal, setIsOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIsOpenModal((open) => !open)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose={() => setIsOpenModal((open) => !open)}>
//           <CreateCabinForm
//             onCloseModal={() => setIsOpenModal((open) => !open)}
//           />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
