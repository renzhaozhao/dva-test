import { connect } from 'dva'
import Count from '../../components/Count'

function mapStateToProps(state) {
  return { count: state.count }
}
const CountPage = connect(mapStateToProps)(Count)

export default CountPage
