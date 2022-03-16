import Badge from '../UI/atoms/Badge'
import Divider from '../UI/atoms/Divider'
import Articles from "../UI/organisms/Articles"
import Icon from '../UI/atoms/Icon'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Button from '../UI/atoms/Button'
import Form from "../UI/molecules/Form"
import Logo from "../UI/molecules/Logo"
import SideBar from "../UI/organisms/SideBar"
const Main = () => {
  return (
    <div>
      <Button content={<Icon icon={faCoffee} />} type="default"/>
      <Icon cls="text-teal-400" icon={faCoffee}/>
      <Badge />
      <Divider />
      <Divider commentDivide="border-t-neutral-300" />
      <Articles/>
      <Form/>
      <div className="bg-teal-400">
      <Logo/>
      </div>
      <SideBar/>
    </div>
  )
}
export default Main
