import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

interface FormProps {
  change?: any;
  Value?: string;
}

const Form = ({ change, Value }: FormProps) => {
  return (
    <form
      onChange={change}
      defaultValue={Value}
      className="flex justify-end items-center media"
    >
      <Input />
      <Button
        content={<Icon iconShape={faSearch} extraClass="w-[60px]" />}
        buttonType="hover:bg-teal-500 "
      />
    </form>
  );
};
export default Form;
