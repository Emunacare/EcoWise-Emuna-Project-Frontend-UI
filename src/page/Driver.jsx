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
          <div className="driver-title1">DRIVER DETAILS</div>
          <div className="driver-title2-btn-grp">
            <button className="button-tag import">Import</button>
            <button className="button-tag export">Export</button>
            <button className="button-tag add" onClick={handleAddopenPopup}>
              Add
            </button>
          </div>
        </div>
        {/* {/*  */}
        <div className="driver-grid-container">
          <div className="grid-item2">
            <div className="grid-item2-data">
              <img src={user} />
            </div>
            <div className="grid-item2-data1">
              <span className="grid-item2-text">Name: Lakshita</span>
              <span className="grid-item2-text">Driver Id: 101abc</span>
              <span className="grid-item2-text">
                Email: lakshita12@gmail.com
              </span>
              <span className="grid-item2-text">
                License Number: 0123897878231
              </span>
              <span className="grid-item2-text">
                Contact Number: +91 9878236739
              </span>
              <span className="grid-item2-text">Assigned Truck: TATA ACE</span>
              <div className="grid-item2-data2">
                <button className="grid-item2-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item2">
            <div className="grid-item2-data">
              <img src={user} />
            </div>
            <div className="grid-item2-data1">
              <span className="grid-item2-text">Name: Subhangi </span>
              <span className="grid-item2-text">Driver Id: 102abc </span>
              <span className="grid-item2-text">
                Email: subhangi1123@gmail.com
              </span>
              <span className="grid-item2-text">
                License Number: 1023457890312
              </span>
              <span className="grid-item2-text">
                Contact Number: +91 9878236739
              </span>
              <span className="grid-item2-text">
                Assigned Truck: ASHOK LEYLAND BADAPOST
              </span>
              <div className="grid-item2-data2">
                <button className="grid-item2-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item2">
            <div className="grid-item2-data">
              <img src={user} />
            </div>
            <div className="grid-item2-data1">
              <span className="grid-item2-text">Name: Sam </span>
              <span className="grid-item2-text">Driver Id: 103abc </span>
              <span className="grid-item2-text">
                Email: samramesh@gmail.com
              </span>
              <span className="grid-item2-text">License Number: </span>
              <span className="grid-item2-text">
                Contact Number: +91 9878236739
              </span>
              <span className="grid-item2-text">
                Assigned Truck: EICHER 14 FEET
              </span>
              <div className="grid-item2-data2">
                <button className="grid-item2-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item2">
            <div className="grid-item2-data">
              <img src={user} />
            </div>
            <div className="grid-item2-data1">
              <span className="grid-item2-text">Name: Sakshi </span>
              <span className="grid-item2-text">Driver Id: 104abc </span>
              <span className="grid-item2-text">
                Email: sakshi678@gmail.com
              </span>
              <span className="grid-item2-text">
                License Number: 1089785645342
              </span>
              <span className="grid-item2-text">
                Contact Number: +91 9878236739
              </span>
              <span className="grid-item2-text">
                Assigned Truck: MAHINDRA BOLERO PICKUP
              </span>
              <div className="grid-item2-data2">
                <button className="grid-item2-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item2">
            <div className="grid-item2-data">
              <img src={user} />
            </div>
            <div className="grid-item2-data1">
              <span className="grid-item2-text">Name: Keshav </span>
              <span className="grid-item2-text">Driver Id: 105abc </span>
              <span className="grid-item2-text">
                Email: keshavsaraf23@gmail.com
              </span>
              <span className="grid-item2-text">
                License Number: 2345678910981
              </span>
              <span className="grid-item2-text">
                Contact Number: +91 9878236739
              </span>
              <span className="grid-item2-text">Assigned Truck: TATA 407</span>
              <div className="grid-item2-data2">
                <button className="grid-item2-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item2">
            <div className="grid-item2-data">
              <img src={user} />
            </div>
            <div className="grid-item2-data1">
              <span className="grid-item2-text">Name: surya </span>
              <span className="grid-item2-text">Driver Id: 106abc </span>
              <span className="grid-item2-text">Email: saraf23@gmail.com</span>
              <span className="grid-item2-text">
                License Number: 1234567890298
              </span>
              <span className="grid-item2-text">
                Contact Number: +91 9878236739
              </span>
              <span className="grid-item2-text">Assigned Truck: TATA ACE</span>
              <div className="grid-item2-data2">
                <button className="grid-item2-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item2">
            <div className="grid-item2-data">
              <img src={user} />
            </div>
            <div className="grid-item2-data1">
              <span className="grid-item2-text">Name: krishna </span>
              <span className="grid-item2-text">Driver Id: 107abc </span>
              <span className="grid-item2-text">
                Email: krishna23@gmail.com
              </span>
              <span className="grid-item2-text">
                License Number: 3421567890789
              </span>
              <span className="grid-item2-text">
                Contact Number: +91 9878236739
              </span>
              <span className="grid-item2-text">
                Assigned Truck: TATA 22 FEET
              </span>
              <div className="grid-item2-data2">
                <button className="grid-item2-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item2">
            <div className="grid-item2-data">
              <img src={user} />
            </div>
            <div className="grid-item2-data1">
              <span className="grid-item2-text">Name: Kashish </span>
              <span className="grid-item2-text">Driver Id: 108abc</span>
              <span className="grid-item2-text">Email: kashish@gmail.com</span>
              <span className="grid-item2-text">
                License Number: 1009800786234
              </span>
              <span className="grid-item2-text">
                Contact Number: +91 9878236739
              </span>
              <span className="grid-item2-text">
                Assigned Truck: ASHOK LEYLAND DOST
              </span>
              <div className="grid-item2-data2">
                <button className="grid-item2-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item2">
            <div className="grid-item2-data">
              <img src={user} />
            </div>
            <div className="grid-item2-data1">
              <span className="grid-item2-text">Name: Komal</span>
              <span className="grid-item2-text">Driver Id: 109abc </span>
              <span className="grid-item2-text">
                Email: komalshah23@gmail.com
              </span>
              <span className="grid-item2-text">
                License Number: 1890078654712
              </span>
              <span className="grid-item2-text">
                Contact Number: +91 9878236739
              </span>
              <span className="grid-item2-text">Assigned Truck: TARUS 16T</span>
              <div className="grid-item2-data2">
                <button className="grid-item2-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item2">
            <div className="grid-item2-data">
              <img src={user} />
            </div>
            <div className="grid-item2-data1">
              <span className="grid-item2-text">Name: Arun </span>
              <span className="grid-item2-text">Driver Id: 110abc</span>
              <span className="grid-item2-text">
                Email: arunsarawagi@gmail.com
              </span>
              <span className="grid-item2-text">
                License Number: 2340098765431
              </span>
              <span className="grid-item2-text">
                Contact Number: +91 9878236739
              </span>
              <span className="grid-item2-text">Assigned Truck: TATA 407</span>
              <div className="grid-item2-data2">
                <button className="grid-item2-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item2">
            <div className="grid-item2-data">
              <img src={user} />
            </div>
            <div className="grid-item2-data1">
              <span className="grid-item2-text">Name: Keshav </span>
              <span className="grid-item2-text">Driver Id: 111abc </span>
              <span className="grid-item2-text">
                Email: keshavsaraf2334@gmail.com
              </span>
              <span className="grid-item2-text">
                License Number: 2456378190891
              </span>
              <span className="grid-item2-text">
                Contact Number: +91 9878236739
              </span>
              <span className="grid-item2-text">
                Assigned Truck: TARUS TRUCK
              </span>
              <div className="grid-item2-data2">
                <button className="grid-item2-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item2">
            <div className="grid-item2-data">
              <img src={user} />
            </div>
            <div className="grid-item2-data1">
              <span className="grid-item2-text">Name: Priya </span>
              <span className="grid-item2-text">Driver Id: 112abc</span>
              <span className="grid-item2-text">Email: priyah@gmail.com</span>
              <span className="grid-item2-text">
                License Number: 1230098789962
              </span>
              <span className="grid-item2-text">
                Contact Number: +91 9878236739
              </span>
              <span className="grid-item2-text">
                Assigned Truck: EICHER 17 FEET
              </span>
              <div className="grid-item2-data2">
                <button className="grid-item2-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item2">
            <div className="grid-item2-data">
              <img src={user} />
            </div>
            <div className="grid-item2-data1">
              <span className="grid-item2-text">Name: Madhumitha </span>
              <span className="grid-item2-text">Driver Id: 113abc </span>
              <span className="grid-item2-text">
                Email: madhumithak1702@gmail.com
              </span>
              <span className="grid-item2-text">
                License Number: 1236789007682
              </span>
              <span className="grid-item2-text">
                Contact Number: +91 9878236739
              </span>
              <span className="grid-item2-text">
                Assigned Truck: ASHOK LEYLAND BADAPOST
              </span>
              <div className="grid-item2-data2">
                <button className="grid-item2-btn" onClick={handleOpenPopup}>
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
            Name :
            <input type="text" />
          </span>
          <span className="grid-item1-text1">
            Driver Id :
            <input type="text" />
          </span>
          <span className="grid-item1-text1">
            Email :
            <input type="text" />
          </span>
          <span className="grid-item1-text1">
            License Number :
            <input type="number" />
          </span>
          <span className="grid-item1-text1">
            Contact Number :
            <input type="number" />
          </span>
          <span className="grid-item1-text1">
            Assigned Truck :
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
            Name :
            <input type="text" />
          </span>
          <span className="grid-item1-text1">
            Driver Id :
            <input type="text" />
          </span>
          <span className="grid-item1-text1">
            Email :
            <input type="text" />
          </span>
          <span className="grid-item1-text1">
            License Number :
            <input type="number" />
          </span>
          <span className="grid-item1-text1">
            Contact Number :
            <input type="number" />
          </span>
          <span className="grid-item1-text1">
            Assigned Truck :
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
