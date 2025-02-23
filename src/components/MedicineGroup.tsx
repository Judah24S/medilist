import { useState } from "react";
import { Medicine } from "../types/Medicine";
import '../styles/MedicineGroup.css';



interface Props {
  medicines: Medicine[];
  patient: string;
  onSelectItem: (item: Medicine) => void;
}

function MedicineGroup({medicines, patient,onSelectItem}: Props){

    const [selectedMedicine,setSelectedMedicine] = useState<Medicine | null>(null);

    const handleShow = (medicine : Medicine) => {
        setSelectedMedicine(medicine);
      };
    
      const handleClose = () => {
        setSelectedMedicine(null);
      };

      return (
        <div className="container mt-4 px-4">
          <div className="row justify-content-center">
            <div className="col-12">
              <h1>{patient}'s Medicines</h1>
    
              {/* Apply blur effect to the background when modal is open */}
              <div className={selectedMedicine ? 'medicine-list blurred' : 'medicine-list'}>
                <ul className="list-group">
                  {medicines.map((medicine) => (
                    <li
                      key={medicine.name} // Use unique key, ideally something unique like an ID
                      className={`list-group-item d-flex justify-content-between align-items-center`}
                      onClick={() => handleShow(medicine)} // Open modal when clicked
                    >
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="m-3">{medicine.name}</h5>
                        <h5 className="m-3">{medicine.dosage}</h5>
                        <h5 className="m-3">{medicine.timesToTake}</h5>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
    
              {/* Modal to show more details */}
              {selectedMedicine && (
                <div className="modal-backdrop fade show">
                  <div
                    className="modal fade show"
                    style={{ display: 'block' }}
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            {selectedMedicine.name} Details
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={handleClose}
                          ></button>
                        </div>
                        <div className="modal-body">
                          <p><strong>Dosage:</strong> {selectedMedicine.dosage}</p>
                          <p><strong>Details:</strong> {selectedMedicine.prescribingDoctor}</p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={handleClose}
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      );
}
/*
const MedicineGroup : React.FC<Props> = ({medicines}) => {
    return(
        <div>
            <ul className="list-group">
                {medicines.map((medicine, index) => (
                    <li key={index} className="list-group-item"></li>
                    {medicine} - {}
                ))}
            </ul>
        </div>
    )
}

*/
export default MedicineGroup;
