import { faHammer } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Logo = () => {
    return (
        <div className="text-center text-3xl mb-2 font-header">
            <span className="pr-2">BlogBuilder</span>
            <FontAwesomeIcon icon={faHammer} />
        </div>
    )
}