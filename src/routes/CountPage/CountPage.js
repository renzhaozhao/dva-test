import { connect } from 'dva'
import Count from '../../components/Count'

function mapStateToProps(state) {
  return { count: state.count }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch({ type: 'count/add' }),
    onMinus: () => dispatch({ type: 'count/minus' })
  }
}

const CountPage = connect(mapStateToProps, mapDispatchToProps)(Count)

export default CountPage
