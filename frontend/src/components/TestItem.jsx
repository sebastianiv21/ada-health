import { useDispatch } from "react-redux"
import { deleteTest } from '../features/tests/testSlice'
import { FaWindowClose } from "react-icons/fa"

function TestItem({test}) {
  const dispatch = useDispatch()  

  return (
    <div className="test">
        <div>
            {new Date(test.createdAt).toLocaleString('es-CO')}
        </div>
        <h2>{test.text}</h2>
        <button onClick={() => dispatch(deleteTest(test._id))} className="close"><FaWindowClose /></button>
    </div>
  )
}

export default TestItem