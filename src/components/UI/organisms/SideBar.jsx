import { faComments, faHome, faPen, faUsers } from "@fortawesome/free-solid-svg-icons"
import Icon from "../atoms/Icon"
import NavLinks from "../molecules/NavLinks"
const SideBar = () => {
  const Links = [
    {
      id:1,
      title:"Blog Home",
      icon:<Icon icon={faHome} cls="mr-5 pr-5" />
    },
    {
      id:2,
      title:"Single Post",
      icon:<Icon icon={faPen} cls="mr-5 pr-5" />
    },
    {
      id:3,
      title:"About Xtra",
      icon:<Icon icon={faUsers} cls="mr-5 pr-5" />
    },
    {
      id:4,
      title:"Contact Us",
      icon:<Icon icon={faComments} cls="mr-5 pr-5" />
    }
  ]
  return (
    <div className="bg-teal-400">
     {
       Links.map(link => {
         return <NavLinks link={link} key={link.id}/>
       })
     }
    </div>
  )
}
export default SideBar
