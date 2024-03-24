import { Button, buttonVariants } from '../../components/ui/Button';
import Rarrow from "../../assets/Btn_Rarrow.svg";
import Larrow from "../../assets/Btn_Larrow.svg";
import Invite from "../../assets/Invite_Btn.svg";
import { TextInput } from '../../components/ui/Text field/TextField';

interface InviteUsersProps {
    setCurrentStep: (step: number) => void;
  }
  
function InviteUsers({setCurrentStep}: InviteUsersProps) {
  return (
    <div className=" pl-10 lg:pl-20 pr-14">
      <main className="mb-36 p-1 lg:mb-[374px] pt-[101px]   ">
      {/* grid md:grid-cols-2 */}
          <div className=" col-span-2 mb-4">
            <label className="col-span-2 mb-1 text-sm font-medium text-[#2D2B32] bg">
              Invite Users
            </label>
            <div className='flex items-center'>
                <div className='w-11/12 lg:w-[811px] '>
                <TextInput
                className="w-full  text-[#000] h-12 rounded-lg border-[#E6E6E6] "
                placeholder="debra.holt@example.com"
              />
                </div>
                <div className='ml-3 lg:ml-7' >
              <Button
                variant="outline"
                className={buttonVariants({  className: 'm-0 w-24 h-12' })}
              >
                <span className="flex">
                  <p className="mr-4">Invite</p>
                  <img className="mr-4" src={Invite} alt="R" />
                </span>
              </Button>
              </div>
            </div>

          </div>

        <div className="w-1/2 lg:w-[452px] font-normal text-sm text-[#7F7D83]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div>
      </main>

      <div className=" flex justify-center lg:justify-end">
        <Button
          className={buttonVariants({
            className: 'w-24 lg:w-[86px] lg:mr-4 shadow-none border-none bg-white',
          })}
          onClick={() => setCurrentStep(4)}
        >
          <span className="flex">
            <p className=" text-[#4F4D55] text-lg font-medium ">Skip</p>
          </span>
        </Button>
        <Button
          variant="default"
          className={buttonVariants({ className: 'w-fit lg:w-[121px] mr-2 lg:mr-4' })}
          onClick={() => setCurrentStep(2)}
        >
          <span className="flex">
            <img src={Larrow} alt="R" />
            <p className="ml-4 text-lg font-medium">Back</p>
          </span>
        </Button>
        <Button
          variant="default"
          className={buttonVariants({ className: 'w-fit lg:w-[119px]' })}
          onClick={() => setCurrentStep(4)}
        >
          <span className="flex">
            <p className="mr-4 text-lg font-medium">Next</p>
            <img src={Rarrow} alt="R" />
          </span>
        </Button>
      </div> 
    </div>
  );
}

export default InviteUsers