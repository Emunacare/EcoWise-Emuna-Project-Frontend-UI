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

  const [textPopup, setTextPopup] = useState(false);

  function handleOpentextPopup() {
    setTextPopup(true);
  }

  function handleClosetextPopup() {
    setTextPopup(false);
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
      <div className="staff-head">
        <div className="staff-title">
          <div className="staff-title1">STAFF DETAILS</div>
          <div className="staff-title2-btn-grp">
            <button className="button-tag import">Import</button>
            <button className="button-tag export">Export</button>
            <button className="button-tag add" onClick={handleAddopenPopup}>
              Add
            </button>
          </div>
        </div>
        {/* {/*  */}
        <div className="staff-grid-container">
          <div className="grid-item">
            <div className="grid-item-data">
              <img src={user} />
            </div>
            <div className="grid-item-data1">
              <span className="grid-item-text">Name: Lakshita</span>
              <span className="grid-item-text">Gender: Female</span>
              <span className="grid-item-text">
                Address: Palace Regency kilpauk high road kellys chennai
              </span>
              <span className="grid-item-text">Status: Driver</span>
              <div className="grid-item-data2">
                <button className="grid-item-btn" onClick={handleOpenPopup}>
                  VIEW
                </button>
              </div>
            </div>
          </div>

          <div className="grid-item">
            <div className="grid-item-data">
              <img src={user} />
            </div>
            <div className="grid-item-data1">
              <span className="grid-item-text">Name: Subhangi </span>
              <span className="grid-item-text">Gender: Female </span>
              <span className="grid-item-text">
                Address: T Block, Celebrity building Anna nagar chennai
              </span>
              <span className="grid-item-text">Status: Supervisor</span>
              <div className="grid-item-data2">
                <button className="grid-item-btn" onClick={handleOpenPopup}>
                  VIEW
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-data">
              <img src={user} />
            </div>
            <div className="grid-item-data1">
              <span className="grid-item-text">Name: Sam </span>
              <span className="grid-item-text">Gender: Male </span>
              <span className="grid-item-text">
                Address: T Block, Celebrity building Anna nagar chennai
              </span>
              <span className="grid-item-text">Status: Supervisor</span>
              <div className="grid-item-data2">
                <button className="grid-item-btn" onClick={handleOpenPopup}>
                  VIEW
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-data">
              <img src={user} />
            </div>
            <div className="grid-item-data1">
              <span className="grid-item-text">Name: Sakshi </span>
              <span className="grid-item-text">Gender: Female </span>
              <span className="grid-item-text">
                Address: Shanti colony, W Block Anna nagar chennai
              </span>
              <span className="grid-item-text">Status: Driver</span>
              <div className="grid-item-data2">
                <button className="grid-item-btn" onClick={handleOpenPopup}>
                  VIEW
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-data">
              <img src={user} />
            </div>
            <div className="grid-item-data1">
              <span className="grid-item-text">Name: Keshav </span>
              <span className="grid-item-text">Gender: Male </span>
              <span className="grid-item-text">
                Address: 54, E.V.K. Sampath road vepery Periyamet chennai
              </span>
              <span className="grid-item-text">Status: Head-Supervisor</span>
              <div className="grid-item-data2">
                <button className="grid-item-btn" onClick={handleOpenPopup}>
                  VIEW
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-data">
              <img src={user} />
            </div>
            <div className="grid-item-data1">
              <span className="grid-item-text">Name: Keshav </span>
              <span className="grid-item-text">Gender: Male </span>
              <span className="grid-item-text">
                Address: 54, E.V.K. Sampath road vepery Periyamet chennai
              </span>
              <span className="grid-item-text">Status: Head-Supervisor</span>
              <div className="grid-item-data2">
                <button className="grid-item-btn" onClick={handleOpenPopup}>
                  VIEW
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-data">
              <img src={user} />
            </div>
            <div className="grid-item-data1">
              <span className="grid-item-text">Name: Keshav </span>
              <span className="grid-item-text">Gender: Male </span>
              <span className="grid-item-text">
                Address: 54, E.V.K. Sampath road vepery Periyamet chennai
              </span>
              <span className="grid-item-text">Status: Head-Supervisor</span>
              <div className="grid-item-data2">
                <button className="grid-item-btn" onClick={handleOpenPopup}>
                  VIEW
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-data">
              <img src={user} />
            </div>
            <div className="grid-item-data1">
              <span className="grid-item-text">Name: Keshav </span>
              <span className="grid-item-text">Gender: Male </span>
              <span className="grid-item-text">
                Address: 54, E.V.K. Sampath road vepery Periyamet chennai
              </span>
              <span className="grid-item-text">Status: Head-Supervisor</span>
              <div className="grid-item-data2">
                <button className="grid-item-btn" onClick={handleOpenPopup}>
                  VIEW
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-data">
              <img src={user} />
            </div>
            <div className="grid-item-data1">
              <span className="grid-item-text">Name: Keshav </span>
              <span className="grid-item-text">Gender: Male </span>
              <span className="grid-item-text">
                Address: 54, E.V.K. Sampath road vepery Periyamet chennai
              </span>
              <span className="grid-item-text">Status: Head-Supervisor</span>
              <div className="grid-item-data2">
                <button className="grid-item-btn" onClick={handleOpenPopup}>
                  VIEW
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-data">
              <img src={user} />
            </div>
            <div className="grid-item-data1">
              <span className="grid-item-text">Name: Keshav </span>
              <span className="grid-item-text">Gender: Male </span>
              <span className="grid-item-text">
                Address: 54, E.V.K. Sampath road vepery Periyamet chennai
              </span>
              <span className="grid-item-text">Status: Head-Supervisor</span>
              <div className="grid-item-data2">
                <button className="grid-item-btn" onClick={handleOpenPopup}>
                  VIEW
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-data">
              <img src={user} />
            </div>
            <div className="grid-item-data1">
              <span className="grid-item-text">Name: Keshav </span>
              <span className="grid-item-text">Gender: Male </span>
              <span className="grid-item-text">
                Address: 54, E.V.K. Sampath road vepery Periyamet chennai
              </span>
              <span className="grid-item-text">Status: Head-Supervisor</span>
              <div className="grid-item-data2">
                <button className="grid-item-btn" onClick={handleOpenPopup}>
                  VIEW
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-data">
              <img src={user} />
            </div>
            <div className="grid-item-data1">
              <span className="grid-item-text">Name: Keshav </span>
              <span className="grid-item-text">Gender: Male </span>
              <span className="grid-item-text">
                Address: 54, E.V.K. Sampath road vepery Periyamet chennai
              </span>
              <span className="grid-item-text">Status: Head-Supervisor</span>
              <div className="grid-item-data2">
                <button className="grid-item-btn" onClick={handleOpenPopup}>
                  VIEW
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-data">
              <img src={user} />
            </div>
            <div className="grid-item-data1">
              <span className="grid-item-text">Name: Keshav </span>
              <span className="grid-item-text">Gender: Male </span>
              <span className="grid-item-text">
                Address: 54, E.V.K. Sampath road vepery Periyamet chennai
              </span>
              <span className="grid-item-text">Status: Head-Supervisor</span>
              <div className="grid-item-data2">
                <button className="grid-item-btn" onClick={handleOpenPopup}>
                  VIEW
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="grid-item-data">
              <img src={user} />
            </div>
            <div className="grid-item-data1">
              <span className="grid-item-text">Name: Keshav </span>
              <span className="grid-item-text">Gender: Male </span>
              <span className="grid-item-text">
                Address: 54, E.V.K. Sampath road vepery Periyamet chennai
              </span>
              <span className="grid-item-text">Status: Head-Supervisor</span>
              <div className="grid-item-data2">
                <button className="grid-item-btn" onClick={handleOpenPopup}>
                  VIEW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`staff-popup ${openPopup && "show"}`}>
        <div className="grid-item-data3">
          <img src={user} />
          <span className="grid-item-text2">Name: Lakshita</span>
          <span className="grid-item-text2">Gender: Female</span>
          <span className="grid-item-text2">Date of birth: 03-02-1999</span>
          <span className="grid-item-text2">Contact number: 9878908778</span>
          <span className="grid-item-text2">Email: lakshita123@gmail.com</span>
          <span className="grid-item-text2">
            Address: Palace Regency kilpauk high road kellys chennai
          </span>
          <span className="grid-item-text2">Status: Driver</span>
          <button className="grid-item-btn" onClick={handleOpentextPopup}>
            EDIT
          </button>
          <button className="grid-item-btn" onClick={handleClosePopup}>
            CANCEL
          </button>
        </div>
      </div>
      <div className={`staff-popup ${textPopup && "show"}`}>
        <div className="grid-item-data4">
          <span className="grid-item1-text2">
            <input type="file" />
          </span>
          <span className="grid-item1-text2">
            Name :
            <input type="text" />
          </span>
          <span className="grid-item1-text2">
            Gender :
            <input type="text" />
          </span>
          <span className="grid-item1-text2">
            Date of Birth :
            <input type="number" />
          </span>
          <span className="grid-item1-text2">
            Contact Number :
            <input type="number" />
          </span>
          <span className="grid-item1-text2">
            Email :
            <input type="text" />
          </span>
          <span className="grid-item1-text2">
            Address :
            <input type="text" />
          </span>
          <span className="grid-item1-text2">
            Status :
            <input type="text" />
          </span>
          <button className="grid-item-btn" onClick={handleClosetextPopup}>
            CANCEL
          </button>
        </div>
      </div>
      <div className={`staff-popup ${addtextPopup && "show"}`}>
        <div className="grid-item-data4">
          <span className="grid-item1-text2">
            <input type="file" />
          </span>
          <span className="grid-item1-text2">
            Name :
            <input type="text" />
          </span>
          <span className="grid-item1-text2">
            Gender :
            <input type="text" />
          </span>
          <span className="grid-item1-text2">
            Date of Birth :
            <input type="number" />
          </span>
          <span className="grid-item1-text2">
            Contact Number :
            <input type="number" />
          </span>
          <span className="grid-item1-text2">
            Email :
            <input type="text" />
          </span>
          <span className="grid-item1-text2">
            Address :
            <input type="text" />
          </span>
          <span className="grid-item1-text2">
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
