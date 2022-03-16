import Input from "../atoms/Input"
import Button from "../atoms/Button"
import Icon from "../atoms/Icon"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
const Form = (props) => {
  return (
    <div className="flex justify-end items-center">
   <Input/>
   <Button type="default" content={<Icon icon={faSearch}/>}/>
    </div>
  )
}
export default Form
