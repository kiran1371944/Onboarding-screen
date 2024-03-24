import { useState } from "react";
import Step1 from "../BasicInfo";
import Step2 from "../BusinessInsight";
import Step3 from "../InviteUsers";
import Step4 from "../Plans";
import classNames from 'classnames';

function Onboard() {
 const [currentStep, setCurrentStep] = useState(1);  
//  const [newStep, setNewStep] = useState(1);  

//   const [currentStep, setCurrentStep] = useState([1]); 

//   const handleStepChange = (newStep:any) => {
//     setNewStep(newStep) 
//     setCurrentStep([...currentStep, newStep]); 
//   };
  const renderStep = () => {
   switch (currentStep) {
      case 1:
        return <Step1 setCurrentStep={setCurrentStep}/>;
      case 2:
        return <Step2 setCurrentStep={setCurrentStep}/>;
      case 3:
        return <Step3 setCurrentStep={setCurrentStep}/>;
      case 4:
        return <Step4 setCurrentStep={setCurrentStep}/>;
      default:
        return null;
   }
    // switch (currentStep[currentStep.length - 1]) { 
    //   case 1:
    //     return <Step1 setCurrentStep={handleStepChange} />;
    //   case 2:
    //     return <Step2 setCurrentStep={handleStepChange} />;
    //   case 3:
    //     return <Step3 setCurrentStep={handleStepChange} />;
    //   case 4:
    //     return <Step4 setCurrentStep={handleStepChange} />;
    //   default:
    //     return null;
    // }

  };  
  return (
    <>
      <div className="flex flex-col bg-gray-50 font-inter">
        <main className="grid lg:grid-cols-3  bg-white rounded-2xl relative mt-[119px] mb-[127px] shadow-md lg:mx-[200px]">
        {/* lg:max-w-[1520px] w-full lg:max-h-[754px] */}
          <div className="absolute text-xl lg:text-[22px] -top-[64px] w-[374px] pl-2 lg:pl-[5px]">
            <p className="font-medium">
              Business Account Creation- Step {currentStep}
              {/* {newStep} */}
            </p>
          </div>
          <aside className="col-span-3 lg:col-span-1 h-full flex relative ">
            <div className="">
              <section className="mt-[122px] ml-[132px] mr-[129px] lg:pb-[167px]">
                <div>
                  <ol className="relative border-s-2 border-gray-200 ">
                    <li className="mb-10 ms-4">
                      <div
                        className="absolute flex justify-center items-center w-8 h-8 bg-white rounded-full 
                        mt-0 -start-4 "
                      >
                        <div
                          className={classNames(
                            'absolute flex justify-center items-center w-6 h-6 rounded-full mt-0 border-2 border-[#E6E6E6]',
                            {
                              'bg-[#E6E6E6] && text-black ': currentStep >= 1,
                              // 'bg-[#E6E6E6] && text-black ': currentStep.includes(1), 
                              // 'bg-white && text-[#E6E6E6]': !currentStep.includes(1),
                  
                            }
                          )}
                        >
                          1
                        </div>
                      </div>
                      <h3 className="font-normal text-xl text-[#0A090B]">
                        Basic info
                      </h3>
                      <p className="text-base font-normal text-[#7F7D83]">
                        Teritiary
                      </p>
                      <p className="text-base font-normal text-[#7F7D83]">
                        Teritiary
                      </p>
                    </li>
                    <li className="mb-10 ms-4">
                      <div
                        className="absolute flex justify-center items-center w-8 h-8 bg-white rounded-full 
                        mt-0 -start-4 "
                      >
                        <div
                          className={classNames(
                            'absolute flex justify-center items-center w-6 h-6 rounded-full mt-0 border-2 border-[#E6E6E6]',
                            {
                              'bg-[#E6E6E6] && text-black ': currentStep >= 2,
                              'bg-white && text-[#E6E6E6]': currentStep !< 2,
                              // 'bg-[#E6E6E6] && text-black ': currentStep.includes(2), 
                              // 'bg-white && text-[#E6E6E6]': !currentStep.includes(2),
                  
                            }
                          )}
                        >
                          2
                        </div>
                      </div>
                      <h3 className="font-normal text-xl text-[#0A090B]">
                        Business Insight
                      </h3>
                      <p className="text-base font-normal text-[#7F7D83]">
                        Teritiary
                      </p>
                      <p className="text-base font-normal text-[#7F7D83]">
                        Teritiary
                      </p>
                    </li>
                    <li className="mb-10 ms-4">
                      <div
                        className="absolute flex justify-center items-center w-8 h-8 bg-white rounded-full 
                        mt-0 -start-4 "
                      >
                        <div
                          className={classNames(
                            'absolute flex justify-center items-center w-6 h-6 rounded-full mt-0 border-2 border-[#E6E6E6]',
                            {
                              'bg-[#E6E6E6] && text-black ': currentStep >= 3,
                              'bg-white && text-[#E6E6E6]': currentStep !< 3,
                              // 'bg-[#E6E6E6] && text-black ': currentStep.includes(3), 
                              // 'bg-white && text-[#E6E6E6]': !currentStep.includes(3),

                            }
                          )}
                        >
                          3
                        </div>
                      </div>
                      <h3 className="font-normal text-xl text-[#0A090B]">
                        Invite Users
                      </h3>
                      <p className="text-base font-normal text-[#7F7D83]">
                        Teritiary
                      </p>
                      <p className="text-base font-normal text-[#7F7D83]">
                        Teritiary
                      </p>
                    </li>
                    <li className="mb-10 ms-4">
                      <div
                        className="absolute flex justify-center items-center w-8 h-8 bg-white rounded-full 
                        mt-0 -start-4 "
                      >
                        <div
                          className={classNames(
                            'absolute flex justify-center items-center w-6 h-6 rounded-full mt-0 border-2 border-[#E6E6E6]',
                            {
                              'bg-[#E6E6E6] && text-black ': currentStep === 4,
                              'bg-white && text-[#E6E6E6]': currentStep !< 4,
                              // 'bg-[#E6E6E6] && text-black ': currentStep.includes(4), 
                              // 'bg-white && text-[#E6E6E6]': !currentStep.includes(4),

                            }
                          )}
                        >
                          4
                        </div>
                      </div>
                      <h3 className="font-normal text-xl text-[#0A090B]">
                        Finish
                      </h3>
                    </li>
                  </ol>
                </div>
              </section>
            </div>
            <div className="absolute my-20 h-[34.5rem] lg:border-r border-[#E6E6E6]  right-0" />
          </aside>

          <aside className="col-span-3 lg:col-span-2 h-full pb-14">
            {renderStep()}
          </aside>
          {/* </div>  */}
        </main>
      </div>
    </>
  );
}

export default Onboard
