import tick from "../../assets/tickIcon_plan.svg";
import { Button, buttonVariants } from '../../components/ui/Button';
import Larrow from "../../assets/Btn_Larrow.svg";
import { useState } from "react";

interface InviteUsersProps {
  setCurrentStep: (step: number) => void;
}

function Plans({setCurrentStep}: InviteUsersProps) {
  const [selected, setSelected] = useState(true)
  const handleClick = () => {
  setSelected(!selected);
};

  return (
    <div className=" mx-8 mt-10">
      <main className=" grid-rows-2">
        <div>
          <div className="flex justify-center mb-6">
            <div className="relative w-44 lg:w-[368px] rounded-md border h-12 p-1 bg-gray-200">
              <div className="relative w-full h-full flex items-center">
                <button
                  className="w-full flex justify-center text-[#0A090B] text-base cursor-pointer focus:outline-none"
                  onClick={handleClick}
                >
                  Monthly
                </button>
                <button
                  className="w-full flex justify-center text-[#0A090B] text-base cursor-pointer focus:outline-none"
                  onClick={handleClick}
                >
                  Annually
                </button>
              </div>

              <span
                className={`bg-white shadow text-[#0A090B] font-medium text-base flex items-center justify-center w-1/2 rounded h-10 transition-all duration-150 ease-linear top-[4px] absolute ${
                  selected
                    ? 'left-1'
                    : 'left-1/2 -ml-1'
                }`}
              >
                {selected ? 'Monthly' : 'Annually'}
              </span>
            </div>
          </div>
          <div className="font-medium text-xl mb-5">Plan Selection</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6">
          <div className="rounded-lg border border-[#E6E6E6] pt-6 px-6 pb-4">
            <h5 className="mb-2 text-lg font-medium text-[#0A090B]">
              What’s in Startup Plan?
            </h5>
            <h6 className="mb-6 font-normal text-xs  text-[#4F4D55]">
              Optimal for 10+ team size and new startup
            </h6>
            <div className="flex items-baseline text-[#0A090B] mb-6">
              <span className="text-lg font-medium">$</span>
              <span className="text-lg font-medium tracking-tight">49</span>
              <span className="ms-1 text-sm font-normal text-[#4F4D55] ">
                /month
              </span>
            </div>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200">
                <li></li>
                <li className="py-3">
                  <div className="flex items-center">
                    <img src={tick} alt="o" />
                    <span className="text-sm font-normal leading-tight text-[#4F4D55] ms-3">
                      Up to 10 Active Users
                    </span>
                  </div>
                </li>
                <li className="py-3">
                  <div className="flex items-center">
                    <img src={tick} alt="o" />
                    <span className="text-sm font-normal leading-tight text-[#4F4D55] ms-3">
                      Up to 30 Project Integrations
                    </span>
                  </div>
                </li>
                <li className="py-3">
                  <div className="flex items-center opacity-75">
                    <img className="opacity-75" src={tick} alt="o" />
                    <span className="text-sm font-normal leading-tight text-[#4F4D55] ms-3">
                      Analytics Module
                    </span>
                  </div>
                </li>
                <li className="py-3">
                  <div className="flex items-center opacity-75">
                    <img className="opacity-75" src={tick} alt="o" />
                    <span className="text-sm font-normal leading-tight text-[#4F4D55] ms-3">
                      Up to 10 Active Users
                    </span>
                  </div>
                </li>
                <li className="py-3">
                  <div className="flex items-center opacity-75">
                    <img className="opacity-75" src={tick} alt="o" />
                    <span className="text-sm font-normal leading-tight text-[#4F4D55] ms-3">
                      Up to 10 Active Users
                    </span>
                  </div>
                </li>
                <li className="py-3">
                  <div className="flex items-center opacity-75">
                    <img className="opacity-75" src={tick} alt="o" />
                    <span className="text-sm font-normal leading-tight text-[#4F4D55] ms-3">
                      Up to 10 Active Users
                    </span>
                  </div>
                </li>
              </ul>
              <button className="text-[#4F4D55] bg-white border-[1.5px] border-[#4F4D55] font-medium rounded-lg text-sm mt-5 px-14 py-2.5 h-10 inline-flex justify-center items-center w-full ">
                Choose
              </button>
            </div>
          </div>

          <div className="pt-6 px-6 pb-4 rounded-lg border border-[#E6E6E6] my-2.5 lg:my-0">
            <h5 className="mb-2 text-lg font-medium text-[#0A090B]">
              What’s in Startup Plan?
            </h5>
            <h6 className="mb-6 font-normal text-xs  text-[#4F4D55]">
              Optimal for 10+ team size and new startup
            </h6>
            <div className="flex items-baseline text-[#0A090B] mb-6">
              <span className="text-lg font-medium">$</span>
              <span className="text-lg font-medium tracking-tight">49</span>
              <span className="ms-1 text-sm font-normal text-[#4F4D55] ">
                /month
              </span>
            </div>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200">
                <li></li>
                <li className="py-3">
                  <div className="flex items-center">
                    <img src={tick} alt="o" />
                    <span className="text-sm font-normal leading-tight text-[#4F4D55] ms-3">
                      Up to 10 Active Users
                    </span>
                  </div>
                </li>
                <li className="py-3">
                  <div className="flex items-center">
                    <img src={tick} alt="o" />
                    <span className="text-sm font-normal leading-tight text-[#4F4D55] ms-3">
                      Up to 30 Project Integrations
                    </span>
                  </div>
                </li>
                <li className="py-3">
                  <div className="flex items-center">
                    <img src={tick} alt="o" />
                    <span className="text-sm font-normal leading-tight text-[#4F4D55] ms-3">
                      Analytics Module
                    </span>
                  </div>
                </li>
                <li className="py-3">
                  <div className="flex items-center">
                    <img src={tick} alt="o" />
                    <span className="text-sm font-normal leading-tight text-[#4F4D55] ms-3">
                      Up to 10 Active Users
                    </span>
                  </div>
                </li>
                <li className="py-3">
                  <div className="flex items-center opacity-75">
                    <img className="opacity-75" src={tick} alt="o" />
                    <span className="text-sm font-normal leading-tight text-[#4F4D55] ms-3">
                      Up to 10 Active Users
                    </span>
                  </div>
                </li>
                <li className="py-3">
                  <div className="flex items-center opacity-75">
                    <img className="opacity-75" src={tick} alt="o" />
                    <span className="text-sm font-normal leading-tight text-[#4F4D55] ms-3">
                      Up to 10 Active Users
                    </span>
                  </div>
                </li>
              </ul>
              <button className="text-white bg-blue-700 font-medium rounded-lg text-sm mt-5 px-14 py-2.5 h-10 inline-flex justify-center w-full items-center">
                Choose
              </button>
            </div>
          </div>

          <div className="rounded-lg border border-[#E6E6E6] pt-6 px-6 pb-4">
            <h5 className="mb-2 text-lg font-medium text-[#0A090B]">
              What’s in Startup Plan?
            </h5>
            <h6 className="mb-6 font-normal text-xs  text-[#4F4D55]">
              Optimal for 10+ team size and new startup
            </h6>
            <div className="flex items-baseline text-[#0A090B] mb-6">
              <span className="text-lg font-medium">$</span>
              <span className="text-lg font-medium tracking-tight">49</span>
              <span className="ms-1 text-sm font-normal text-[#4F4D55] ">
                /month
              </span>
            </div>
            <div className="flow-root">
              <ul className="divide-y divide-gray-200">
                <li></li>
                <li className="py-3">
                  <div className="flex items-center">
                    <img src={tick} alt="o" />
                    <span className="text-sm font-normal leading-tight text-[#4F4D55] ms-3">
                      Up to 10 Active Users
                    </span>
                  </div>
                </li>
                <li className="py-3">
                  <div className="flex items-center">
                    <img src={tick} alt="o" />
                    <span className="text-sm font-normal leading-tight text-[#4F4D55] ms-3">
                      Up to 30 Project Integrations
                    </span>
                  </div>
                </li>
                <li className="py-3">
                  <div className="flex items-center">
                    <img src={tick} alt="o" />
                    <span className="text-sm font-normal leading-tight text-[#4F4D55] ms-3">
                      Analytics Module
                    </span>
                  </div>
                </li>
                <li className="py-3">
                  <div className="flex items-center">
                    <img src={tick} alt="o" />
                    <span className="text-sm font-normal leading-tight text-[#4F4D55] ms-3">
                      Up to 10 Active Users
                    </span>
                  </div>
                </li>
                <li className="py-3">
                  <div className="flex items-center">
                    <img src={tick} alt="o" />
                    <span className="text-sm font-normal leading-tight text-[#4F4D55] ms-3">
                      Up to 10 Active Users
                    </span>
                  </div>
                </li>
                <li className="py-3">
                  <div className="flex items-center">
                    <img src={tick} alt="o" />
                    <span className="text-sm font-normal leading-tight text-[#4F4D55] ms-3">
                      Up to 10 Active Users
                    </span>
                  </div>
                </li>
              </ul>
              <button className="text-[#4F4D55] bg-white border-[1.5px] border-[#4F4D55] font-medium rounded-lg text-sm mt-5 px-14 py-2.5 h-10 inline-flex justify-center w-full items-center">
                Choose
              </button>
            </div>
          </div>
        </div>

        <div className=" flex justify-center lg:justify-end mt-11">
          <Button
            variant="default"
            className={buttonVariants({className: 'w-fit lg:w-[121px] mr-4' })}
            onClick={() => setCurrentStep(3)}
          >
            <span className="flex">
              <img src={Larrow} alt="R" />
              <p className="ml-2 lg:ml-4 text-lg font-medium">Back</p>
            </span>
          </Button>
          <Button
            variant="default"
            className={buttonVariants({ className: 'w-fit lg:w-[99px]' })}
          >
            <span className="flex">
              <p className="text-lg font-medium">Finish</p>
            </span>
          </Button>
        </div>
      </main>
    </div>
  );
}

export default Plans