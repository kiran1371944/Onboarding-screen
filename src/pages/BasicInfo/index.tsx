import { TextInput } from '../../components/ui/Text field/TextField';
import { Button, buttonVariants } from '../../components/ui/Button';
import LogoUpload from '../../assets/UploadLogo-box.svg';
import Rarrow from "../../assets/Btn_Rarrow.svg";
import { ChangeEvent, useState } from 'react';
import {useForm} from "react-hook-form";

interface InviteUsersProps {
    setCurrentStep: (step: number) => void;
  }

function BasicInfo({setCurrentStep}: InviteUsersProps) {

    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [errorMessage, setErrorMessage] = useState<string>('');
  
    const handleLogoUploadClick = () => {
      const logoInput = document.getElementById('logoInput') as HTMLInputElement | null;
      if (logoInput) {
        logoInput.click();
      }
    };
  
    const handleLogoFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
  
      if (file) {
        const allowedTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif'];
        const maxDimensions = { width: 800, height: 400 };
  
        if (allowedTypes.includes(file.type)) {
          const image = new Image();
          image.src = URL.createObjectURL(file);
  
          image.onload = () => {
            if (image.width <= maxDimensions.width && image.height <= maxDimensions.height) {
              setLogoFile(file);
              setErrorMessage('');
            } else {
              setErrorMessage(`Image dimensions should be within ${maxDimensions.width}x${maxDimensions.height}px.`);
            }
          };
        } else {
          setErrorMessage('Invalid file type. Please upload SVG, PNG, JPG, or GIF.');
        }
      }
    };

    const { register, handleSubmit, formState: { errors } } = useForm();    
    const onSubmit = (data: any) => {
      console.log(data);
      
        setCurrentStep(2);
      };
    return (
      <>
        <div className="pl-20 pr-14">
          <div className="max-w-[502px] mb-20  pt-32 text-[#2D2B32]">
            <div>
              <label className="block mb-1 text-sm font-medium text-[#2D2B32]">
                Business Name
              </label>
              <TextInput
                {...register('businessName', { required: true })}
                className={`w-full text-[#000] mb-10 h-12 rounded-lg border-[#E6E6E6] ${
                  errors.businessName ? 'border-red-500' && 'mb-4' : ''
                }`}
                placeholder="Enter..."
              />
              {errors.businessName && (
                <p className="text-red-500 text-sm">This field is required</p>
              )}
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-[#2D2B32]">
                Business Type
              </label>
              <TextInput
                {...register('businessType', { required: true })}
                className={`w-full text-[#000] mb-10 h-12 rounded-lg border-[#E6E6E6] ${
                  errors.businessType ? 'border-red-500' && 'mb-4' : ''
                }`}
                placeholder="Enter..."
              />
              {errors.businessType && (
                <p className="text-red-500 text-sm">This field is required</p>
              )}
            </div>
            <div className="flex">
              <div className="mr-14 lg:mr-[122px]" onClick={handleLogoUploadClick}>
                <p className="font-medium text-sm mb-2">Logo</p>
                <div className="w-20 lg:w-36">
                  <img
                    src={logoFile ? URL.createObjectURL(logoFile) : LogoUpload}
                    alt="Logo"
                  />
                </div>

                <input
                  type="file"
                  id="logoInput"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleLogoFileChange}
                />
              </div>
              <div>
                <p className="font-medium text-sm mb-3">Theme Colours</p>
                <div className="flex flex-wrap gap-2">
                  {Array.from({ length: 15 }).map((_, index) => (
                    <div
                      key={index}
                      className="rounded w-5 h-5 mt-1 lg:w-10 lg:h-10 bg-red-400"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          </div>

          <div className=" flex justify-center lg:justify-end">
            <Button
              variant="default"
              className={buttonVariants({className: 'w-fit lg:w-[119px]' })}
              //   onClick={() => setCurrentStep(2)}
              onClick={handleSubmit(onSubmit)}
            >
              <span className="flex">
                <p className="mr-4 text-lg font-medium">Next</p>
                <img src={Rarrow} alt="R" />
              </span>
            </Button>
          </div>
        </div>
      </>
    );
}

export default BasicInfo