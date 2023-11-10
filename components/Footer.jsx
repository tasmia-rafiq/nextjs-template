import Image from "next/image";

const Footer = ({ logoWhite }) => {
  return (
    <footer className="bg-black pt-14 pb-7">
      <div className="container">
        <div className="flex flex-row items-start justify-between">
          <div className="col-lg-6">
            <div className="">
              <Image src={logoWhite} alt="SuperLabs" width={246} />
            </div>
          </div>
          <div className="col-lg-2 px-3">
            <h4 className="text-slate-50 mb-3">SuperLabs Info</h4>

            <ul className="p-0">
              <li>
                <a href="#/">Corporate Information</a>
              </li>
              <li>
                <a href="#/">Careers</a>
              </li>
              <li>
                <a href="#/">Open Roles</a>
              </li>
              <li>
                <a href="#/">Contact</a>
              </li>
              <li>
                <a href="#/">CheckList</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 px-3">
            <h4 className="text-slate-50 mb-3">Employees</h4>

            <ul className="p-0">
              <li>
                <a href="#/">SuperComm</a>
              </li>
              <li>
                <a href="#/">SuperMail</a>
              </li>
              <li>
                <a href="#/">SuperMeet</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 px-3">
            <h4 className="text-slate-50 mb-3">Vendor Info</h4>

            <ul className="p-0">
              <li>
                <a href="#/">Partner with Us</a>
              </li>
              <li>
                <a href="#/">Vendor Information</a>
              </li>
              <li>
                <a href="#/">Vendor Guide</a>
              </li>
            </ul>
          </div>
        </div>
        {/* row end */}

        <hr className="mt-13 md:mt-10 mb-7" />
        
        <div className="text-start text-gray-300 mb-4">
            <p>&copy; 2020 - 2023 SuperLabs. Acta Non Verba.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
