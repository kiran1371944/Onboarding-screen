/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable no-promise-executor-return */
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// import { Button, buttonVariants } from '../../components/ui/Button';
import { TextInput } from '../../components/ui/Text field/TextField';
import { RadioButton } from '../../components/ui/RadioButton';
import { ToggleButton } from '../../components/ui/ToggleButton';

function Buttons() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Inputs</title>
      </Helmet>

      <div className="container mx-auto my-10">
        <Link to="/">
          <h1 className="mb-2 text-l link text-gray-900 dark:text-gray-400">
            Home
          </h1>
        </Link>
        <h1 className="mb-10 text-3xl font-bold text-gray-900 dark:text-gray-900">
          Inputs
        </h1>
        <div className="grid gap-4">
          <TextInput
            variant="default"
            label="Label"
            sublabel="validation text"
            placeholder="Enter..."
            size="default"
          />
          <TextInput
            variant="danger"
            label="Label"
            sublabel="validation text"
            placeholder="Enter Text"
            size="default"
          />
          <TextInput
            variant="success"
            label="Label"
            sublabel="validation text"
            placeholder="Enter Text"
            size="default"
          />
          <RadioButton
            variant="success"
            label="Label 1"
            sublabel="validation text"
            placeholder="Enter Text"
            size="default"
            name="default-radio"
          />
          <RadioButton
            variant="success"
            label="Label 2"
            sublabel="validation text"
            placeholder="Enter..."
            size="default"
            name="default-radio"
          />
          <ToggleButton
            variant="success"
            label="Toggle label"
            sublabel="validation text"
            placeholder="Enter"
            size="default"
            name="default-radio"
          />
        </div>
      </div>
    </div>
  );
}

export default Buttons;
