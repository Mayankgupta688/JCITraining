
import HeaderComponent from "../components/HeaderComponent"
import RenamedComponent, { helloAll as myFunction } from "../components/ContentComponent"
import FooterComponent from "../components/FooterComponent";

myFunction()

export default function ContainerComponent() {
    return (
        <div>
            <h1>This is Container Component...</h1><hr/>
            <HeaderComponent></HeaderComponent><hr/>
            <RenamedComponent></RenamedComponent><hr/>
            <FooterComponent></FooterComponent>
        </div>
    )
}