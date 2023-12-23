import React, { Fragment } from "react";

const Citizen = () => {
  const handleChange = (e) => {};
  return (
    <Fragment>
      <div className="body bg-slate-400 w-full">
        <div className="main-container w-[80vw] m-auto bg-slate-300 pt-10 pb-10">
          <div className="top-container flex justify-evenly w-full b-2 border-black">
            <div className="images mr-[5vw]">
              <img
                width={`150vw`}
                height={"150vw"}
                src="https://imgs.search.brave.com/WXt5LhLOsZN3mjDRiULiiyZw0CndTze3QLWbxjMnyYk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL04vbmVwYWxf/Y29hdF9vZl9hcm0t/bG9nby03NTRCQzFG/Q0RCLXNlZWtsb2dv/LmNvbS5wbmc"
                alt="img"
              />
            </div>
            <div className="info text-center">
              <p className="text-1xl text-orange-400">Nepal Sarkar</p>
              <p className="text-2xl text-orange-400">
                swasthya thatha jansankhya mantralay
              </p>
              <p className="text-2xl text-orange-400">swasthya sewa bebhag</p>
              <b>
                {" "}
                <h3 className="text-2xl text-sky-600">
                  swasthya Bewasthayapan suchana parnali{" "}
                </h3>
              </b>
              <b>
                <h2 className="text-2xl text-orange-400">Bal swasthya Card</h2>
              </b>
            </div>
          </div>
          <div className="form-container p-5 ">
            <div className="section-1 flex flex-wrap max-w-[75vw] bg-red-400">
              <div className="sub-section flex w-35 m-[1vw] bg-yellow-400">
                <p>mul darta No. :</p>
                <input className="border-none outline-dashed" type="text" onChange={handleChange} />
              </div>
              <div className="sub-section">
                <p>Gau ghar clinic darta No. :</p>
                <input type="text" onChange={handleChange} />
              </div>
              <div className="sub-section">
                <p>Khop sewa darta No. :</p>
                <input type="text" onChange={handleChange} />
              </div>
              <div className="sub-section">
                <p>Poshan sewa darta No. :</p>
                <input type="text" onChange={handleChange} />
              </div>
              <div className="sub-section" style={{ width: "auto" }}>
                <p>
                  Navjat sesu tatha bal rog ko akekrete bwasthapan sewa darta
                  No. :
                </p>
                <input type="text" onChange={handleChange} />
              </div>
            </div>
            <div className="section-1 section-2">
              <div className="sub-section">
                <p>Bachha ko naam thar :</p>
                <input type="text" onChange={handleChange} />
              </div>
              <div className="sub-section">
                <p>Gender :</p>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleChange}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleChange}
                  />
                  Female
                </label>
              </div>
              <div className="sub-section">
                <p>Birth Date:</p>
                <input type="date" onChange={handleChange} />
              </div>
              <div className="sub-section">
                <p>Ganma ko taul :</p>
                <input type="number" onChange={handleChange} />
                <p>gram</p>
              </div>
              <div className="sub-section">
                <p>Aama ko Naam :</p>
                <input type="text" onChange={handleChange} />
              </div>
              <div className="sub-section">
                <p>Buwa ko Naam :</p>
                <input type="text" onChange={handleChange} />
              </div>
              <div className="sub-section">
                <p>Address District :</p>
                <input type="text" onChange={handleChange} />
              </div>
              <div className="sub-section">
                <p> Gaupalika :</p>
                <input type="text" onChange={handleChange} />
              </div>
              <div className="sub-section">
                <p>Ward No :</p>
                <input type="number" onChange={handleChange} />
              </div>
              <div className="sub-section">
                <p>Toll No :</p>
                <input type="number" onChange={handleChange} />
              </div>
              <div className="sub-section">
                <p>Swasthyo sanstha Naam :</p>
                <input type="text" onChange={handleChange} />
              </div>
              <div className="sub-section">
                <p>Swasthyo karmi Naam :</p>
                <input type="text" onChange={handleChange} />
              </div>
              <div className="sub-section">
                <p>contact No :</p>
                <input type="text" onChange={handleChange} />
              </div>
              <div className="sub-section">
                <p>Card Issue Date :</p>
                <input type="date" onChange={handleChange} />
                <p>(ga/ma/sa)</p>
              </div>
            </div>
            {/* table starts here */}
            <div className="table bg-oranage">
              <div className="items heading">
                Nawjaat sesu tatha bal rog ko akirait bwasthapan
              </div>
              <div className="items">swasthya samsya</div>
              <div className="items">Date</div>
              <div className="items">Bewasthayapan</div>
              <div className="items">kafiyat</div>
            </div>
            <div className="grid-container">
              <div className="items rotating">more than 2 yrs</div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>

              {/* second body */}
              <div className="items rotating">less than 2 yrs</div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items">
                <input type="text" onChange={handleChange} />
              </div>
              <div className="items full">
                Yo card surakxit rakhnu hola ra harek patak swasthya ma aaudha
                yo card aniwarya roop le ledae aaunu hola
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Citizen;
