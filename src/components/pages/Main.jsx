import Badge from '../UI/atoms/Badge'
import Divider from '../UI/atoms/Divider'
import Input from '../UI/atoms/Input'
import Articles from "../UI/organisms/Articles"
const Main = () => {
  return (
    <div>
      <Badge />
      <Divider />
      <Divider commentDivide="border-t-neutral-300" />
      <Input />
<Articles/>
      <h1 style={{color:"red" , fontWeight:"bolder"}}>Main</h1>
    </div>
  )
}
export default Main
