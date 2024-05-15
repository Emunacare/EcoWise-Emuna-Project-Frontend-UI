import React, { useState } from "react";
import user from "../assets/react.svg";
import { FaBeer } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";

const Staff = () => {
  // const handlePopup = ()

  const [openPopup, setOpenPopup] = useState(false);

  function handleOpenPopup() {
    setOpenPopup(true);
  }

  function handleClosePopup() {
    setOpenPopup(false);
  }

  const [addtextPopup, setAddtextPopup] = useState(false);

  function handleAddopenPopup() {
    setAddtextPopup(true);
  }

  function handleAddclosePopup() {
    setAddtextPopup(false);
  }
  return (
    <>
      <div className="driver-head">
        <div className="driver-title">
          <div className="driver-title1">DUSTBIN DETAILS</div>
          <div className="driver-title2-btn-grp">
            <button className="button-tag import">Import</button>
            <button className="button-tag export">Export</button>
            <button className="button-tag add" onClick={handleAddopenPopup}>
              Add
            </button>
          </div>
        </div>
        <div className="driver-grid-container">
          <div className="grid-item3">
            <div className="grid-item3-data">
              <img src={user} />
            </div>
            <div className="grid-item3-data1">
              <span className="grid-item3-text">Dustbin Id: #101 </span>
              <span className="grid-item3-text">Location: Purusaiwalkam</span>
              <span className="grid-item3-text">Capacity: 250 kg</span>
              <span className="grid-item3-text">Fill Level: 40%</span>
              <span className="grid-item3-text">Status: fill</span>
              <div className="grid-item3-data1">
                <button className="grid-item3-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item3">
            <div className="grid-item3-data">
              <img src={user} />
            </div>
            <div className="grid-item3-data1">
              <span className="grid-item3-text">Dustbin Id: #102 </span>
              <span className="grid-item3-text">Location: Kilpauk</span>
              <span className="grid-item3-text">Capacity: 300 kg</span>
              <span className="grid-item3-text">Fill Level: 60%</span>
              <span className="grid-item3-text">Status: fill</span>
              <div className="grid-item3-data1">
                <button className="grid-item3-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item3">
            <div className="grid-item3-data">
              <img src={user} />
            </div>
            <div className="grid-item3-data1">
              <span className="grid-item3-text">Dustbin Id: #103 </span>
              <span className="grid-item3-text">Location: Kilpauk</span>
              <span className="grid-item3-text">Capacity: 300 kg</span>
              <span className="grid-item3-text">Fill Level: 0%</span>
              <span className="grid-item3-text">Status: empty</span>
              <div className="grid-item3-data1">
                <button className="grid-item3-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item3">
            <div className="grid-item3-data">
              <img src={user} />
            </div>
            <div className="grid-item3-data1">
              <span className="grid-item3-text">Dustbin Id: #104 </span>
              <span className="grid-item3-text">Location: Doveton </span>
              <span className="grid-item3-text">Capacity: 200 kg</span>
              <span className="grid-item3-text">Fill Level: 20%</span>
              <span className="grid-item3-text">Status: fill</span>
              <div className="grid-item3-data1">
                <button className="grid-item3-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item3">
            <div className="grid-item3-data">
              <img src={user} />
            </div>
            <div className="grid-item3-data1">
              <span className="grid-item3-text">Dustbin Id: #105 </span>
              <span className="grid-item3-text">Location: kellys</span>
              <span className="grid-item3-text">Capacity: 350 kg</span>
              <span className="grid-item3-text">Fill Level: 80%</span>
              <span className="grid-item3-text">Status: fill</span>
              <div className="grid-item3-data1">
                <button className="grid-item3-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item3">
            <div className="grid-item3-data">
              <img src={user} />
            </div>
            <div className="grid-item3-data1">
              <span className="grid-item3-text">Dustbin Id: #106</span>
              <span className="grid-item3-text">Location: Kilpauk</span>
              <span className="grid-item3-text">Capacity: 300 kg</span>
              <span className="grid-item3-text">Fill Level: 60%</span>
              <span className="grid-item3-text">Status: fill</span>
              <div className="grid-item3-data1">
                <button className="grid-item3-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item3">
            <div className="grid-item3-data">
              <img src={user} />
            </div>
            <div className="grid-item3-data1">
              <span className="grid-item3-text">Dustbin Id: #107</span>
              <span className="grid-item3-text">
                Location: Secretariat Colony
              </span>
              <span className="grid-item3-text">Capacity: 100 kg</span>
              <span className="grid-item3-text">Fill Level: 60%</span>
              <span className="grid-item3-text">Status: fill</span>
              <div className="grid-item3-data1">
                <button className="grid-item3-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item3">
            <div className="grid-item3-data">
              <img src={user} />
            </div>
            <div className="grid-item3-data1">
              <span className="grid-item3-text">Dustbin Id: #108</span>
              <span className="grid-item3-text">Location: Thana Street</span>
              <span className="grid-item3-text">Capacity: 400 kg</span>
              <span className="grid-item3-text">Fill Level: 45%</span>
              <span className="grid-item3-text">Status: fill</span>
              <div className="grid-item3-data1">
                <button className="grid-item3-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item3">
            <div className="grid-item3-data">
              <img src={user} />
            </div>
            <div className="grid-item3-data1">
              <span className="grid-item3-text">Dustbin Id: #109</span>
              <span className="grid-item3-text">Location: Choolai</span>
              <span className="grid-item3-text">Capacity: 300 kg</span>
              <span className="grid-item3-text">Fill Level: 0%</span>
              <span className="grid-item3-text">Status: empty</span>
              <div className="grid-item3-data1">
                <button className="grid-item3-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item3">
            <div className="grid-item3-data">
              <img src={user} />
            </div>
            <div className="grid-item3-data1">
              <span className="grid-item3-text">Dustbin Id: #110</span>
              <span className="grid-item3-text">Location: Kilpauk</span>
              <span className="grid-item3-text">Capacity: 450 kg</span>
              <span className="grid-item3-text">Fill Level: 66%</span>
              <span className="grid-item3-text">Status: fill</span>
              <div className="grid-item3-data1">
                <button className="grid-item3-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item3">
            <div className="grid-item3-data">
              <img src={user} />
            </div>
            <div className="grid-item3-data1">
              <span className="grid-item3-text">Dustbin Id: #111</span>
              <span className="grid-item3-text">Location: Sowcarpet</span>
              <span className="grid-item3-text">Capacity: 250 kg</span>
              <span className="grid-item3-text">Fill Level: 80%</span>
              <span className="grid-item3-text">Status: fill</span>
              <div className="grid-item3-data1">
                <button className="grid-item3-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`staff-popup ${openPopup && "show"}`}>
        <div className="grid-item-data4">
          <input type="file" />
          <span className="grid-item1-text1">
            Dustbin Id :
            <input type="text" />
          </span>
          <span className="grid-item1-text1">
            Location :
            <input type="text" />
          </span>
          <span className="grid-item1-text1">
            Capacity :
            <input type="text" />
          </span>
          <span className="grid-item1-text1">
            Fill Level :
            <input type="number" />
          </span>
          <span className="grid-item1-text1">
            Status :
            <input type="text" />
          </span>
          <button className="grid-item-btn" onClick={handleClosePopup}>
            CANCEL
          </button>
        </div>
      </div>
      <div className={`staff-popup ${addtextPopup && "show"}`}>
        <div className="grid-item-data4">
          <span className="grid-item1-text2">
            <input type="file" />
          </span>
          <span className="grid-item1-text1">
            Dustbin Id :
            <input type="text" />
          </span>
          <span className="grid-item1-text1">
            Location :
            <input type="text" />
          </span>
          <span className="grid-item1-text1">
            Capacity :
            <input type="text" />
          </span>
          <span className="grid-item1-text1">
            Fill Level :
            <input type="number" />
          </span>
          <span className="grid-item1-text1">
            Status :
            <input type="text" />
          </span>
          <button className="grid-item-btn" onClick={handleAddclosePopup}>
            CANCEL
          </button>
        </div>
      </div>
    </>
  );
};

export default Staff;
