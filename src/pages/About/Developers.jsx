import eryc from "../../images/mypic-nobgg.png";
import hafizh from "../../images/hafis.png";
import { Github, Instagram, Linkedin } from "lucide-react";

const Developers = () => {
  return (
    <div className="flex flex-col gap-14 overflow-hidden">
      <h1 className="text-4xl font-bold text-center">
        Meet the <span className="text-main">Developers</span>
      </h1>
      <div className="flex justify-between items-center gap-40">
        <div className="flex bg-gray-200 rounded-xl p-4 shadow-md h-96 grayscale hover:grayscale-0 ease-in-out duration-300">
          <img
            src={eryc}
            alt="eryc"
            className=" object-contain h-[400px] self-end overflow-hidden"
          />
          <div className="bg-white flex flex-col gap-1 p-3 rounded-lg absolute bottom-4">
            <p className="font-bold">Erycson Zulkarnain Wijaya</p>
            <p className="text-gray-400">Frontend Developer</p>
            <div className="flex items-center mt-1 gap-3">
              <a
                className="text-main hover:translate-y-1 smooth"
                href="https://www.instagram.com/eryc_s.z.w/"
                id="profile-link"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                className="text-main hover:translate-y-1 smooth"
                href="https://github.com/eszw10"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                className="text-main hover:translate-y-1 smooth"
                href="https://www.linkedin.com/in/erycson-zulkarnain-wijaya-a01a75169/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex bg-gray-200 rounded-xl p-4 shadow-md w-64 h-96 grayscale hover:grayscale-0 ease-in-out duration-300">
          <img
            src={hafizh}
            alt="hafizh"
            className=" object-contain h-[430px] scale-150 self-end overflow-hidden"
          />
          <div className="bg-white flex flex-col gap-1 p-3 rounded-lg absolute bottom-4">
            <p className="font-bold">Hafizh Satria Buana</p>
            <p className="text-gray-400">Backend Developer</p>
            <div className="flex items-center mt-1 gap-3">
              <a
                className="text-main hover:translate-y-1 smooth"
                href="https://www.instagram.com/eryc_s.z.w/"
                id="profile-link"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                className="text-main hover:translate-y-1 smooth"
                href="https://github.com/hapisssss"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                className="text-main hover:translate-y-1 smooth"
                href="https://www.linkedin.com/in/hafiz-satria-buana"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
