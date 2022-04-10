import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTest } from '../features/tests/testSlice'

function TestForm() {
  const [text, setText] = useState('')  

  const dispatch = useDispatch()

  const onSubmit = e => {
      e.preventDefault()
      dispatch(createTest({text}))
      setText('')
  }

  return (
    <section>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Test</label>
                <input type="text" name='text' id='text' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-group">
                <button type='submit'>Agregar test</button>
            </div>
        </form>
    </section>
  )
}

export default TestForm