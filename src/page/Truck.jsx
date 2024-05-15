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
      <div className="truck-head">
        <div className="truck-title">
          <div className="truck-title1">TRUCK DETAILS</div>
          <div className="truck-title2-btn-grp">
            <button className="button-tag import">Import</button>
            <button className="button-tag export">Export</button>
            <button className="button-tag add" onClick={handleAddopenPopup}>
              Add
            </button>
          </div>
        </div>
        {/* {/*  */}
        <div className="truck-grid-container">
          <div className="grid-item1">
            <div className="grid-item1-data">
              <img src={user} />
            </div>
            <div className="grid-item1-data1">
              <span className="grid-item1-text">
                Truck Id: 2ABHGNJK3ER234989
              </span>
              <span className="grid-item1-text">License Plate: TN01AP1874</span>
              <span className="grid-item1-text">Model: TATA ACE</span>
              <span className="grid-item1-text">Year: 2024 </span>
              <span className="grid-item1-text">Capacity: 1 TON</span>
              <div className="grid-item1-data2">
                <button className="grid-item1-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>

          <div className="grid-item1">
            <div className="grid-item1-data">
              <img src={user} />
            </div>
            <div className="grid-item1-data1">
              <span className="grid-item1-text">
                Truck Id: 1ADFRGHTE2JI378688
              </span>
              <span className="grid-item1-text">
                License Plate: TN01AS2909{" "}
              </span>
              <span className="grid-item1-text">
                Model: ASHOK LEYLAND BADADOST
              </span>
              <span className="grid-item1-text">Year: 2023</span>
              <span className="grid-item1-text">Capacity: 2 TON</span>
              <div className="grid-item1-data2">
                <button className="grid-item1-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item1">
            <div className="grid-item1-data">
              <img src={user} />
            </div>
            <div className="grid-item1-data1">
              <span className="grid-item1-text">
                Truck Id: 9adhuijn2ni789065
              </span>
              <span className="grid-item1-text">
                License Plate: AP09BD2897{" "}
              </span>
              <span className="grid-item1-text">Model: EICHER 14 FEET</span>
              <span className="grid-item1-text">Year: 2022</span>
              <span className="grid-item1-text">Capacity: 4 TON</span>
              <div className="grid-item1-data2">
                <button className="grid-item1-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item1">
            <div className="grid-item1-data">
              <img src={user} />
            </div>
            <div className="grid-item1-data1">
              <span className="grid-item1-text">
                Truck Id: 2ADCERFW1WD234890
              </span>
              <span className="grid-item1-text">License Plate: MB23S6789</span>
              <span className="grid-item1-text">
                Model: MAHINDRA BOLERO PICKUP
              </span>
              <span className="grid-item1-text">Year: 2019</span>
              <span className="grid-item1-text">Capacity: 1.5 TON</span>
              <div className="grid-item1-data2">
                <button className="grid-item1-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item1">
            <div className="grid-item1-data">
              <img src={user} />
            </div>
            <div className="grid-item1-data1">
              <span className="grid-item1-text">
                Truck Id: 3MNVKJIE3CD789065
              </span>
              <span className="grid-item1-text">
                License Plate: MH02VD2656{" "}
              </span>
              <span className="grid-item1-text">Model: TATA 407</span>
              <span className="grid-item1-text">Year: 2008</span>
              <span className="grid-item1-text">Capacity: 2.5 TON</span>
              <div className="grid-item1-data2">
                <button className="grid-item1-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item1">
            <div className="grid-item1-data">
              <img src={user} />
            </div>
            <div className="grid-item1-data1">
              <span className="grid-item1-text">
                Truck Id: 4NMHJUIK2DE789564
              </span>
              <span className="grid-item1-text">License Plate: 27CD1090 </span>
              <span className="grid-item1-text">Model: TATA ACE</span>
              <span className="grid-item1-text">Year: EICHER 17 FEET</span>
              <span className="grid-item1-text">Capacity: 2 TON</span>
              <div className="grid-item1-data2">
                <button className="grid-item1-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item1">
            <div className="grid-item1-data">
              <img src={user} />
            </div>
            <div className="grid-item1-data1">
              <span className="grid-item1-text">
                Truck Id: 7ADERFTG9VG234567
              </span>
              <span className="grid-item1-text">License Plate: HP62B1110 </span>
              <span className="grid-item1-text">Model: TATA 22 FEET</span>
              <span className="grid-item1-text">Year: 2014</span>
              <span className="grid-item1-text">Capacity: 1.5 TON</span>
              <div className="grid-item1-data2">
                <button className="grid-item1-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item1">
            <div className="grid-item1-data">
              <img src={user} />
            </div>
            <div className="grid-item1-data1">
              <span className="grid-item1-text">
                Truck Id: 1SDERFGTL2OK25631
              </span>
              <span className="grid-item1-text">
                License Plate: RJ36SP7636{" "}
              </span>
              <span className="grid-item1-text">Model: ASHOK LEYLAND DOST</span>
              <span className="grid-item1-text">Year: 2016</span>
              <span className="grid-item1-text">Capacity: 2 TON</span>
              <div className="grid-item1-data2">
                <button className="grid-item1-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item1">
            <div className="grid-item1-data">
              <img src={user} />
            </div>
            <div className="grid-item1-data1">
              <span className="grid-item1-text">
                Truck Id: 4ASDFERW4CF342568
              </span>
              <span className="grid-item1-text">License Plate: KA35R4646 </span>
              <span className="grid-item1-text">Model: TARUS 16T</span>
              <span className="grid-item1-text">Year: 2014</span>
              <span className="grid-item1-text">Capacity: 1 TON</span>
              <div className="grid-item1-data2">
                <button className="grid-item1-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item1">
            <div className="grid-item1-data">
              <img src={user} />
            </div>
            <div className="grid-item1-data1">
              <span className="grid-item1-text">
                Truck Id: 4ASDERFN3ED789067
              </span>
              <span className="grid-item1-text">License Plate: GA03R3712 </span>
              <span className="grid-item1-text">Model: TATA 407</span>
              <span className="grid-item1-text">Year: 2024</span>
              <span className="grid-item1-text">Capacity: 2 TON</span>
              <div className="grid-item1-data2">
                <button className="grid-item1-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item1">
            <div className="grid-item1-data">
              <img src={user} />
            </div>
            <div className="grid-item1-data1">
              <span className="grid-item1-text">
                Truck Id: 8ASEDRFT4HJ890345
              </span>
              <span className="grid-item1-text">License Plate: KL48L7987 </span>
              <span className="grid-item1-text">Model: TARUS TRUCK</span>
              <span className="grid-item1-text">Year: 2023</span>
              <span className="grid-item1-text">Capacity: 7 TON</span>
              <div className="grid-item1-data2">
                <button className="grid-item1-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item1">
            <div className="grid-item1-data">
              <img src={user} />
            </div>
            <div className="grid-item1-data1">
              <span className="grid-item1-text">
                Truck Id: 8ASDFERF8VF890239
              </span>
              <span className="grid-item1-text">
                License Plate: GJ03FP0009{" "}
              </span>
              <span className="grid-item1-text">
                Model: ASHOK LEYLAND BADAPOST
              </span>
              <span className="grid-item1-text">Year: 2019</span>
              <span className="grid-item1-text">Capacity: 4 TON</span>
              <div className="grid-item1-data2">
                <button className="grid-item1-btn" onClick={handleOpenPopup}>
                  EDIT
                </button>
              </div>
            </div>
          </div>
          <div className="grid-item1">
            <div className="grid-item1-data">
              <img src={user} />
            </div>
            <div className="grid-item1-data1">
              <span className="grid-item1-text">
                Truck Id: 8DVBGHNJ1WS789679
              </span>
              <span className="grid-item1-text">
                License Plate: UP14DV8988{" "}
              </span>
              <span className="grid-item1-text">Model: EICHER 17 FEET</span>
              <span className="grid-item1-text">Year: 2018</span>
              <span className="grid-item1-text">Capacity: 3 TON</span>
              <div className="grid-item1-data2">
                <button className="grid-item1-btn" onClick={handleOpenPopup}>
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
            Truck Id :
            <input type="text" />
          </span>
          <span className="grid-item1-text1">
            License Plate :
            <input type=" text" />
          </span>
          <span className="grid-item1-text1">
            Model :
            <input type="text" />
          </span>
          <span className="grid-item1-text1">
            Year :
            <input type="number" />
          </span>
          <span className="grid-item1-text1">
            Capacity :
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
            Truck Id :
            <input type="text" />
          </span>
          <span className="grid-item1-text1">
            License Plate :
            <input type=" text" />
          </span>
          <span className="grid-item1-text1">
            Model :
            <input type="text" />
          </span>
          <span className="grid-item1-text1">
            Year :
            <input type="number" />
          </span>
          <span className="grid-item1-text1">
            Capacity :
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
