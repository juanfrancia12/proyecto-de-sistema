const NavBar = () => {
  return (
    <ul>
      <li>hola</li>
    </ul>
  )
}

type Props = {}

const PageHome = (props: Props) => {
  return (
    <div className="w-full bg-red-200">
      <div className="bg-blue-300 container mx-auto">
        <NavBar />
        <NavBar />
      </div>
    </div>
  )
}

export default PageHome
