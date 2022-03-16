// import Badge from '../UI/atoms/Badge'
// import Divider from '../UI/atoms/Divider'
// import Input from '../UI/atoms/Input'
// import Articles from "../UI/organisms/Articles"
// import Icon from '../UI/atoms/Icon'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
// import Button from '../UI/atoms/Button'
import Form from "../UI/molecules/Form"
const Main = () => {
  return (
    <div>
      {/* <Button content={<Icon icon={faCoffee} />} type="default"/>
      <Icon cls="text-teal-400" icon={faCoffee}/>
      <Badge />
      <Divider />
      <Divider commentDivide="border-t-neutral-300" />
      <Input />
      <Articles/> */}
      <Form/>
      <h1 style={{color:"red" , fontWeight:"bolder"}}>Main</h1>
    </div>
  )
}
export default Main
