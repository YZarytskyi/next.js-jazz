import { useState } from "react";

const PRICE_PER_ITEM = 100;
const projectTypes = ["Villa", "Residential", "Office", "Other"];

const Contacts = () => {
  // const [activeProjectType, setActiveProjectType] = useState("villa");
  const [aerial, setAerial] = useState(1);
  const [exterior, setExterior] = useState(0);
  const [interior, setInterior] = useState(0);

  const imageTypes = [
    { state: aerial, title: "Aerial", name: "aerial" },
    { state: exterior, title: "3D Exterior", name: "exterior" },
    { state: interior, title: "3D Interior", name: "interior" },
  ];

  const setQty = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    const isIncrement = value === "+";
    const setStateValue = (prev) => (isIncrement ? prev + 1 : prev - 1);

    switch (name) {
      case "aerial":
        setAerial(setStateValue);
        break;
      case "exterior":
        setExterior(setStateValue);
        break;
      default:
        setInterior(setStateValue);
        break;
    }
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
  };

  const totalImgQty = aerial + exterior + interior;
  const totalPrice = totalImgQty * PRICE_PER_ITEM;

  return (
    <section id="contacts">
      <h2 className="mb-[76px] text-[54px] leading-[1.2] font-[700]">
        Contacts
      </h2>
      <p className="mb-[50px] text-[28px] leading-[1.3] font-[700]">
        Make request using form below or send e-mail to info@jazzrender.com
      </p>
      <form className="w-full" onSubmit={onSubmitForm}>
        <div className="flex gap-[60px]">
          <div className="w-1/2 flex flex-col">
            <label className="mb-[40px] flex border-b-[1px] border-[#ABABAB]">
              {/* <span>Your Name*</span> */}
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full outline-none"
              />
            </label>
            <label className="mb-[40px] border-b-[1px] border-[#ABABAB]">
              {/* <span>Your Email*</span> */}
              <input
                type="text"
                placeholder="Your Email*"
                className="w-full outline-none"
              />
            </label>
            <p className="mb-[4px] text-[#585858]">
              Feel free to leave your comments
            </p>
            <textarea className="h-full border-[#ABABAB] border-[1px] resize-none outline-none px-2 py-2" />
          </div>
          <div className="w-1/2">
            <p className="mb-[21px] text-[18px]">Choose Project Type*</p>
            <div className="mb-[40px] flex justify-between text-[18px]">
              {projectTypes.map((type) => (
                <label className="flex gap-[12px] cursor-pointer" key={type}>
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    className="appearance-none w-[24px] h-[24px] cursor-pointer after:content-[''] after:w-[24px] after:h-[24px] after:border-[#ABABAB] after:border-[1.5px] checked:after:bg-black checked:after:border-black checked:after:content-['\2713'] after:text-white after:flex after:justify-center after:items-center"
                    defaultChecked={type === "Villa"}
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
            <label className="mb-[55px] flex justify-between border-b-[1px] border-[#ABABAB] text-[18px]">
              <span>Deadline</span>
              <input type="date" />
            </label>
            <p className="mb-[24px] text-[18px]">Image Quantity:</p>
            <ul className="mb-[51px] flex justify-between">
              {imageTypes.map((type) => (
                <li className="flex items-center flex-col" key={type.name}>
                  <div className="mb-[8px] flex items-center gap-[28px]">
                    <button
                      type="button"
                      name={type.name}
                      onClick={setQty}
                      value="-"
                      disabled={!type.state}
                      className="text-[30px] font-[600] disabled:text-[#ABABAB]"
                    >
                      -
                    </button>
                    <span
                      className={`font-[700] text-[28px] ${
                        !type.state ? "text-[#ABABAB]" : ""
                      }`}
                    >
                      {type.state}
                    </span>
                    <button
                      type="button"
                      name={type.name}
                      value="+"
                      onClick={setQty}
                      className="text-[30px] font-[600]"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-[14px] leading-[1.45]">{type.title}</p>
                </li>
              ))}
            </ul>
            <div className="flex justify-between border-b-[1px] pb-[4px] border-[#222222] mb-[12px] font-[700] text-[18px] leading-[1.45]">
              <p>Total Price</p>
              <span>{totalPrice.toFixed(2)} $</span>
            </div>
            <div className="flex justify-between text-[#585858]">
              <p>Total Image Quantity</p>
              <span>{totalImgQty}</span>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-[45px] bg-black text-white py-[10px] px-[70px] tracking-[0.05em] font-[700] leading-[1.3]"
        >
          SEND
        </button>
      </form>
    </section>
  );
};

// export async function getServerSideProps() {
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()

//   return {
//     props: {},
//   }
// }

export default Contacts;
