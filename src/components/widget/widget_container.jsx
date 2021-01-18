import { connect } from "react-redux";
import Widget from './widget';

const mapStateToProps = ({ clients, errors }) => {
    return {
        clients,
        errors
    }
}

export default connect(mapStateToProps)(Widget);