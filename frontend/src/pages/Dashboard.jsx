import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TestForm from '../components/TestForm'
import TestItem from '../components/TestItem'
import Spinner from '../components/Spinner'
// import { getTests } from '../features/tests/testSlice'
import { getTests, reset } from '../features/tests/testSlice'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { tests, isLoading, isError, message } = useSelector((state) => state.tests)

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getTests())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section>
        <h1>Perfil de {user && user.name}</h1>
      </section>

      <TestForm />

      <section className="content">
        {tests.lenght > 0 ? (
          <div className="tests">
            {tests.map((test) => (
              <TestItem key={test._id} test={test} />
            ))}
          </div>
        ) : (<h3>No tienes pruebas en plataforma</h3>)}
      </section>
    </>
  )
}

export default Dashboard