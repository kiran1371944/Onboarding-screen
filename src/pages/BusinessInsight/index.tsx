import { Button, buttonVariants } from '../../components/ui/Button';
import Rarrow from "../../assets/Btn_Rarrow.svg";
import Larrow from "../../assets/Btn_Larrow.svg";
import { TextInput } from '../../components/ui/Text field/TextField';
import { useForm, SubmitHandler } from 'react-hook-form';

interface InviteUsersProps {
    setCurrentStep: (step: number) => void;
  }

interface FormData {
    employees: number;
    country: string;
    language: string;
    city: string;
    currency: string;
}  

function BusinessInsight({setCurrentStep}: InviteUsersProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>();
    
      const onSubmit: SubmitHandler<FormData> = (_data) => {
        setCurrentStep(3);
      };
  return (
    <div className=" pl-16 lg:pl-20 pr-14">
      <main className="grid lg:grid-cols-2 pt-28 lg:pr-6">
        <div className="col-span-2 lg:col-span-1 w-full " >
          <form >
            <div className="mb-10">
              <label className="block mb-1 text-sm font-medium text-gray-900">
                No of Employees
              </label>
              <TextInput
                {...register('employees', {
                  required: 'This field is required',
                  pattern: {
                    value: /^[1-9]\d*$/,
                    message: 'Please provide a valid number',
                  },

                })}
                className=" w-full text-[#7F7D83] h-12 rounded-lg border-[#E6E6E6]"
                placeholder="Enter..."
              />
              {errors.employees && (
                <p className="text-red-500">{errors.employees.message}</p>
              )}
            </div>

            <div className="mb-10">
              <label className="block mb-1 text-sm font-medium text-gray-900">
                Country
              </label>
              <select
                {...register('country', { required: 'This field is required' })}
                className="w-full text-[#7F7D83] h-12 rounded-lg border-[#E6E6E6]"
              >
                <option disabled selected value="">
                  Select
                </option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </select>
              {errors.country && (
                <p className="text-red-500">{errors.country.message}</p>
              )}
            </div>

            <div className="mb-10">
              <label className="block mb-1 text-sm font-medium text-gray-900">
                Language
              </label>
              <select
                {...register('language', {
                  required: 'This field is required',
                })}
                className="w-full  text-[#7F7D83] h-12 rounded-lg border-[#E6E6E6]"
              >
                <option disabled selected value="">
                  Select
                </option>
                <option>English</option>
                <option>Hindi</option>
              </select>
              {errors.language && (
                <p className="text-red-500">{errors.language.message}</p>
              )}
            </div>
          </form>
        </div>

        <div className="lg:ml-6 col-span-2 lg:col-span-1 lg:mt-28 mb-10 lg:mb-48 w-full ">
          <form>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-900">
                City
              </label>
              <TextInput
                className="w-full text-[#7F7D83] mb-10 h-12 rounded-lg border-[#E6E6E6]"
                placeholder="Select"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-900">
                Currency
              </label>
              <select
                {...register('currency', {
                  required: 'This field is required',
                })}
                className="w-full text-[#7F7D83] h-12 rounded-lg border-[#E6E6E6]"
              >
                <option disabled selected value="">
                  Select
                </option>
                <option>Rupees</option>
                <option>Dollar</option>
              </select>
              {errors.currency && (
                <p className="text-red-500">{errors.currency.message}</p>
              )}
            </div>
          </form>
        </div>
      </main>
      <div className=" flex justify-center lg:justify-end">
        <Button
          variant="default"
          className={buttonVariants({className: 'w-fit lg:w-[121px] mr-4' })}
          onClick={() => setCurrentStep(1)}
        >
          <span className="flex">
            <img src={Larrow} alt="R" />
            <p className="ml-4 text-lg font-medium">Back</p>
          </span>
        </Button>
        <Button
          variant="default"
          className={buttonVariants({ className: 'w-fit lg:w-[119px]' })}
          //   onClick={() => setCurrentStep(3)}
          onClick={handleSubmit(onSubmit)}
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

export default BusinessInsight


// import { Button, buttonVariants } from '../../components/ui/Button';
// import Rarrow from "../../assets/Btn_Rarrow.svg";
// import Larrow from "../../assets/Btn_Larrow.svg";
// import { TextInput } from '../../components/ui/Text field/TextField';
// import { useForm, SubmitHandler } from 'react-hook-form';

// interface InviteUsersProps {
//     setCurrentStep: (step: number) => void;
//   }

// interface FormData {
//     employees: number;
//     country: string;
//     language: string;
//     city: string;
//     currency: string;
// }  

// function BusinessInsight({setCurrentStep}: InviteUsersProps) {
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//       } = useForm<FormData>();
    
//       const onSubmit: SubmitHandler<FormData> = (_data) => {
//         setCurrentStep(3);
//       };
//   return (
//     <div className="w-full">
//       <main className="grid lg:grid-cols-2 w-full">
//         <div className="col-span-2 lg:col-span-1 ">
//           <form >
//             <div className="mb-10">
//               <label className="block mb-1 text-sm font-medium text-gray-900">
//                 No of Employees
//               </label>
//               <TextInput
//                 {...register('employees', {
//                   required: 'This field is required',
//                   pattern: {
//                     value: /^[1-9]\d*$/,
//                     message: 'Please provide a valid number',
//                   },

//                 })}
//                 className=" w-full text-[#7F7D83] h-12 rounded-lg border-[#E6E6E6]"
//                 placeholder="Enter..."
//               />
//               {errors.employees && (
//                 <p className="text-red-500">{errors.employees.message}</p>
//               )}
//             </div>

//             <div className="mb-10">
//               <label className="block mb-1 text-sm font-medium text-gray-900">
//                 Country
//               </label>
//               <select
//                 {...register('country', { required: 'This field is required' })}
//                 className="w-full text-[#7F7D83] h-12 rounded-lg border-[#E6E6E6]"
//               >
//                 <option disabled selected value="">
//                   Select
//                 </option>
//                 <option>Canada</option>
//                 <option>France</option>
//                 <option>Germany</option>
//               </select>
//               {errors.country && (
//                 <p className="text-red-500">{errors.country.message}</p>
//               )}
//             </div>

//             <div className="mb-10">
//               <label className="block mb-1 text-sm font-medium text-gray-900">
//                 Language
//               </label>
//               <select
//                 {...register('language', {
//                   required: 'This field is required',
//                 })}
//                 className="w-full  text-[#7F7D83] h-12 rounded-lg border-[#E6E6E6]"
//               >
//                 <option disabled selected value="">
//                   Select
//                 </option>
//                 <option>English</option>
//                 <option>Hindi</option>
//               </select>
//               {errors.language && (
//                 <p className="text-red-500">{errors.language.message}</p>
//               )}
//             </div>
//           </form>
//         </div>

//         <div className="col-span-2 lg:col-span-1">
//             <div>
//               <label className="block mb-1 text-sm font-medium text-gray-900">
//                 City
//               </label>
//               <TextInput
//                 className="w-full text-[#7F7D83] mb-10 h-12 rounded-lg border-[#E6E6E6]"
//                 placeholder="Select"
//               />
//             </div>
//             <div>
//               <label className="block mb-1 text-sm font-medium text-gray-900">
//                 Currency
//               </label>
//               <select
//                 {...register('currency', {
//                   required: 'This field is required',
//                 })}
//                 className="w-full text-[#7F7D83] h-12 rounded-lg border-[#E6E6E6]"
//               >
//                 <option disabled selected value="">
//                   Select
//                 </option>
//                 <option>Rupees</option>
//                 <option>Dollar</option>
//               </select>
//               {errors.currency && (
//                 <p className="text-red-500">{errors.currency.message}</p>
//               )}
//             </div>
//         </div>
//       </main>
//       <div className=" flex justify-center lg:justify-end">
//         <Button
//           variant="default"
//           className={buttonVariants({ size: 'lg', className: 'w-fit mr-4' })}
//           onClick={() => setCurrentStep(1)}
//         >
//           <span className="flex">
//             <img src={Larrow} alt="R" />
//             <p className="ml-4">Back</p>
//           </span>
//         </Button>
//         <Button
//           variant="default"
//           className={buttonVariants({ size: 'lg', className: 'w-fit' })}
//           //   onClick={() => setCurrentStep(3)}
//           onClick={handleSubmit(onSubmit)}
//         >
//           <span className="flex">
//             <p className="mr-4">Next</p>
//             <img src={Rarrow} alt="R" />
//           </span>
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default BusinessInsight